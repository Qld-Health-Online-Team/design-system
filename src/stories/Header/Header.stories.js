import { renderHeader, headerArgs } from "./Header.js";
import { storyParams, printParams } from "../../../.storybook/globals";
import { withPrintMedia } from "../../../.storybook/helper-functions";
import { expect } from "storybook/test";
import { initComponents } from "../../../.storybook/decorators";
import initCtaLinks from "../../components/cta_links/js/global";
import { initMegaMenu } from "../../components/mega_main_navigation/js/global";

export default {
  title: "2. Layout/Header",
  render: renderHeader,
  parameters: {
    layout: "fullscreen",
    ...storyParams("header"),
  },
  decorators: [initComponents([initMegaMenu, initCtaLinks])],
  args: { ...headerArgs },
  argTypes: {
    defaultBannerContainedBanner: {
      control: { type: "radio" },
      options: ["No", "Yes - light", "Yes - Dark"],
      mapping: {
        No: "No",
        "Yes - light": "qld__banner_contained",
        "Yes - Dark": "qld__banner_contained qld__banner_contained--dark",
      },
      description: "Layout for displaying the contained banner if used.",
    },
    siteHeaderMainTheme: {
      control: {
        type: "radio",
        labels: {
          "": "Light",
          "qld__header__main--dark": "Dark",
          "qld__header__main--dark-alt": "Dark Alternative",
        },
      },
      options: ["", "qld__header__main--dark", "qld__header__main--dark-alt"],
      description: "Main header colour theme.",
    },
    siteHeaderLayout: {
      control: {
        type: "radio",
        labels: {
          "": "Inline",
          "qld__header--stacked": "Stacked",
        },
      },
      options: ["", "qld__header--stacked"],
      description:
        "Header layout. Stacked places the site title below the logo lock-up.",
    },
    sitePreHeaderTheme: {
      control: {
        type: "radio",
        labels: {
          "": "Light",
          "qld__header__pre-header--dark": "Dark",
          "qld__header__pre-header--dark-alt": "Dark Alternative",
        },
      },
      options: [
        "",
        "qld__header__pre-header--dark",
        "qld__header__pre-header--dark-alt",
      ],
      description: "Pre header colour theme.",
    },
    siteShowLogo: {
      control: {
        type: "radio",
        labels: {
          yes: "Yes",
          no: "No",
        },
      },
      options: ["yes", "no"],
      description: "Whether the Queensland Government logo is displayed.",
    },
    containedBannerImageTexturePosition: {
      control: { type: "select" },
      options: ["Top Left", "Top Center", "Top Right"],
      mapping: {
        "Top Left": "top left",
        "Top Center": "top center",
        "Top Right": "top right",
      },
      description: "Position of the texture image within the banner.",
    },
    containedBannerImageTextureSize: {
      control: { type: "select" },
      options: ["Auto", "Cover"],
      mapping: {
        Auto: "auto",
        Cover: "cover",
      },
      description: "Size of the texture image within the banner.",
    },
    containedBannerImageTextureRepeat: {
      control: { type: "select" },
      options: ["No Repeat", "Repeat"],
      mapping: {
        "No Repeat": "no-repeat",
        Repeat: "repeat",
      },
      description: "Repeat style of the texture image within the banner.",
    },
    mainNavCtaOneIcon: {
      control: "select",
      options: [
        "arrow-up",
        "arrow-down",
        "arrow-left",
        "arrow-right",
        "view-all",
        "chevron-up",
        "chevron-down",
        "chevron-left",
        "chevron-right",
        "attach",
        "calendar",
        "close",
        "copy",
        "delete",
        "direction-up-down",
        "download",
        "edit",
        "enlarge",
        "favourite",
        "filter",
        "global-nav",
        "hide",
        "home",
        "language",
        "like",
        "location",
        "log-in",
        "log-out",
        "manage-accounts",
        "menu",
        "minus",
        "more-horizontal",
        "more-vertical",
        "pause",
        "play",
        "plus",
        "print",
        "refresh",
        "save",
        "search",
        "settings",
        "share",
        "show",
        "sort-alpha",
        "stop",
        "tick",
        "upload",
        "zoom",
        "alert-cancel",
        "alert-danger",
        "alert-error",
        "alert-information",
        "alert-maintenance",
        "alert-success",
        "alert-warning",
        "status-cancel",
        "status-danger",
        "status-error",
        "status-info",
        "status-maintenance",
        "status-success",
        "status-warning",
        "accessibility",
        "announcement",
        "article",
        "audio",
        "car",
        "chart",
        "clock",
        "code",
        "cost",
        "design",
        "directions",
        "document",
        "document-error",
        "document-pdf",
        "document-spreadsheet",
        "document-word",
        "external-link",
        "help",
        "identity",
        "identity-face",
        "image",
        "links",
        "lock",
        "lock-open",
        "Email",
        "microphone",
        "notifications",
        "notifications-circle",
        "op-ed",
        "parking",
        "pdf",
        "pending",
        "phone",
        "podcast",
        "profile",
        "speech",
        "spreadsheet",
        "transcript",
        "users",
        "video",
        "wheelchair",
        "Facebook",
        "Instagram",
        "LinkedIn",
        "X",
        "YouTube",
        "extended_facilty",
        "extended_child_health",
        "extended_blood",
        "extended_support_care",
        "extended_shield_with_heart",
        "extended_clinical_information",
        "extended_medical_staff",
        "extended_icon",
        "extended_surgical",
        "extended_masks",
        "extended_maternity",
        "extended_mental_health",
        "extended_dental",
        "extended_health_home",
        "extended_diagnosis",
        "extended_conditions",
        "extended_doctor",
        "extended_patient",
        "extended_biology",
        "extended_health_heart",
        "extended_ambulance",
        "extended_hospital",
        "extended_health_services",
        "extended_bone",
        "extended_coronavirus",
        "extended_patient_file",
        "extended_health_alert",
        "extended_vaccines",
        "extended_hospital_location",
        "extended_bed",
        "extended_current-location",
      ],
      description:
        "Icon class for the first call to action button in the main navigation (if used). E.g., 'icon-email'.",
    },
    mainNavCtaTwoIcon: {
      control: "select",
      options: [
        "arrow-up",
        "arrow-down",
        "arrow-left",
        "arrow-right",
        "view-all",
        "chevron-up",
        "chevron-down",
        "chevron-left",
        "chevron-right",
        "attach",
        "calendar",
        "close",
        "copy",
        "delete",
        "direction-up-down",
        "download",
        "edit",
        "enlarge",
        "favourite",
        "filter",
        "global-nav",
        "hide",
        "home",
        "language",
        "like",
        "location",
        "log-in",
        "log-out",
        "manage-accounts",
        "menu",
        "minus",
        "more-horizontal",
        "more-vertical",
        "pause",
        "play",
        "plus",
        "print",
        "refresh",
        "save",
        "search",
        "settings",
        "share",
        "show",
        "sort-alpha",
        "stop",
        "tick",
        "upload",
        "zoom",
        "alert-cancel",
        "alert-danger",
        "alert-error",
        "alert-information",
        "alert-maintenance",
        "alert-success",
        "alert-warning",
        "status-cancel",
        "status-danger",
        "status-error",
        "status-info",
        "status-maintenance",
        "status-success",
        "status-warning",
        "accessibility",
        "announcement",
        "article",
        "audio",
        "car",
        "chart",
        "clock",
        "code",
        "cost",
        "design",
        "directions",
        "document",
        "document-error",
        "document-pdf",
        "document-spreadsheet",
        "document-word",
        "external-link",
        "help",
        "identity",
        "identity-face",
        "image",
        "links",
        "lock",
        "lock-open",
        "Email",
        "microphone",
        "notifications",
        "notifications-circle",
        "op-ed",
        "parking",
        "pdf",
        "pending",
        "phone",
        "podcast",
        "profile",
        "speech",
        "spreadsheet",
        "transcript",
        "users",
        "video",
        "wheelchair",
        "Facebook",
        "Instagram",
        "LinkedIn",
        "X",
        "YouTube",
        "extended_facilty",
        "extended_child_health",
        "extended_blood",
        "extended_support_care",
        "extended_shield_with_heart",
        "extended_clinical_information",
        "extended_medical_staff",
        "extended_icon",
        "extended_surgical",
        "extended_masks",
        "extended_maternity",
        "extended_mental_health",
        "extended_dental",
        "extended_health_home",
        "extended_diagnosis",
        "extended_conditions",
        "extended_doctor",
        "extended_patient",
        "extended_biology",
        "extended_health_heart",
        "extended_ambulance",
        "extended_hospital",
        "extended_health_services",
        "extended_bone",
        "extended_coronavirus",
        "extended_patient_file",
        "extended_health_alert",
        "extended_vaccines",
        "extended_hospital_location",
        "extended_bed",
        "extended_current-location",
      ],
      description:
        "Icon class for the second call to action button in the main navigation (if used). E.g., 'icon-email'.",
    },
  },
};

