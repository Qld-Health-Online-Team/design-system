/**
 * @module utils/geolocation
 *
 * The user's location: locating them via the browser's HTML5 geolocation API,
 * and reading/writing the QLD-wide `qld_user_location` local storage record
 * that components use to tailor content to where the user is.
 *
 * Writing a location optionally reloads the page, because the location is
 * consumed at render time (server-side in Squiz Matrix) rather than reactively.
 */

import * as loading from "./loading.js";
import * as storage from "./storage.js";

/** Local storage key holding the user's location record. */
export const USER_LOCATION_KEY = "qld_user_location";

/**
 * Local storage key recording that the user previously denied location access.
 * Cleared once they successfully locate.
 */
const DENY_LOCATION_KEY = "deny-location";

/** How long to wait for the browser's geolocation API before giving up. */
const GEOLOCATION_TIMEOUT = 10000;

/**
 * How long to leave the loading overlay up before reloading, so the overlay has
 * time to paint rather than flashing.
 */
const RELOAD_DELAY = 300;

/**
 * Read the stored user location.
 *
 * @return {object | null} The stored location record, or null if none is stored
 */
export const getUserLocation = () => {
  const stored = storage.getLocalStorage(USER_LOCATION_KEY);

  return stored === null ? null : JSON.parse(stored);
};

/**
 * Store a location record, and reload the page so it renders with the new
 * location.
 *
 * @param {object}  newLocation
 * @param {boolean} refresh - Whether to reload the page once stored
 */
export const setUserLocationInStorage = (newLocation, refresh) => {
  storage.setLocalStorage(USER_LOCATION_KEY, JSON.stringify(newLocation));

  if (refresh) {
    loading.setLoadingState(true);

    setTimeout(() => {
      window.location.reload(false);
    }, RELOAD_DELAY);
  }
};

/**
 * Store the user location, resolving the Hospital and Health Service (HHS) for
 * it first if this site has one configured.
 *
 * `serviceFinderData` is a global provided by the Service Finder site, so the
 * HHS lookup only runs where that site has loaded it.
 *
 * @param {object}  location
 * @param {boolean} refresh - Whether to reload the page once stored
 */
export const setUserLocation = (location, refresh = true) => {
  // If there is a site-wide HHS configured
  const hhsDiv = document.getElementById("qld__hhs");

  if (hhsDiv !== null && typeof serviceFinderData !== "undefined") {
    const hhsId = hhsDiv.getAttribute("data-hhs");
    serviceFinderData
      .collection("hhs")
      .doc(hhsId)
      .get()
      .then((response) => {
        location.hhs_id = hhsId;
        location.hhs_name = response.name;

        setUserLocationInStorage(location, refresh);
      });
  } else {
    setUserLocationInStorage(location, refresh);
  }
};

/**
 * Whether the stored location came from the browser's geolocation API (as
 * opposed to being chosen by the user).
 *
 * @return {boolean}
 */
export const isGeolocated = () => getUserLocation()?.isGeolocated === true;

/**
 * Determine the location of the user using HTML5 geolocation, and store the
 * result (which reloads the page — see `setUserLocationInStorage`).
 *
 * Resolution is asynchronous, so the located position is not returned. The one
 * synchronous case is a cached hit: with a location already stored and
 * `override` false, that record is returned as-is and the browser is not asked.
 *
 * @param  {boolean}       override      - Re-locate even if a location is already stored
 * @param  {function}      errorCallback - Called if the user denies, or geolocation is unavailable
 * @return {object|false|undefined}      - The stored location on a cached hit; false if we could not locate
 */
export const geolocateUser = (override, errorCallback) => {
  const storedLocation = getUserLocation();
  if (storedLocation !== null && !override) {
    return storedLocation;
  }

  if (!navigator.geolocation) {
    console.log("Unable to locate");
    errorCallback?.();
    return false;
  }

  loading.setLoadingState(true);
  navigator.geolocation.getCurrentPosition(
    (position) => {
      setUserLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        isGeolocated: true,
        location: "",
      });
      storage.removeLocalStorage(DENY_LOCATION_KEY);
    },
    (error) => {
      console.log(error);
      loading.setLoadingState(false);
      errorCallback?.();
    },
    { timeout: GEOLOCATION_TIMEOUT },
  );
};
