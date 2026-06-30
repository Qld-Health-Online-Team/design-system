/**
 * Remove the ./?a= prefix from all href, src, and srcset in rendered HTML
 * @param {string} html - the HTML string to clean
 * @returns {string} - cleaned HTML
 */
export const cleanStorybookUrls = (html) => {
  return (
    html
      .replace(/(\b(?:href|src|srcset)=["'])\.\/\?a=/g, "$1")
      // CSS url(./?a=...)
      .replace(/url\(\s*\.\/\?a=/g, "url(")
  );
};

export const themeWrapper = (theme, content) => {
  return `<div class="${theme}" style="padding: 2rem;">${content}</div>`;
};

const VOID_ELEMENTS =
  /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/i;

/**
 * Pretty-print an HTML string for the Storybook code panel.
 *
 * Storybook's built-in `docs.source.format` only supports "dedent" (stripping
 * common leading whitespace) in this build — it does not reflow HTML — so we
 * re-indent it ourselves. Entities are preserved (no DOM round-trip), making it
 * safe for escaped markup like `&lt;p&gt;`.
 *
 * @param {string} html - the raw rendered HTML
 * @returns {string} - the re-indented HTML
 */
export const formatHtmlSource = (html) => {
  // Put each tag on its own line, then re-indent based on nesting.
  const lines = html
    .replace(/>\s*</g, ">\n<")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  let depth = 0;
  const indentOf = (n) => "  ".repeat(Math.max(n, 0));

  return lines
    .map((line) => {
      const tag = line.match(/^<\/?([a-zA-Z0-9-]+)/)?.[1] ?? "";
      const isComment = line.startsWith("<!--");
      const isClosing = line.startsWith("</");
      const isOpening = /^<[a-zA-Z]/.test(line) && !isClosing;
      const isVoid = VOID_ELEMENTS.test(tag) || /\/>\s*$/.test(line);
      // e.g. <p>text</p> opens and closes on the same line.
      const isSelfContained = isOpening && /<\/[a-zA-Z0-9-]+>\s*$/.test(line);

      if (isClosing) depth -= 1;
      const out = indentOf(depth) + line;
      if (isOpening && !isVoid && !isComment && !isSelfContained) depth += 1;
      return out;
    })
    .join("\n");
};