// Default story
export const Default = {
  args: {
    ...headerArgs,
    defaultBannerContainedBanner: "Yes - Dark",
  },
};

// Variants
export const LightHeader = (args) =>
  renderHeader({ ...args, siteHeaderMainTheme: "" });
LightHeader.args = { ...headerArgs };

export const DarkHeader = (args) =>
  renderHeader({ ...args, siteHeaderMainTheme: "qld__header__main--dark" });
DarkHeader.args = { ...headerArgs };

export const DarkAltHeader = (args) =>
  renderHeader({
    ...args,
    siteHeaderMainTheme: "qld__header__main--dark-alt",
  });
DarkAltHeader.args = { ...headerArgs };

// A long site title on a phone: balanced wrapping evens out the lines instead
// of leaving a single word stranded on the last one.
export const LongSiteTitleMobile = {
  args: {
    ...headerArgs,
    siteTitle: "Children's Health Queensland Hospital and Health Service",
  },
  globals: { viewport: { value: "small", isRotated: false } },
  parameters: { chromatic: { viewports: [400] } },
  play: async ({ canvasElement }) => {
    const heading = canvasElement.querySelector(".qld__header__heading");
    await expect(getComputedStyle(heading).textWrapStyle).toBe("balance");
  },
};

// Stacked layout (brand refresh): the site title sits below the Delivering for
// Queensland lock-up. The brand image only shows from lg, so these stories run
// at a desktop viewport.
const stackedArgs = {
  ...headerArgs,
  siteHeaderLayout: "qld__header--stacked",
  siteTitle: "Children's Health Queensland Hospital and Health Service",
};
const desktopGlobals = { viewport: { value: "xlarge", isRotated: false } };

