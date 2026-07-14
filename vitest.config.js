import path from "node:path";
import { fileURLToPath } from "node:url";

import { defineConfig } from "vitest/config";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// https://storybook.js.org/docs/writing-tests/integrations/vitest-addon
export default defineConfig({
  test: {
    projects: [
      {
        // Pure-logic tests, anywhere under src/ — helpers, utils, and a
        // component's non-DOM logic. Matched by filename, so a new test file
        // needs no change here.
        //
        // This project runs in Node: there is no `window` or `document`. Tests
        // that need a real DOM belong in the `storybook` project below, as a
        // story `play` function — that runs in a real browser, with the
        // component's CSS applied, which is what its behaviour actually depends
        // on.
        test: {
          name: "unit",
          environment: "node",
          include: ["src/**/*.test.js"],
        },
      },
      {
        extends: true,
        plugins: [
          storybookTest({ configDir: path.join(dirname, ".storybook") }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: "chromium" }],
          },
        },
      },
    ],
  },
});
