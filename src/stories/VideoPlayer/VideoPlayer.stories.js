import Template from "../../components/video_player/html/component.hbs";
import { storyParams } from "../../../.storybook/globals";
import { expect, userEvent } from "storybook/test";
import { initComponents } from "../../../.storybook/decorators";
import initVideoPlayer from "../../components/video_player/js/global";
import { initAccordion } from "../../components/accordion/js/global";

const renderVideoPlayer = ({
  idField,
  videoType,
  videoLayout,
  stackOptions,
  videoAlignItems,
  videoId,
  videoSize,
  videoDuration,
  videoCaption,
  transcriptOptions,
  transcriptLink,
  transcriptText,
  videoDescription,
  bodyBackground,
  ...args
}) => {
  return Template({
    component: {
      data: {
        assetid: "123",
        metadata: {
          id_field: { value: idField },
          video_type: { value: videoType },
          video_layout: { value: videoLayout },
          stack_options: { value: stackOptions },
          video_align_items: { value: videoAlignItems },
          video_id: { value: videoId },
          video_size: { value: videoSize },
          video_duration: { value: videoDuration },
          video_caption: { value: videoCaption },
          transcript_options: { value: transcriptOptions },
          transcript_link: { value: transcriptLink },
          transcript: { value: transcriptText },
          video_description: { value: videoDescription },
          body_background: { value: bodyBackground },
        },
      },
    },
    ...args,
  });
};

export default {
  title: "3. Components/Video Player",
  render: renderVideoPlayer,
  argTypes: {
    idField: {
      control: "text",
      description:
        "Optional custom id for the section element. Falls back to 'video_player-{assetid}' when empty.",
    },
    videoType: {
      control: { type: "radio" },
      options: ["youtube", "vimeo"],
      description:
        "The platform hosting the video. Choose between YouTube or Vimeo.",
    },
    videoLayout: {
      control: { type: "radio" },
      options: ["stack", "two_column"],
      description: "Layout for displaying the video and related content.",
    },
    stackOptions: {
      control: { type: "radio" },
      options: ["left_aligned", "centered"],
      if: { arg: "videoLayout", eq: "stack" },
      description:
        "Alignment of stacked elements. Only applicable when the layout is set to 'stack'.",
    },
    videoAlignItems: {
      control: { type: "radio" },
      options: ["top", "centered_vertically"],
      if: { arg: "videoLayout", neq: "stack" },
      description:
        "Vertical alignment of the video when not using a 'stack' layout.",
    },
    videoId: {
      control: "text",
      description:
        "Unique identifier for the video. This can be a YouTube or Vimeo video ID.",
    },
    videoSize: {
      control: { type: "radio" },
      options: ["fill_grid", "eight_col"],
      if: { arg: "videoLayout", eq: "stack" },
      description: "The size of the video within the layout grid.",
    },
    videoDuration: {
      control: "text",
      description:
        "The duration of the video in a readable format, e.g., '2:30'.",
    },
    videoCaption: {
      control: "text",
      description: "A brief caption describing the video.",
    },
    transcriptOptions: {
      control: {
        type: "radio",
        labels: {
          link: "Link",
          accordion: "Accordion",
        },
      },
      options: ["link", "accordion"],
      description:
        "How the transcript is presented—either as a link or within an accordion.",
    },
    transcriptLink: {
      control: { type: "text" },
      if: { arg: "transcriptOptions", eq: "link" },
      description:
        "Matrix asset ID of the transcript page; the template resolves it to the asset's URL via a %globals_asset_assetid% keyword. Required if 'transcriptOptions' is set to 'link'.",
    },
    transcriptText: {
      control: { type: "text" },
      if: { arg: "transcriptOptions", eq: "accordion" },
      description:
        "The full transcript text. Required if 'transcriptOptions' is set to 'accordion'.",
    },
    videoDescription: {
      control: "text",
      description:
        "An optional description providing additional details about the video content.",
    },
    bodyBackground: {
      control: {
        type: "radio",
        labels: {
          white: "White",
          light: "Light",
          alt: "Alternate",
          dark: "Dark",
          "dark-alt": "Alternate Dark",
        },
      },
      options: ["white", "light", "alt", "dark", "dark-alt"],
      description: "The background theme for the video player.",
    },
  },
  args: {
    idField: "",
    videoType: "vimeo",
    videoLayout: "two_column",
    stackOptions: "centered",
    videoAlignItems: "top",
    videoId: "1001805640?h=414b9bb286",
    videoSize: "fill_grid",
    videoDuration: "2:30",
    videoCaption:
      "Living in Brisbane offers a vibrant city life with beautiful weather, diverse culture, stunning parks, and a thriving food scene",
    transcriptOptions: "accordion",
    transcriptLink: "12345",
    transcriptText: "Full transcript available here.",
    videoDescription:
      "<h2>Optional Heading</h2><p>psum vulputate faucibus commodo laoreet tincidunt amet suspendisse urna. Turpis elementum eget dis senectus in enim varius aliquam. Vel amet odio nibh at sollicitudin. Nullam condimentum lectus.</p>",
  },
  parameters: storyParams("videoPlayer"),
  // initAccordion wires the transcript toggle; initVideoPlayer syncs its label
  decorators: [initComponents([initAccordion, initVideoPlayer])],
};

