// Validate that the SVG path has the correct extension and is same-origin
export const validateInternalSvgPath = (path) => {
    let shouldValidate = true;
    const url = new URL(path, window.location.origin);
    const filePath = url.searchParams.get("a"); // Extracts asset path from query parameter

    // Ensure same-origin
    if (url.origin !== window.location.origin) {
        console.error(`The SVG path comes from a different origin: ${url.origin} but expected ${window.location.origin}`);
        return false;
    }

    // Only allow simple path characters and .svg extension
    if (!/^\d+:[a-z0-9/_-]+\.svg$/i.test(filePath)) {
        console.error(`The SVG path is invalid: ${filePath}`);
        return false;
    }

    return shouldValidate;
};

// Remove all special characters
export const removeMetaCharacters = (string) => {
    return string.replace(/[^a-z0-9]+/g, "");
};
