// Validate that the SVG path has the correct extension and is same-origin
export const validateInternalSvgPath = (path) => {
    // Local test is safe, skip validation
    if (window.location.origin === "http://localhost:8080") return true;

    let shouldValidate = true;

    // Check given path is a string
    if (typeof path !== "string") {
        console.error(`Path provided is not a string. ${path}.`);
        shouldValidate = false;
        return shouldValidate;
    }

    const trimmed = path.trim();

    // Reject dangerous schemes or characters
    if (trimmed.includes("javascript:") || trimmed.includes("data:") || trimmed.includes("vbscript:")) {
        console.error(`Path contains potentially dangerous scheme. ${path}.`);
        shouldValidate = false;
        return shouldValidate;
    }

    const url = new URL(trimmed, window.location.origin);
    const filePath = url.searchParams.get("a"); // Extracts asset path from query parameter

    // Ensure same-origin
    if (url.origin !== window.location.origin) {
        console.error(`The SVG path comes from a different origin: ${url.origin} but expected ${window.location.origin}`);
        shouldValidate = false;
        return shouldValidate;
    }

    // Only allow simple path characters and .svg extension
    if (!/^\d+:[a-z0-9/_-]+\.svg$/i.test(filePath)) {
        console.error(`The SVG path is invalid: ${filePath}`);
        shouldValidate = false;
        return shouldValidate;
    }

    return shouldValidate;
};

export const buildIconPath = (path, icon) => {
    try {
        const url = new URL(path, window.location.origin);
        if (icon) {
            url.hash = icon;
        }
        return url;
    } catch {
        return null;
    }
};

// Remove all special characters
export const normaliseIdentifier = (string) => {
    return string.replace(/[^a-z0-9]+/g, "");
};
