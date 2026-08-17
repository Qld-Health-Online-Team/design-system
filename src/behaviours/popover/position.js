/**
 * @module popover/position
 *
 * Pure geometry for placing a popover's content box and carat relative to its
 * trigger. Given the elements, it sets inline styles, flipping or sliding the
 * content to stay within the viewport. It owns no event lifecycle and knows
 * nothing about the component's class names.
 */

// The content box is the popover's first child; the carat follows it.
export const CONTENT_SELECTOR = ":nth-child(1)";
// Minimum gap to keep between the content box and the viewport edge.
const VIEWPORT_MARGIN = 16;

// Function to get the direction from the metadata provided via class
function getAlignmentDirection(content) {
  const alignedClass = "tip-aligned-";
  let direction = null;

  const foundClass = Array.from(content.classList).find((className) =>
    className.includes(alignedClass),
  );

  if (foundClass) {
    const index = foundClass.indexOf(alignedClass);
    direction = foundClass.slice(index + alignedClass.length);
  }

  return direction;
}

// Check if the content box is overlapping the ALL sides of the screen
function doesElementOverlapAnySide(content) {
  const contentDimensions = content.getBoundingClientRect();
  return !(
    contentDimensions.top >= VIEWPORT_MARGIN &&
    contentDimensions.left >= VIEWPORT_MARGIN &&
    contentDimensions.bottom + VIEWPORT_MARGIN <=
      document.documentElement.clientHeight &&
    contentDimensions.right + VIEWPORT_MARGIN <=
      document.documentElement.clientWidth
  );
}

// Check if the content box is overlapping with the left and right sides of the screen
function doesElementOverlapScreenX(element) {
  const contentDimensions = element.getBoundingClientRect();
  return !(
    contentDimensions.left >= VIEWPORT_MARGIN &&
    contentDimensions.right + VIEWPORT_MARGIN <=
      document.documentElement.clientWidth
  );
}

// Check if the content box is overlapping with the left and right sides of the screen
function doesElementOverlapScreenY(element) {
  const contentDimensions = element.getBoundingClientRect();
  return !(
    contentDimensions.top >= VIEWPORT_MARGIN &&
    contentDimensions.bottom + VIEWPORT_MARGIN <=
      document.documentElement.clientHeight
  );
}

// Check if the content box is closer to the left of the screen
function elementCloserToLeft(element) {
  const contentDimensions = element.getBoundingClientRect();
  const screenCenter = document.documentElement.clientWidth / 2;
  return contentDimensions.left + contentDimensions.width / 2 < screenCenter;
}

// Check if the content box is closer to the top of the screen
function elementCloserToTop(element) {
  const contentDimensions = element.getBoundingClientRect();
  const screenCenter = document.documentElement.clientHeight / 2;
  return contentDimensions.top + contentDimensions.height / 2 < screenCenter;
}

// Function to position the content box dynamically based off the trigger
export function positionContentBox(trigger, popover, marginFromTrigger) {
  const popoverDimensions = popover.getBoundingClientRect();
  const content = popover.querySelector(CONTENT_SELECTOR);
  const carat = content.nextElementSibling;
  const triggerDimensions = trigger.getBoundingClientRect();
  const triggerFromTop = triggerDimensions.top + window.scrollY;
  const contentFromTop = popoverDimensions.top + window.scrollY;
  const contentFromTriggerY = triggerFromTop - contentFromTop;
  const triggerFromLeft = triggerDimensions.left + window.scrollX;
  const contentFromLeft = popoverDimensions.left + window.scrollX;
  const contentFromTriggerX = triggerFromLeft - contentFromLeft;
  const contentMarginFromTrigger = marginFromTrigger + carat.offsetWidth / 2;
  const direction = getAlignmentDirection(content);

  positionCarat(
    trigger,
    popoverDimensions,
    carat,
    direction,
    marginFromTrigger,
  );

  if (direction === "top") {
    content.style.left = `${contentFromTriggerX - content.offsetWidth / 2 + triggerDimensions.width / 2}px`;
    content.style.top = `${contentFromTriggerY - content.offsetHeight - contentMarginFromTrigger}px`;

    if (doesElementOverlapAnySide(content)) {
      checkAlternativesForTopPosition(
        trigger,
        popoverDimensions,
        content,
        carat,
        marginFromTrigger,
        contentMarginFromTrigger,
      );
    }
  } else if (direction === "bottom") {
    content.style.left = `${contentFromTriggerX - content.offsetWidth / 2 + triggerDimensions.width / 2}px`;
    content.style.top = `${contentFromTriggerY + triggerDimensions.height + contentMarginFromTrigger}px`;

    if (doesElementOverlapAnySide(content)) {
      checkAlternativesForBottomPosition(
        trigger,
        popoverDimensions,
        content,
        carat,
        marginFromTrigger,
        contentMarginFromTrigger,
      );
    }
  } else if (direction === "left") {
    content.style.left = `${contentFromTriggerX - content.offsetWidth - contentMarginFromTrigger}px`;
    content.style.top = `${contentFromTriggerY - content.offsetHeight / 2 + triggerDimensions.height / 2}px`;

    if (doesElementOverlapAnySide(content)) {
      checkAlternativesForLeftPosition(
        trigger,
        popoverDimensions,
        content,
        carat,
        marginFromTrigger,
        contentMarginFromTrigger,
      );
    }
  } else if (direction === "right") {
    content.style.left = `${contentFromTriggerX + triggerDimensions.width + contentMarginFromTrigger}px`;
    content.style.top = `${contentFromTriggerY - content.offsetHeight / 2 + triggerDimensions.height / 2}px`;

    if (doesElementOverlapAnySide(content)) {
      checkAlternativesForRightPosition(
        trigger,
        popoverDimensions,
        content,
        carat,
        marginFromTrigger,
        contentMarginFromTrigger,
      );
    }
  }
}

