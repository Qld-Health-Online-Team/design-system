import Template from "../../components/global_alert/html/component.hbs";
import { storyParams, iconSpritePath } from "../../../.storybook/globals";

function buildSite({
  alertLevel,
  alertTitle,
  alertMessage,
  alertLinkTitle,
  alertLinkURL,
  secondAlert,
  thirdAlert,
}) {
  return {
    metadata: {
      coreSiteIcons: { value: iconSpritePath },
      mainNavVerticalNav: { value: "" },
      alertDisplay: { value: "true" },
      alertLevel: { value: alertLevel },
      alertTitle: { value: alertTitle },
      alertMessage: { value: alertMessage },
      alertLinkTitle: { value: alertLinkTitle },
      alertLinkURL: { value: alertLinkURL },
      secondAlertDisplay: { value: secondAlert ? "true" : "false" },
      secondAlertLevel: { value: secondAlert?.level ?? "general" },
      secondAlertTitle: { value: secondAlert?.title ?? "" },
      secondAlertMessage: { value: secondAlert?.message ?? "" },
      secondAlertLinkTitle: { value: secondAlert?.linkTitle ?? "Read more" },
      secondAlertLinkURL: { value: secondAlert?.linkURL ?? "#" },
      thirdAlertDisplay: { value: thirdAlert ? "true" : "false" },
      thirdAlertLevel: { value: thirdAlert?.level ?? "critical" },
      thirdAlertTitle: { value: thirdAlert?.title ?? "" },
      thirdAlertMessage: { value: thirdAlert?.message ?? "" },
      thirdAlertLinkTitle: { value: thirdAlert?.linkTitle ?? "Read more" },
      thirdAlertLinkURL: { value: thirdAlert?.linkURL ?? "#" },
    },
  };
}

function render(args) {
  return Template({
    site: buildSite(args),
  });
}

const meta = {
  title: "3. Components/Global Alert",
  render,
  argTypes: {
    alertLevel: {
      description:
        "Severity level of the alert, which controls the colour and icon.",
      control: { type: "radio" },
      options: ["default", "critical", "general"],
      labels: {
        default: "Warning (default)",
        critical: "Critical",
        general: "General / Information",
      },
    },
    alertTitle: {
      description: "Bold title text displayed at the start of the alert.",
      control: { type: "text" },
    },
    alertMessage: {
      description: "Supporting message text shown after the title.",
      control: { type: "text" },
    },
    alertLinkTitle: {
      description: "Label for the action link.",
      control: { type: "text" },
    },
    alertLinkURL: {
      description: "URL for the action link.",
      control: { type: "text" },
    },
  },
  args: {
    alertLevel: "default",
    alertTitle: "Alert title",
    alertMessage: "This is an important message for all users of this site.",
    alertLinkTitle: "Read more",
    alertLinkURL: "#",
    secondAlert: null,
    thirdAlert: null,
  },
  parameters: storyParams("globalAlert"),
};

export default meta;

export const Default = {};

export const Critical = {
  args: {
    alertLevel: "critical",
    alertTitle: "Critical alert",
    alertMessage: "Immediate action may be required.",
  },
};

export const General = {
  args: {
    alertLevel: "general",
    alertTitle: "Information",
    alertMessage: "Here is some useful information for visitors to this site.",
  },
};

export const TwoAlerts = {
  args: {
    alertLevel: "critical",
    alertTitle: "Critical alert",
    alertMessage: "Immediate action may be required.",
    secondAlert: {
      level: "general",
      title: "Information",
      message: "Here is some useful information for visitors to this site.",
      linkTitle: "Read more",
      linkURL: "#",
    },
  },
};

export const ThreeAlerts = {
  args: {
    alertLevel: "critical",
    alertTitle: "Critical alert",
    alertMessage: "Immediate action may be required.",
    secondAlert: {
      level: "default",
      title: "Warning",
      message: "Please be aware of the following.",
      linkTitle: "Read more",
      linkURL: "#",
    },
    thirdAlert: {
      level: "general",
      title: "Information",
      message: "Here is some useful information for visitors to this site.",
      linkTitle: "Read more",
      linkURL: "#",
    },
  },
};
