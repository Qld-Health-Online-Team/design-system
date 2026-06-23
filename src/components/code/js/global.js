/**
 * @module code
 */

import {
  validateInternalSvgPath,
  buildIconPath,
} from "../../../helpers/global-helpers.js";

/**
 * Initialise the code component: syntax-highlight snippets, wire the copy
 * buttons and the inline-code copy affordance, the "Show more" toggle, and the
 * preview theme-palette switcher.
 *
 * `Prism` (syntax highlighting) and `QLD.animate` (the toggle animation) are
 * provided globally at runtime by `index.js` / the global bundle; both are
 * accessed defensively so the component degrades gracefully where they are
 * absent (e.g. Storybook).
 *
 * @param {Document|Element} root - The root element to scope DOM queries to.
 * @returns {function} Cleanup function that removes the listeners added here.
 */
export default function initCode(root = document) {
  const controller = new AbortController();
  const { signal } = controller;
  const Prism = window.Prism;

  const codes = root.querySelectorAll("code");
  const inlinecodes = root.querySelectorAll("code:not(.qld__code-body)");
  const copyButtons = root.querySelectorAll(".qld__code-copy--button");
  const showToggle = root.querySelectorAll(".qld__code-toggle-button");
  const colorButtons = root.querySelectorAll(
    ".qld__code-preview-colours input[type=radio]",
  );

  if (codes.length && Prism) {
    codes.forEach((codeEl) => {
      codeEl.innerHTML = Prism.highlight(
        codeEl.innerText,
        Prism.languages.html,
        "html",
      );
    });
  }

  if (inlinecodes.length) {
    inlinecodes.forEach((inlinecode) => {
      const codeWrap = document.createElement("div");
      codeWrap.classList.add("qld__code--inline");

      inlinecode.replaceWith(codeWrap);
      codeWrap.appendChild(inlinecode);

      const tooltip = document.createElement("span");
      const tooltipText = document.createTextNode("Copy");
      tooltip.appendChild(tooltipText);
      tooltip.classList.add("qld__code-tooltip");
      inlinecode.after(tooltip);
      inlinecode.setAttribute("tabindex", 0);

      inlinecode.addEventListener(
        "click",
        function () {
          copyButtonAction(this);
        },
        { signal },
      );

      inlinecode.addEventListener(
        "keypress",
        function (event) {
          if (event.key === "Enter") {
            event.preventDefault();
            copyButtonAction(this);
          }
        },
        { signal },
      );
    });
  }

  if (copyButtons.length) {
    copyButtons.forEach((copyButton) => {
      copyButton.addEventListener(
        "click",
        function () {
          copyButtonAction(this);
        },
        { signal },
      );
    });
  }

  if (showToggle.length) {
    showToggle.forEach((showToggleButton) => {
      const parent = showToggleButton.closest(".qld__code");
      const grandParent = parent.closest("section");
      const svgPath = grandParent.getAttribute("data-path");
      const target = parent.querySelector("code");
      target.style.height = "120px";

      // Create <svg>
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("class", "qld__icon qld__icon--sm");
      svg.setAttribute("aria-hidden", "true");
      svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

      // Create <use>
      const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
      // Attempt to validate SVG path before using it
      if (validateInternalSvgPath(svgPath)) {
        use.setAttributeNS(null, "href", buildIconPath(svgPath, "chevron-up"));
      }

      showToggleButton.addEventListener(
        "click",
        function () {
          // Update button text
          this.innerText =
            this.innerText.indexOf("more") > -1 ? "Show less" : "Show more";

          // Append <use> to <svg>
          svg.appendChild(use);
          this.appendChild(svg);

          window.QLD?.animate?.Toggle?.({
            element: target,
            property: "height",
            speed: 250,
            closeSize: 120,
            prefunction: function () {
              parent.classList.toggle("show_less");
            },
          });
        },
        { signal },
      );
    });
  }

  if (colorButtons.length) {
    colorButtons.forEach((colorButton) => {
      colorButton.addEventListener(
        "change",
        function () {
          const body = colorButton
            .closest(".qld__code")
            .querySelector(".qld__code-preview-body");
          body.classList.remove(
            "qld__body--light",
            "qld__body--alt",
            "qld__body--dark",
            "qld__body--dark-alt",
          );
          if (this.value) {
            body.classList.add(this.value);
          }
          const toggle = colorButton
            .closest(".qld__code")
            .querySelector(".qld__code-toggle");
          if (toggle) {
            toggle.classList.remove(
              "qld__body--light",
              "qld__body--alt",
              "qld__body--dark",
              "qld__body--dark-alt",
            );
            if (this.value) {
              toggle.classList.add(this.value);
            }
          }
        },
        { signal },
      );
    });
  }

  // Cleanup: remove every listener added above in one call (used by the Storybook decorator)
  return () => controller.abort();
}

function copyButtonAction(button) {
  if (button.classList.contains("qld__code-copy--button")) {
    const parent = button.closest(".qld__code");
    copyTextToClipboard(parent.querySelector("code").innerText);
    button.classList.add("copied");

    setTimeout(() => {
      button.classList.remove("copied");
    }, "1500");
  } else {
    copyTextToClipboard(button.innerText);
    button.nextElementSibling.innerText = "Copied";
    button.addEventListener("blur", function () {
      button.nextElementSibling.innerText = "Copy";
    });
  }
}

function fallbackCopyTextToClipboard(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    const successful = document.execCommand("copy");
    const msg = successful ? "successful" : "unsuccessful";
    console.log("Fallback: Copying text command was " + msg);
  } catch (err) {
    console.error("Fallback: Oops, unable to copy", err);
  }

  document.body.removeChild(textArea);
}

function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(
    function () {
      console.log("Async: Copying to clipboard was successful!");
    },
    function (err) {
      console.error("Async: Could not copy text: ", err);
    },
  );
}

// Make code public for backwards compatibility (window.QLD.code.init)
const code = { init: initCode };
window.QLD = window.QLD || {};
window.QLD.code = code;

export { code };
