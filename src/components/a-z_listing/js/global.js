/**
 * @module aZListing
 */

/**
 * On load, if the URL has a hash, highlight the matching letter option/header
 * and smooth-scroll to the target.
 */
function checkIfAzSelected() {
  var hash = window.location.hash;

  if (hash) {
    setTimeout(function () {
      var servicesAZOptions = document.querySelectorAll(
        ".qld__a-z_listing__options__item__link",
      );
      var servicesAZHeaders = document.querySelectorAll(
        ".qld__a-z_listing__list__item__header",
      );

      servicesAZOptions.forEach(function (option) {
        option.classList.remove("active");
      });

      servicesAZHeaders.forEach(function (header) {
        header.classList.remove("active");
      });

      var activeOption = document.querySelector(
        `a[href^="${hash}"].qld__a-z_listing__options__item__link`,
      );
      if (activeOption) {
        activeOption.classList.add("active");
      }

      var activeHeader = document.querySelector(
        `.qld__a-z_listing__list__item__header ${hash}`,
      );
      if (activeHeader) {
        activeHeader.parentElement.classList.add("active");
      }

      var targetElement = document.querySelector(hash);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 20,
          behavior: "smooth",
        });
      }
    }, 100);
  }
}

/**
 * Delegated click handler: when an A-Z letter link is clicked, highlight it,
 * smooth-scroll to its section, and update the URL hash.
 *
 * @param {MouseEvent} event
 */
function handleAZClick(event) {
  var target = event.target;

  if (target.matches('a[href^="#"].qld__a-z_listing__options__item__link')) {
    event.preventDefault();

    var servicesAZOptions = document.querySelectorAll(
      ".qld__a-z_listing__options__item__link",
    );
    var servicesAZHeaders = document.querySelectorAll(
      ".qld__a-z_listing__list__item__header",
    );

    servicesAZOptions.forEach(function (option) {
      option.classList.remove("active");
    });

    servicesAZHeaders.forEach(function (header) {
      header.classList.remove("active");
    });

    target.classList.add("active");
    var targetHeader = document.querySelector(
      `.qld__a-z_listing__list__item__header ${target.getAttribute("href")}`,
    );
    if (targetHeader) {
      targetHeader.parentElement.classList.add("active");
    }

    var targetElement = document.querySelector(target.getAttribute("href"));
    if (targetElement) {
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.scrollY - 20,
        behavior: "smooth",
      });
    }

    setTimeout(() => {
      window.location.hash = target.getAttribute("href");
    }, 500);
  }
}

/**
 * Initialise the A-Z listing behaviour: wire the delegated click handler and
 * apply any hash selection already present in the URL.
 *
 * The click listener is attached to `document` (event delegation), so re-invoking
 * this is a no-op — `addEventListener` dedupes the identical handler reference.
 */
export default function initAZListing() {
  document.addEventListener("click", handleAZClick);
  checkIfAzSelected();
}

// Self-initialise on load. Preserved from the original standalone script since
// this component is not wired into component-loader.js.
window.addEventListener("DOMContentLoaded", initAZListing);
