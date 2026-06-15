import { storyParams, themes } from "../../../.storybook/globals";
import { Iconography } from "./Iconography";
import { themeWrapper } from "../../../.storybook/helper-functions.js";
import iconsSvg from "../../assets/img/QLD-icons.svg?raw";

// The sprite is inlined at build time (?raw); we parse it with DOMParser to list
// every <symbol> id for the allIcons gallery. Lives here as it's the only consumer.
// Parsing (rather than regex) means symbols inside comments — e.g. the "XXX"
// template placeholder — are ignored, since comment nodes aren't queried.
const iconSprite = new DOMParser().parseFromString(iconsSvg, "image/svg+xml");
const iconIDs = [...iconSprite.querySelectorAll("symbol")].map(
  (symbol) => symbol.id,
);

const iconographyArgs = {
  size: "lg",
  iconID: "chevron-left",
};

const iconographySizes = ["sm", "md", "lg", "xl", "xxl"];

export default {
  title: "1. Core Styles/Iconography",
  render: (args) => Iconography(args.size, args.site, args.iconID),
  argTypes: {
    size: {
      description: "The size of the icons.",
      control: {
        type: "radio",
        labels: {
          sm: "Small",
          md: "Medium",
          lg: "Large",
          xl: "Extra Large",
          xxl: "Extra Extra Large",
        },
      },
      options: iconographySizes,
    },
    iconID: {
      control: "text",
      description: "The ID of the icon to display.",
    },
  },
  args: iconographyArgs,
  parameters: storyParams("iconography"),
};

export const Default = {};

export const allIcons = (args) => {
  let iconString = `<div tabindex="0" class="iconography-container">`;

  // Loop through each icon ID
  if (iconIDs.length > 0) {
    iconIDs.forEach((iconID) => {
      iconString += `<div class="iconography-item">`;
      iconString += Iconography(iconographySizes[2], args.site, iconID);
      iconString += `<span class="iconography-item-name">${iconID}</span></div>`;
    });
  }

  return iconString + "</div>";
};
allIcons.tags = ["!dev"];

export const sizes = {
  render: (args) => {
    let iconString = `<div style="display: flex; flex-wrap: wrap; gap: 2rem;">`;
    iconographySizes.forEach((size) => {
      let pxSize = "";
      switch (size) {
        case "sm":
          pxSize = "16px";
          break;
        case "md":
          pxSize = "24px";
          break;
        case "lg":
          pxSize = "32px";
          break;
        case "xl":
          pxSize = "48px";
          break;
        case "xxl":
          pxSize = "64px";
          break;
      }
      iconString += `<div style="display: flex; flex-direction: column; align-items: center;">${Iconography(size, args.site, args.iconID)}<div style="margin-bottom: .25rem;">${size}: ${pxSize}</div></div>`;
    });
    return iconString + "</div>";
  },
};

export const white = {
  render: (args) => {
    return themeWrapper(themes["white"], allIcons(args));
  },
};

export const light = {
  render: (args) => {
    return themeWrapper(themes["light"], allIcons(args));
  },
};

export const lightAlt = {
  render: (args) => {
    return themeWrapper(themes["light alt"], allIcons(args));
  },
};

export const dark = {
  render: (args) => {
    return themeWrapper(themes["dark"], allIcons(args));
  },
};

export const darkAlt = {
  render: (args) => {
    return themeWrapper(themes["dark alt"], allIcons(args));
  },
};
