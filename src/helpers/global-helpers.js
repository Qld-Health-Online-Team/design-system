// Validate that the SVG path has the correct extension and is same-origin.
// Accepts either a Squiz Matrix asset URL (?a=12345:path/to/icons.svg) or a
// plain path to an .svg file (e.g. "QLD-icons.svg" in Storybook builds).
export const validateInternalSvgPath = (path) => {
  // Check given path is a string
  if (typeof path !== "string") {
    console.error(`Path provided is not a string. ${path}.`);
    return false;
  }

  const trimmed = path.trim();

  // Reject dangerous schemes or characters
  if (
    trimmed.includes("javascript:") ||
    trimmed.includes("data:") ||
    trimmed.includes("vbscript:")
  ) {
    console.error(`Path contains potentially dangerous scheme. ${path}.`);
    return false;
  }

  let url;
  try {
    // Resolve relative paths against the current document, matching how the
    // browser will resolve the <use href> value.
    url = new URL(trimmed, window.location.href);
  } catch {
    console.error(`The SVG path could not be parsed as a URL: ${path}`);
    return false;
  }

  // Ensure same-origin
  if (url.origin !== window.location.origin) {
    console.error(
      `The SVG path comes from a different origin: ${url.origin} but expected ${window.location.origin}`,
    );
    return false;
  }

  // Squiz Matrix asset URL: validate the asset path in the "a" query parameter
  const assetPath = url.searchParams.get("a");
  if (assetPath !== null) {
    if (!/^\d+:[a-z0-9/_-]+\.svg$/i.test(assetPath)) {
      console.error(`The SVG path is invalid: ${assetPath}`);
      return false;
    }
    return true;
  }

  // Plain path: only allow simple path characters and .svg extension
  if (!/^[a-z0-9/_.-]+\.svg$/i.test(url.pathname)) {
    console.error(`The SVG path is invalid: ${url.pathname}`);
    return false;
  }

  return true;
};

// Build a sprite reference like "QLD-icons.svg#tick". Relative paths are left
// relative so the browser resolves them against the current document, which
// keeps icons working when the site is deployed under a sub-path.
export const buildIconPath = (path, icon) => (icon ? `${path}#${icon}` : path);

// Remove all special characters
export const normaliseIdentifier = (string) => {
  return string.replace(/[^a-z0-9]+/g, "");
};

// Used to create link to material symbols stylesheet. Only use on components that require full access to material icons, not just from our sprite sheets
export const loadMaterialIconSheet = () => {
  const materialStylesheetId = "material-stylesheet";
  if (document.getElementById(materialStylesheetId)) return;

  const link = document.createElement("link");
  link.id = materialStylesheetId;
  link.rel = "stylesheet";
  link.href =
    "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@40,300,0..1,0";
  document.head.appendChild(link);
};

// Whether an element's aria-expanded attribute is currently "true"
export const isExpanded = (element) =>
  element.getAttribute("aria-expanded") === "true";

// Set an element's aria-expanded attribute from a boolean
export const setExpanded = (element, expanded) =>
  element.setAttribute("aria-expanded", expanded ? "true" : "false");
