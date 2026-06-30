/**
 * @module tab
 *
 * Interactive behaviour for the QLD tab component. Each `.qld__tab-container`
 * is a self-contained tab set: a `[role="tablist"]` of `.qld__tab-button`s and
 * the matching `.qld__tab-content` panels, paired by their shared `data-tab`
 * value.
 *
 * Activation is manual (the WAI-ARIA tabs pattern): arrow keys move focus along
 * the tablist, and the focused tab is activated on click or Enter/Space.
 */

// Distance in px the tab list scrolls each time an overflow arrow is clicked.
const SCROLL_AMOUNT = 500;

/**
 * Initialise every tab component found within `root`.
 *
 * @param {Document|Element} root - Scope for the DOM queries. Defaults to
 *   `document`; the Storybook decorator passes the story's canvas element so
 *   sibling stories on a docs page don't interfere with each other.
 * @returns {function} Cleanup function that removes every listener added here.
 */
export default function initTab(root = document) {
  const controller = new AbortController();
  const { signal } = controller;

  root.querySelectorAll(".qld__tab-container").forEach((container) => {
    wireTabSwitching(container, signal);
    wireOverflowScroll(container, signal);
  });

  // In the Matrix build this rewrites icon sprite paths (core vs health
  // sprite). QLD.utils only exists once the global bundle has loaded, so guard
  // it — in Storybook it's absent and the icons use their authored href as-is.
  window.QLD?.utils?.updateSvgIconPath?.(
    ".qld__tab-container .qld__tabs svg.qld__icon > use",
  );

  return () => controller.abort();
}

/**
 * Wire click and keyboard interaction for a single tab set.
 *
 * @param {HTMLElement} container - The `.qld__tab-container` element
 * @param {AbortSignal} signal    - Signal used to remove the listeners on cleanup
 */
function wireTabSwitching(container, signal) {
  const buttons = [...container.querySelectorAll(".qld__tab-button")];
  if (!buttons.length) return;

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => activateTab(container, button), {
      signal,
    });

    // Left/Right arrows move focus between tabs and wrap around the list.
    // Enter/Space activation is handled natively by the <button>.
    button.addEventListener(
      "keydown",
      (event) => {
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
        event.preventDefault();
        const offset = event.key === "ArrowRight" ? 1 : -1;
        const next =
          buttons[(index + offset + buttons.length) % buttons.length];
        next.focus();
      },
      { signal },
    );

    // Mirror focus state onto the matching panel (drives the focus outline).
    button.addEventListener(
      "focus",
      () => panelFor(container, button)?.classList.add("focused"),
      { signal },
    );
    button.addEventListener(
      "blur",
      () => panelFor(container, button)?.classList.remove("focused"),
      { signal },
    );
  });

  // Activate the first tab on init so the selected/visible state is owned by the
  // component and normalised across every button and panel, rather than relying
  // on the server-rendered markup carrying the correct `active`/aria attributes.
  activateTab(container, buttons[0]);
}

/**
 * Activate `button` and reveal its panel, deactivating the rest of the set.
 *
 * Lookups are scoped to `container` so duplicate ids in sibling tab sets (e.g.
 * multiple Storybook stories on a docs page) don't collide.
 *
 * @param {HTMLElement} container - The `.qld__tab-container` element
 * @param {HTMLElement} button    - The `.qld__tab-button` to activate
 */
function activateTab(container, button) {
  container.querySelectorAll(".qld__tab-button").forEach((btn) => {
    const selected = btn === button;
    btn.classList.toggle("active", selected);
    btn.setAttribute("aria-selected", String(selected));
    btn.setAttribute("tabindex", selected ? "0" : "-1");
  });

  const target = button.getAttribute("data-tab");
  container.querySelectorAll(".qld__tab-content").forEach((panel) => {
    const active = panel.getAttribute("data-tab") === target;
    panel.classList.toggle("active", active);
    panel.setAttribute("aria-hidden", String(!active));
    panel.setAttribute("tabindex", active ? "0" : "-1");
  });
}

/**
 * Find the content panel paired with a tab button via their shared `data-tab`.
 *
 * @param {HTMLElement} container - The `.qld__tab-container` element
 * @param {HTMLElement} button    - The `.qld__tab-button`
 * @returns {HTMLElement|null} The matching `.qld__tab-content` panel
 */
function panelFor(container, button) {
  const target = button.getAttribute("data-tab");
  return container.querySelector(`.qld__tab-content[data-tab="${target}"]`);
}

/**
 * Show/hide and wire the horizontal scroll arrows that appear when the tab
 * list overflows its container.
 *
 * @param {HTMLElement} container - The `.qld__tab-container` element
 * @param {AbortSignal} signal    - Signal used to remove the listeners on cleanup
 */
function wireOverflowScroll(container, signal) {
  if (!container.classList.contains("qld__tab-container__fixed")) return;

  const tabList = container.querySelector(".qld__tabs");
  const scrollLeftBtn = container.querySelector(
    ".tab-overflow-nav-button-left",
  );
  const scrollRightBtn = container.querySelector(
    ".tab-overflow-nav-button-right",
  );
  if (!tabList || !scrollLeftBtn || !scrollRightBtn) return;

  // Show the right arrow only while the list overflows; reset to the start.
  const refresh = () => {
    const overflowing = tabList.scrollWidth > tabList.clientWidth;
    scrollRightBtn.style.display = overflowing ? "block" : "none";
    scrollLeftBtn.style.display = "none";
    tabList.scrollLeft = 0;
  };

  scrollLeftBtn.addEventListener(
    "click",
    () => {
      tabList.scrollLeft = Math.max(0, tabList.scrollLeft - SCROLL_AMOUNT);
      scrollRightBtn.style.display = "block";
      if (tabList.scrollLeft <= 0) scrollLeftBtn.style.display = "none";
    },
    { signal },
  );

  scrollRightBtn.addEventListener(
    "click",
    () => {
      const maxScroll = tabList.scrollWidth - tabList.clientWidth;
      tabList.scrollLeft = Math.min(
        maxScroll,
        tabList.scrollLeft + SCROLL_AMOUNT,
      );
      scrollLeftBtn.style.display = "block";
      if (tabList.scrollLeft >= maxScroll)
        scrollRightBtn.style.display = "none";
    },
    { signal },
  );

  window.addEventListener("resize", debounce(refresh, 250), { signal });
  refresh();
}

/**
 * Limit how often `fn` runs while an event fires repeatedly (e.g. resize).
 *
 * @param {function} fn   - The function to debounce
 * @param {number}   wait - Milliseconds of quiet time before `fn` runs
 * @returns {function}
 */
function debounce(fn, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), wait);
  };
}

// Expose on window.QLD for backwards compatibility (legacy callers used
// `QLD.tab.init()`). New code should import `initTab` directly.
window.QLD = window.QLD || {};
window.QLD.tab = { init: () => initTab(document), initTab };