// If the popover is positioned top, we want to try sliding or inverting the content box
function checkAlternativesForTopPosition(
  trigger,
  popoverDimensions,
  content,
  carat,
  marginFromTrigger,
  contentMarginFromTrigger,
) {
  const triggerDimensions = trigger.getBoundingClientRect();
  const contentDimensions = content.getBoundingClientRect();
  const triggerFromTop = triggerDimensions.top + window.scrollY;
  const contentFromTop = popoverDimensions.top + window.scrollY;
  const contentFromTriggerY = triggerFromTop - contentFromTop;
  const triggerFromLeft = triggerDimensions.left + window.scrollX;
  const contentFromLeft = popoverDimensions.left + window.scrollX;
  const contentFromTriggerX = triggerFromLeft - contentFromLeft;

  if (doesElementOverlapScreenY(content)) {
    content.style.top = `${contentFromTriggerY + triggerDimensions.height + contentMarginFromTrigger}px`;
    positionCarat(
      trigger,
      popoverDimensions,
      carat,
      "bottom",
      marginFromTrigger,
    );
  }

  if (doesElementOverlapScreenX(content)) {
    // Compare the element's position to the center
    if (elementCloserToLeft(content)) {
      content.style.left = `${VIEWPORT_MARGIN - popoverDimensions.left}px`;
    } else {
      content.style.left = `${contentFromTriggerX - triggerDimensions.left + document.documentElement.clientWidth - contentDimensions.width - VIEWPORT_MARGIN}px`;
    }
  }
}

// If the popover is positioned bottom, we want to try sliding or inverting the content box
function checkAlternativesForBottomPosition(
  trigger,
  popoverDimensions,
  content,
  carat,
  marginFromTrigger,
  contentMarginFromTrigger,
) {
  const triggerDimensions = trigger.getBoundingClientRect();
  const contentDimensions = content.getBoundingClientRect();
  const triggerFromTop = triggerDimensions.top + window.scrollY;
  const contentFromTop = popoverDimensions.top + window.scrollY;
  const contentFromTriggerY = triggerFromTop - contentFromTop;
  const triggerFromLeft = triggerDimensions.left + window.scrollX;
  const contentFromLeft = popoverDimensions.left + window.scrollX;
  const contentFromTriggerX = triggerFromLeft - contentFromLeft;

  if (doesElementOverlapScreenY(content)) {
    content.style.top = `${contentFromTriggerY - content.offsetHeight - contentMarginFromTrigger}px`;
    positionCarat(trigger, popoverDimensions, carat, "top", marginFromTrigger);
  }

  if (doesElementOverlapScreenX(content)) {
    // Compare the element's position to the center
    if (elementCloserToLeft(content)) {
      content.style.left = `${VIEWPORT_MARGIN - popoverDimensions.left}px`;
    } else {
      content.style.left = `${contentFromTriggerX - triggerDimensions.left + document.documentElement.clientWidth - contentDimensions.width - VIEWPORT_MARGIN}px`;
    }
  }
}

// If the popover is positioned left, we want to try sliding or inverting the content box
function checkAlternativesForLeftPosition(
  trigger,
  popoverDimensions,
  content,
  carat,
  marginFromTrigger,
  contentMarginFromTrigger,
) {
  const triggerDimensions = trigger.getBoundingClientRect();
  const contentDimensions = content.getBoundingClientRect();
  const triggerFromTop = triggerDimensions.top + window.scrollY;
  const contentFromTop = popoverDimensions.top + window.scrollY;
  const contentFromTriggerY = triggerFromTop - contentFromTop;
  const triggerFromLeft = triggerDimensions.left + window.scrollX;
  const contentFromLeft = popoverDimensions.left + window.scrollX;
  const contentFromTriggerX = triggerFromLeft - contentFromLeft;

  if (doesElementOverlapScreenX(content)) {
    content.style.left = `${contentFromTriggerX + triggerDimensions.width + contentMarginFromTrigger}px`;
    positionCarat(
      trigger,
      popoverDimensions,
      carat,
      "right",
      marginFromTrigger,
    );
  }

  if (doesElementOverlapScreenY(content)) {
    // Compare the element's position to the center
    if (elementCloserToTop(content)) {
      content.style.top = `${VIEWPORT_MARGIN - popoverDimensions.top}px`;
    } else {
      content.style.top = `${contentFromTriggerY - triggerDimensions.top + document.documentElement.clientHeight - contentDimensions.height - VIEWPORT_MARGIN}px`;
    }
  }

  // For the specific case on mobile where the popover cannot fit on BOTH sides
  if (doesElementOverlapScreenX(content)) {
    content.style.left = `${contentFromTriggerX - content.offsetWidth / 2 + triggerDimensions.width / 2}px`;
    content.style.top = `${contentFromTriggerY - content.offsetHeight - contentMarginFromTrigger}px`;
    positionCarat(trigger, popoverDimensions, carat, "top", marginFromTrigger);
  }
}

