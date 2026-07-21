import {
  dummyImageLink,
  dummyText,
  storyParams,
} from "../../../.storybook/globals";

const imageRatios = ["1x1", "3x2", "2x3", "4x3", "3x4", "16x9"];

function render(args) {
  const classes = [
    args.responsiveMediaImg ? "qld__responsive-media-img" : "",
    args.imageRatio ? `qld__image-ratio-${args.imageRatio}` : "",
    args.extraClasses,
  ]
    .filter(Boolean)
    .join(" ");

  return `<figure${args.rightAligned ? ' class="qld__right-aligned-img"' : ""}>
  <img
    loading="lazy"
    src="${args.src}"
    alt="${args.alt}"
    width="${args.width}"
    height="${args.height}"
    ${classes ? `class="${classes}"` : ""}
  />
  ${args.caption ? `<figcaption>${args.caption}</figcaption>` : ""}
</figure>`;
}

const meta = {
  title: "3. Components/Image",
  render,
  argTypes: {
    src: {
      description: "URL of the image.",
      control: { type: "text" },
    },
    alt: {
      description: "Alternate text for the image.",
      control: { type: "text" },
    },
    width: {
      description: "Width of the image (px).",
      control: { type: "number" },
    },
    height: {
      description: "Height of the image (px).",
      control: { type: "number" },
    },
    caption: {
      description: "Optional caption.",
      control: { type: "text" },
    },
    rightAligned: {
      description: "Applies right alignment to the image.",
      control: { type: "boolean" },
    },
    responsiveMediaImg: {
      description: "Applies responsive media image styling to the image.",
      control: { type: "boolean" },
    },
    imageRatio: {
      description:
        "Crops the image to a fixed aspect ratio via the qld__image-ratio-* utility.",
      control: { type: "select" },
      options: ["", ...imageRatios],
    },
    extraClasses: {
      description: "Any additional classes to apply to the image.",
      control: { type: "text" },
    },
  },
  args: {
    src: dummyImageLink,
    alt: "Close up photo of Culex annulirostris on human skin",
    width: 1080,
    height: 720,
    caption:
      "Supplied by Stephen Doggett, Department of Medical Entomology, NSW Health Pathology.",
    rightAligned: false,
    responsiveMediaImg: false,
    imageRatio: "",
    extraClasses: "",
  },
  decorators: [
    (Story) => {
      return Story() + `<p>${dummyText}</p>`;
    },
  ],
  parameters: storyParams("image"),
};

export default meta;

export const Default = {};

export const RightAligned = {
  args: { rightAligned: true },
};

export const WithoutCaption = {
  args: { caption: "" },
};

export const FixedRatio = {
  args: { imageRatio: "1x1" },
};

export const RightAlignedFixedRatio = {
  args: { rightAligned: true, imageRatio: "16x9" },
};

/**
 * Every `qld__image-ratio-*` utility applied directly to the `img`, sharing one
 * source image so the difference is purely the crop.
 */
export const AllRatios = {
  name: "All image ratios",
  render: (args) =>
    `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px;">
  ${imageRatios
    .map(
      (ratio) => `<figure>
    <img
      loading="lazy"
      src="${args.src}"
      alt="${args.alt}"
      width="${args.width}"
      height="${args.height}"
      class="qld__image-ratio-${ratio}"
    />
    <figcaption>qld__image-ratio-${ratio}</figcaption>
  </figure>`,
    )
    .join("\n  ")}
</div>`,
};

/**
 * The utility also works on a wrapper — put it on the `figure` (or any
 * containing element) and the image inside is cropped to match.
 */
export const RatioOnWrapper = {
  name: "Ratio on the wrapper",
  render: (args) =>
    `<figure class="qld__image-ratio-16x9" style="max-width: 480px;">
  <img
    loading="lazy"
    src="${args.src}"
    alt="${args.alt}"
    width="${args.width}"
    height="${args.height}"
  />
</figure>`,
};

export const ResponsiveImage = {
  args: { responsiveMediaImg: true },
  decorators: [
    (Story) =>
      `<div style="width: 200px; border: 2px dashed #ccc;">${Story()}</div>`,
  ],
};
