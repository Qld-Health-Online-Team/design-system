import { dummyImageLink, dummyText, storyParams } from "../../../.storybook/globals";

function render(args) {
 const classes = [
  args.responsiveMediaImg ? "qld__responsive-media-img" : "",
  args.extraClasses,
 ].filter(Boolean).join(" ");

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
  caption: "Supplied by Stephen Doggett, Department of Medical Entomology, NSW Health Pathology.",
  rightAligned: false,
  responsiveMediaImg: false,
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

export const ResponsiveImage = {
 args: { responsiveMediaImg: true },
 decorators: [
  (Story) => `<div style="width: 200px; border: 2px dashed #ccc;">${Story()}</div>`,
 ],
};