export const Default = {
  play: async ({ canvasElement }) => {
    // The init runs from a decorator deferred with setTimeout, so wait one
    // tick to be sure the button listener is attached.
    await new Promise((resolve) => setTimeout(resolve, 0));

    const button = canvasElement.querySelector(".qld__accordion__title");
    await userEvent.click(button);
    await expect(button).toHaveAttribute("aria-expanded", "true");
  },
};

export const Light = {
  args: {
    bodyBackground: "light",
  },
};

export const LightAlt = {
  args: {
    bodyBackground: "alt",
  },
};

export const Dark = {
  args: {
    bodyBackground: "dark",
  },
};

export const DarkAlt = {
  args: {
    bodyBackground: "dark-alt",
  },
};

export const YouTube = {
  args: {
    videoType: "youtube",
    // "Welcome to the Queensland Health channel" from the official QH channel
    videoId: "keb11O0ou6s",
  },
};

export const Stacked = {
  args: {
    videoLayout: "stack",
    stackOptions: "left_aligned",
  },
};

export const StackedCentered = {
  args: {
    videoLayout: "stack",
    stackOptions: "centered",
  },
};

export const StackedEightColumn = {
  args: {
    videoLayout: "stack",
    stackOptions: "left_aligned",
    videoSize: "eight_col",
  },
};

export const TwoColumnCenteredVertically = {
  args: {
    videoAlignItems: "centered_vertically",
  },
};

export const TranscriptLink = {
  args: {
    transcriptOptions: "link",
  },
};

export const WithoutTranscript = {
  args: {
    transcriptOptions: "",
  },
};

export const TranscriptToggle = {
  // Interaction test only — no visual states worth snapshotting in Chromatic
  parameters: { chromatic: { disableSnapshot: true } },
  play: async ({ canvasElement }) => {
    // The init runs from a decorator deferred with setTimeout, so wait one
    // tick to be sure the button listener is attached.
    await new Promise((resolve) => setTimeout(resolve, 0));

    const button = canvasElement.querySelector(".qld__accordion__title");
    await expect(button).toHaveTextContent("Show transcript");
    await expect(button).toHaveAttribute("aria-expanded", "false");

    await userEvent.click(button);
    await expect(button).toHaveTextContent("Hide transcript");
    await expect(button).toHaveAttribute("aria-expanded", "true");

    await userEvent.click(button);
    await expect(button).toHaveTextContent("Show transcript");
    await expect(button).toHaveAttribute("aria-expanded", "false");
  },
};
