/**
 * The left hand nav module
 *
 * @module leftHandNav
 */

const navLinkToggleClass = "qld__left-nav__item-toggle";
const accordionClosedClass = "qld__accordion--closed";
const accordionOpenClass = "qld__accordion--open";
const accordionChildClass = "qld__accordion__body";
const navLinkClass = "qld__left-nav__item-link";

export default function initLeftHandNav(document = document) {
    // Add toggle event listeners to accordion buttons
    var itemToggles = document.querySelectorAll("." + navLinkToggleClass);

    // On init, check for falsly triggered accordions and correct them
    itemToggles.forEach((button) => {
        checkAccordions(button);
    });
    // Loop through all toggles and add click event listener
    itemToggles.forEach((button) => button.addEventListener("click", () => handleClick(button)));
}

function checkAccordions(button) {
    if (button.parentNode.querySelector("." + navLinkClass).classList.contains(navLinkClass + "--open")) {
        openNavLink(button);
    } else {
        closeNavLink(button);
    }
}

function openNavLink(button) {
    // Open the chevron icon
    button.classList.replace(accordionClosedClass, accordionOpenClass);
    // Open the nav link element
    button.parentNode.querySelector("." + navLinkClass).classList.add(navLinkClass + "--open");
    // Open the child element
    button.parentNode.querySelector("." + accordionChildClass).classList.replace(accordionClosedClass, accordionOpenClass);
}

function closeNavLink(button) {
    // Close the chevron icon
    button.classList.replace(accordionOpenClass, accordionClosedClass);
    // Close the nav link element
    button.parentNode.querySelector("." + navLinkClass).classList.remove(navLinkClass + "--open");
    // Close the child element
    button.parentNode.querySelector("." + accordionChildClass).classList.replace(accordionOpenClass, accordionClosedClass);
}

function handleClick(button) {
    if (button.classList.contains(accordionClosedClass)) {
        openNavLink(button);
    } else {
        closeNavLink(button);
    }
}
