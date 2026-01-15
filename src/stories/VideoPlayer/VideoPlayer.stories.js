import Handlebars from "handlebars";
import Template from "../../components/video_player/html/component.hbs?raw";
import { figmaLinks } from "../../../.storybook/globals";

const videoPlayerArgs = {
    videoType: "vimeo",
    videoLayout: "two_column",
    stackOptions: "centered",
    videoAlignItems: "top",
    videoId: "1001805640?h=414b9bb286",
    videoSize: "fill_grid",
    videoDuration: "2:30",
    videoCaption: "Living in Brisbane offers a vibrant city life with beautiful weather, diverse culture, stunning parks, and a thriving food scene",
    transcriptOptions: "accordion",
    transcriptLink: "https://example.com/transcript",
    transcriptText: "Full transcript available here.",
    videoDescription:
        "<h2>Optional Heading</h2><p>psum vulputate faucibus commodo laoreet tincidunt amet suspendisse urna. Turpis elementum eget dis senectus in enim varius aliquam. Vel amet odio nibh at sollicitudin. Nullam condimentum lectus.</p>",
};

const renderVideoPlayer = ({ videoType, videoLayout, stackOptions, videoAlignItems, videoId, videoSize, videoDuration, videoCaption, transcriptOptions, transcriptLink, transcriptText, videoDescription, bodyBackground, ...args }) => {
    return Handlebars.compile(Template)({
        component: {
            data: {
                metadata: {
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
    title: "Components/Video Player",
    render: renderVideoPlayer,
    argTypes: {
        videoType: {
            control: { type: "radio" },
            options: ["youtube", "vimeo"],
            description: "The platform hosting the video. Choose between YouTube or Vimeo.",
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
            description: "Alignment of stacked elements. Only applicable when the layout is set to 'stack'.",
        },
        videoAlignItems: {
            control: { type: "radio" },
            options: ["top", "centered_vertically"],
            if: { arg: "videoLayout", neq: "stack" },
            description: "Vertical alignment of the video when not using a 'stack' layout.",
        },
        videoId: {
            control: "text",
            description: "Unique identifier for the video. This can be a YouTube or Vimeo video ID.",
        },
        videoSize: {
            control: { type: "radio" },
            options: ["fill_grid", "eight_col"],
            if: { arg: "videoLayout", eq: "stack" },
            description: "The size of the video within the layout grid.",
        },
        videoDuration: {
            control: "text",
            description: "The duration of the video in a readable format, e.g., '2:30'.",
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
            description: "How the transcript is presented—either as a link or within an accordion.",
        },
        transcriptLink: {
            control: { type: "text" },
            if: { arg: "transcriptOptions", eq: "link" },
            description: "The URL for the transcript link. Required if 'transcriptOptions' is set to 'link'.",
        },
        transcriptText: {
            control: { type: "text" },
            if: { arg: "transcriptOptions", eq: "accordion" },
            description: "The full transcript text. Required if 'transcriptOptions' is set to 'accordion'.",
        },
        videoDescription: {
            control: "text",
            description: "An optional description providing additional details about the video content.",
        },
        bodyBackground: {
            control: { type: "radio" },
            labels: {
                white: "White",
                light: "Light",
                alt: "Alternate",
                dark: "Dark",
                dark_alt: "Alternate Dark",
            },
            options: ["white", "light", "alt", "dark", "dark-alt"],
            description: "The background theme for the video player.",
        },
    },
    args: { ...videoPlayerArgs },
    parameters: {
        design: {
            type: "figma",
            url: figmaLinks.videoPlayer.design,
        },
    },
};

export const Default = {
    args: {
        ...videoPlayerArgs,
    },
};

export const defaultVariant = (videoPlayerArgs) => renderVideoPlayer({ ...videoPlayerArgs, videoType: "vimeo" });
defaultVariant.tags = ["!dev"];

export const light = {
    args: {
        ...videoPlayerArgs,
        bodyBackground: "light",
    },
    render: (args) => renderVideoPlayer(args),
};

export const lightAlt = {
    args: {
        ...videoPlayerArgs,
        bodyBackground: "alt",
    },
    render: (args) => renderVideoPlayer(args),
};

export const dark = {
    args: {
        ...videoPlayerArgs,
        bodyBackground: "dark",
    },
    render: (args) => renderVideoPlayer(args),
};

export const darkAlt = {
    args: {
        ...videoPlayerArgs,
        bodyBackground: "dark-alt",
    },
    render: (args) => renderVideoPlayer(args),
};