const brandParts = (canvasElement) => {
  const brandImage = canvasElement.querySelector(".qld__header__brand-image");
  return {
    header: canvasElement.querySelector(".qld__header"),
    brandImage,
    heading: canvasElement.querySelector(".qld__header__heading"),
    use: brandImage.querySelector("use"),
  };
};

// The logo and the title share one link, so both stay clickable.
const expectSharedBrandLink = async ({ brandImage, heading }) => {
  const link = brandImage.closest("a");
  await expect(link).toBe(heading.closest("a"));
  await expect(link.getAttribute("href")).toBeTruthy();
};

// The default lock-up paints with currentColor, which the stacked layout sets
// to the same site-title colour as the heading.
const expectLogoMatchesTitleColour = async ({ brandImage, heading }) => {
  await expect(getComputedStyle(brandImage).color).toBe(
    getComputedStyle(heading).color,
  );
};

export const Stacked = {
  args: { ...stackedArgs },
  globals: desktopGlobals,
  play: async ({ canvasElement }) => {
    const parts = brandParts(canvasElement);
    const { header, brandImage, heading, use } = parts;

    await expect(header).toHaveClass("qld__header--stacked");
    await expect(use.getAttribute("href")).toMatch(/#logo-stacked$/);

    // Title below the logo, with no divider and no height cap squeezing them.
    await expect(heading.getBoundingClientRect().top).toBeGreaterThanOrEqual(
      brandImage.getBoundingClientRect().bottom,
    );
    await expect(getComputedStyle(brandImage).borderRightStyle).toBe("none");
    await expect(getComputedStyle(brandImage.closest("a")).maxHeight).toBe(
      "none",
    );

    await expectLogoMatchesTitleColour(parts);
    await expectSharedBrandLink(parts);
  },
};

export const StackedDark = {
  args: { ...stackedArgs, siteHeaderMainTheme: "qld__header__main--dark" },
  globals: desktopGlobals,
  play: async ({ canvasElement }) => {
    await expectLogoMatchesTitleColour(brandParts(canvasElement));
  },
};

export const StackedDarkAlt = {
  args: { ...stackedArgs, siteHeaderMainTheme: "qld__header__main--dark-alt" },
  globals: desktopGlobals,
  play: async ({ canvasElement }) => {
    await expectLogoMatchesTitleColour(brandParts(canvasElement));
  },
};

// An uploaded lock-up keeps its own aspect ratio rather than the 170x56 box
// the <img> attributes describe.
export const StackedUploadedLogo = {
  args: {
    ...stackedArgs,
    siteLogo: "coa-delivering-for-qld-mono-blue-mini-lockup.svg",
  },
  globals: desktopGlobals,
  play: async ({ canvasElement }) => {
    const img = canvasElement.querySelector(".qld__header__brand-image img");
    await img.decode();

    const { width, height } = img.getBoundingClientRect();
    await expect(width / height).toBeCloseTo(117.33 / 19.73, 1);
    await expect(height).toBeCloseTo(56, 0);
  },
};

// With no layout chosen the header renders as it always has: logo and title
// side by side, divided by the accent border, using the crest-only logo.
export const InlineLayoutUnchanged = {
  args: { ...stackedArgs, siteHeaderLayout: "" },
  globals: desktopGlobals,
  parameters: { chromatic: { disableSnapshot: true } },
  play: async ({ canvasElement }) => {
    const parts = brandParts(canvasElement);
    const { header, brandImage, heading, use } = parts;

    await expect(header).not.toHaveClass("qld__header--stacked");
    await expect(use.getAttribute("href")).toMatch(/#logo$/);
    await expect(heading.getBoundingClientRect().top).toBeLessThan(
      brandImage.getBoundingClientRect().bottom,
    );
    await expect(getComputedStyle(brandImage).borderRightStyle).toBe("solid");
    await expectSharedBrandLink(parts);
  },
};

// Print: the Queensland Government logo must stay visible (it doubles as the
// required government crest) while the interactive search box is hidden.
export const Print = {
  args: { ...headerArgs },
  ...printParams(
    "the Queensland Government logo staying visible as the print crest, the search box being hidden, and no URL printing beside the site title",
  ),
  play: async ({ canvasElement }) => {
    const brandLink = canvasElement.querySelector(".qld__header__brand a");
    await expect(brandLink).toBeTruthy();

    // The site title's anchor wraps the whole masthead, so the global rule that
    // appends a link's href would print the home page URL beside the title. This
    // story's siteLogoUrl is absolute, which is the case that actually reaches
    // that rule — a relative href is excluded by scheme and would pass either
    // way, making a weaker suppression rule look correct.
    //
    // Resolved styles, not the CSSOM: the suppression rule and the rule it has to
    // beat are both !important, so the only thing that distinguishes a working
    // fix from a broken one is which one the cascade picks.
    withPrintMedia(() => {
      expect(getComputedStyle(brandLink, "::after").content).toBe('""');
    });
  },
};

export const StackedPrint = {
  args: { ...stackedArgs },
  ...printParams(
    "the stacked layout keeping its logo above the title with no divider when printed",
  ),
  play: async ({ canvasElement }) => {
    const { brandImage, heading } = brandParts(canvasElement);

    withPrintMedia(() => {
      expect(getComputedStyle(brandImage).borderRightStyle).toBe("none");
      expect(heading.getBoundingClientRect().top).toBeGreaterThanOrEqual(
        brandImage.getBoundingClientRect().bottom,
      );
    });
  },
};
