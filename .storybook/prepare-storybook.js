const fs = require("fs");
const path = require("path");

const filesToCopy = ["js/helpers.js"];
const srcDir = path.resolve("dist");
const destDir = path.resolve(".storybook/core-assets");

// Purge directory for a fresh start
if (fs.existsSync(destDir)) {
    fs.rmSync(destDir, { recursive: true, force: true });
}
fs.mkdirSync(destDir, { recursive: true });

// Copy over certain assets from dist
filesToCopy.forEach((relativePath) => {
    const srcPath = path.join(srcDir, relativePath);
    const destPath = path.join(destDir, path.basename(relativePath));

    if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied: ${relativePath}`);
    } else {
        console.warn(`File not found: ${srcPath}`);
    }
});

// Add import line to handlebar-helpers.js
const handlebarHelpersPath = path.join(destDir, "helpers.js");
const newDestPath = path.join(destDir, "handlebar-helpers.js");
try {
    const importLine = `import Handlebars from "handlebars";\n`;
    const helpersContent = fs.readFileSync(handlebarHelpersPath, "utf-8");
    fs.writeFileSync(handlebarHelpersPath, importLine + helpersContent, "utf-8");
    fs.renameSync(handlebarHelpersPath, newDestPath);
} catch (err) {
    console.warn(`Failed to update ${handlebarHelpersPath}:`);
}