// If the popover is positioned right, we want to try sliding or inverting the content box
function checkAlternativesForRightPosition(
  trigger,
  popoverDimensions,
  content,
  carat,
  marginFromTrigger,
  contentMarginFromTrigger,
) {
  const triggerDimensions = trigger.getBoundingClientRect();
  const contentDimensions = content.getBoundingClientRect();
  const triggerFromTop = triggerDimensions.top + window.scrollY;
  const contentFromTop = popoverDimensions.top + window.scrollY;
  const contentFromTriggerY = triggerFromTop - contentFromTop;
  const triggerFromLeft = triggerDimensions.left + window.scrollX;
  const contentFromLeft = popoverDimensions.left + window.scrollX;
  const contentFromTriggerX = triggerFromLeft - contentFromLeft;

  if (doesElementOverlapScreenX(content)) {
    content.style.left = `${contentFromTriggerX - content.offsetWidth - contentMarginFromTrigger}px`;
    positionCarat(trigger, popoverDimensions, carat, "left", marginFromTrigger);
  }

  if (doesElementOverlapScreenY(content)) {
    // Compare the element's position to the center
    if (elementCloserToTop(content)) {
      content.style.top = `${VIEWPORT_MARGIN - popoverDimensions.top}px`;
    } else {
      content.style.top = `${contentFromTriggerY - triggerDimensions.top + document.documentElement.clientHeight - contentDimensions.height - VIEWPORT_MARGIN}px`;
    }
  }

  // For the specific case on mobile where the popover cannot fit on BOTH sides
  if (doesElementOverlapScreenX(content)) {
    content.style.left = `${contentFromTriggerX - content.offsetWidth / 2 + triggerDimensions.width / 2}px`;
    content.style.top = `${contentFromTriggerY - content.offsetHeight - contentMarginFromTrigger}px`;
    positionCarat(trigger, popoverDimensions, carat, "top", marginFromTrigger);
  }
}

// Function to position the carat based off the direction provided
function positionCarat(
  trigger,
  popoverDimensions,
  carat,
  direction,
  marginFromTrigger,
) {
  const triggerDimensions = trigger.getBoundingClientRect();
  const caratWidth = carat.offsetWidth / 2;
  const caratHeight = carat.offsetHeight / 2;
  const triggerFromTop = triggerDimensions.top + window.scrollY;
  const caratFromTop = popoverDimensions.top + window.scrollY;
  const caratFromTriggerY = triggerFromTop - caratFromTop;
  const triggerFromLeft = triggerDimensions.left + window.scrollX;
  const caratFromLeft = popoverDimensions.left + window.scrollX;
  const caratFromTriggerX = triggerFromLeft - caratFromLeft;
  let caratTopPosition = 0;
  let caratLeftPosition = 0;

  if (direction === "top") {
    caratLeftPosition =
      caratFromTriggerX + triggerDimensions.width / 2 - caratWidth;
    caratTopPosition = caratFromTriggerY - caratHeight - marginFromTrigger;
    carat.style.transform = "rotate(180deg)";
  } else if (direction === "bottom") {
    caratLeftPosition =
      caratFromTriggerX + triggerDimensions.width / 2 - caratWidth;
    caratTopPosition =
      caratFromTriggerY -
      caratHeight +
      triggerDimensions.height +
      marginFromTrigger;
    carat.style.transform = "rotate(0deg)";
  } else if (direction === "left") {
    caratLeftPosition = caratFromTriggerX - caratWidth - marginFromTrigger;
    caratTopPosition =
      caratFromTriggerY + triggerDimensions.height / 2 - caratHeight;
    carat.style.transform = "rotate(90deg)";
  } else if (direction === "right") {
    caratLeftPosition =
      caratFromTriggerX +
      triggerDimensions.width -
      caratWidth +
      marginFromTrigger;
    caratTopPosition =
      caratFromTriggerY + triggerDimensions.height / 2 - caratHeight;
    carat.style.transform = "rotate(270deg)";
  }

  // Set positioning style of the content box
  carat.style.left = `${caratLeftPosition}px`;
  carat.style.top = `${caratTopPosition}px`;
}
