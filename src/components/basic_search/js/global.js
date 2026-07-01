/**
 * @module basicSearch
 */

/**
 * Initialise the basic search component: activate the search field (which
 * ships disabled and is enabled here once the JS loads), wire the honeypot
 * spam guard, and keep the results sort dropdown in sync with the URL.
 *
 * @param {Document|Element} root - The root element to scope DOM queries to.
 * @returns {function} Cleanup function that removes the listeners added here.
 */
export default function initBasicSearch(root = document) {
  const controller = new AbortController();
  const { signal } = controller;

  const searchForm = root.querySelector(
    ".qld__banner__search .qld__search-form",
  );
  if (searchForm) {
    searchForm
      .querySelector(".qld__btn--search")
      ?.setAttribute("type", "submit");
    searchForm
      .querySelectorAll(".qld__btn--search, .qld__text-input")
      .forEach((el) => {
        el.removeAttribute("disabled");
      });
    checkHoneypot(searchForm, signal);
  }

  const selectElement = root.querySelector(".qld__search__sort #search-sort");
  if (selectElement) {
    const currentUrl = new URL(window.location.href);
    const searchParams = new URLSearchParams(currentUrl.search);

    if (searchParams.has("sort")) {
      selectElement.value = searchParams.get("sort");
    }

    selectElement.addEventListener(
      "change",
      function () {
        searchParams.set("sort", this.value);
        currentUrl.search = searchParams.toString();
        window.location.href = currentUrl.toString();
      },
      { signal },
    );
  }

  // Cleanup: remove every listener added above in one call (used by the Storybook decorator)
  return () => controller.abort();
}

/**
 * Wire the honeypot spam guard: block submission when the hidden field is
 * filled, otherwise drop its name so it never reaches the server.
 *
 * @memberof module:basicSearch
 * @instance
 * @private
 *
 * @param {HTMLElement} searchForm - The search form element.
 * @param {AbortSignal} signal     - Signal used to remove the listener on cleanup.
 */
function checkHoneypot(searchForm, signal) {
  const honeypot = searchForm.querySelector(".qld__text-input--validation");
  honeypot.value = "";

  searchForm.addEventListener(
    "submit",
    function (event) {
      // Prevent form submission if the honeypot field is filled
      if (honeypot.value !== "") {
        event.preventDefault(); // Stop the form submission
      } else {
        honeypot.removeAttribute("name");
      }
    },
    { signal },
  );
}
