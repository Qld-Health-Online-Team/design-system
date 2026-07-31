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

/**
 * Runs `fn` with every `@media print` block in the document temporarily applied
 * as if it were `screen`, so a play function can assert what print actually
 * renders. Restores the media queries afterwards, including on throw.
 *
 * This exists because print rules are invisible to an ordinary story, and the
 * failure mode worth guarding is silent: a print rule that loses the cascade to
 * a more specific global rule still *exists* in the stylesheet, so inspecting
 * the CSSOM proves nothing. Only resolved styles tell you which one won.
 *
 * Cross-origin stylesheets throw on `cssRules` access and are skipped.
 */
export const withPrintMedia = (fn) => {
  const flipped = [];

  const walk = (list) => {
    for (const rule of list) {
      if (!rule.media) continue;
      if ((rule.conditionText || rule.media.mediaText) === "print") {
        flipped.push(rule);
        rule.media.mediaText = "screen";
      } else {
        walk(rule.cssRules);
      }
    }
  };

  for (const sheet of document.styleSheets) {
    let rules;
    try {
      rules = sheet.cssRules;
    } catch {
      continue;
    }
    walk(rules);
  }

  try {
    return fn();
  } finally {
    flipped.forEach((rule) => {
      rule.media.mediaText = "print";
    });
  }
};
