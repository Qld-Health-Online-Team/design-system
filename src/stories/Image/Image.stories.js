import {
  dummyImageLink,
  dummyText,
  imagePositionDemoImage,
  imagePositionDemoImagePortrait,
  storyParams,
} from "../../../.storybook/globals";

const imageRatios = ["1x1", "3x2", "2x3", "4x3", "3x4", "16x9"];

const imagePositions = [
  "center",
  "left",
  "right",
  "top",
  "bottom",
  "left-top",
  "right-top",
  "left-bottom",
  "right-bottom",
];

function render(args) {
  const classes = [
    args.responsiveMediaImg ? "qld__responsive-media-img" : "",
    args.imageRatio ? `qld__image-ratio-${args.imageRatio}` : "",
    args.imagePosition ? `qld__image-position--${args.imagePosition}` : "",
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
    imagePosition: {
      description:
        "Chooses which part of a cropped image stays in frame via the qld__image-position--* utility. Needs a crop to act on, such as an image ratio.",
      control: { type: "select" },
      options: ["", ...imagePositions],
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
    imagePosition: "",
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

/**
 * Every `qld__image-position--*` utility, over a test sheet that names the zone
 * left in frame.
 *
 * `object-position` can only slide an image along the axis its crop overflows,
 * so no single crop shows all nine utilities doing something. The first row
 * crops a landscape sheet to a tall frame — spare width, so the `left`/`right`
 * half of each name bites and the `top`/`bottom` half sits idle. The second row
 * crops a portrait sheet to a wide frame, which is the other way round.
 */
export const AllPositions = {
  name: "All image positions",
  args: { alt: "Test sheet of nine labelled zones" },
  render: (args) => {
    const grid = (src, ratio) =>
      `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 24px;">
    ${imagePositions
      .map(
        (position) => `<figure>
      <img
        loading="lazy"
        src="${src}"
        alt="${args.alt}"
        class="qld__image-ratio-${ratio} qld__image-position--${position}"
      />
      <figcaption>qld__image-position--${position}</figcaption>
    </figure>`,
      )
      .join("\n    ")}
  </div>`;

    return `<h3>Landscape image, tall crop — slides left and right</h3>
  ${grid(imagePositionDemoImage, "2x3")}
  <h3 class="qld__margin-t-component">Portrait image, wide crop — slides up and down</h3>
  ${grid(imagePositionDemoImagePortrait, "16x9")}`;
  },
};

const borderRadiusSizes = ["xs", "sm", "md", "lg"];

/**
 * One figure per radius size, plus a final figure carrying the utility itself.
 * `captioned` decides whether each figure gets a `figcaption`, which is what
 * changes how the radius has to be applied.
 */
function renderRoundedGrid(args, captioned) {
  const label = (text) => (captioned ? `<figcaption>${text}</figcaption>` : "");

  const image = (classes) => `<img
      loading="lazy"
      src="${args.src}"
      alt="${args.alt}"
      class="qld__image-ratio-4x3${classes ? ` ${classes}` : ""}"
    />`;

  return `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px;">
  ${borderRadiusSizes
    .map(
      (size) => `<figure>
    ${image(`qld__border-radius--${size}`)}
    ${label(`img.qld__border-radius--${size}`)}
  </figure>`,
    )
    .join("\n  ")}
  <figure class="qld__border-radius--md">
    ${image("")}
    ${label("figure.qld__border-radius--md")}
  </figure>
</div>`;
}

/**
 * `qld__border-radius--*` on the image rounds the top corners and passes the
 * matching radius to the caption, so the pair reads as one rounded block. Put
 * the same utility on the `figure` instead and it clips its contents to shape.
 */
export const RoundedCorners = {
  name: "Rounded corners",
  render: (args) => renderRoundedGrid(args, true),
};

/**
 * Without a caption the image keeps all four corners, whether the utility sits
 * on the `img` or on the `figure` around it.
 */
export const RoundedCornersWithoutCaption = {
  name: "Rounded corners without caption",
  render: (args) => renderRoundedGrid(args, false),
};

export const ResponsiveImage = {
  args: { responsiveMediaImg: true },
  decorators: [
    (Story) =>
      `<div style="width: 200px; border: 2px dashed #ccc;">${Story()}</div>`,
  ],
};
