/**
 * @module utils/loading
 *
 * The full-page loading overlay. Shown while the page waits on something the
 * user is expected to notice — currently only the geolocation flows, which
 * reload the page once a location resolves.
 */

/**
 * Set the loading state of the page. When true, this shows a loader animation
 * overlay over the entire page; use false to remove that same animation.
 *
 * The loader element is created on first use and left in the DOM afterwards.
 *
 * @param {boolean} isLoading
 */
export const setLoadingState = (isLoading) => {
  let loader = document.querySelector(".loader");

  if (loader === null) {
    loader = document.createElement("div");
    loader.classList.add("loader");
    const parentNode = document.querySelector(".main");
    parentNode.insertBefore(loader, parentNode.firstChild);
  }

  if (isLoading) {
    loader.parentNode.classList.add("loading");
  } else {
    document.querySelector(".loading")?.classList.remove("loading");
  }
};
