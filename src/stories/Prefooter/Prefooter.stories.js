import Template from "../../components/prefooter/html/component.hbs";
import { storyParams } from "../../../.storybook/globals";

function render(args) {
 return Template({
  current: {
   data: {
    metadata: {
     displayLastUpdated: { value: args.displayLastUpdated },
     pageType: { value: args.pageType },
    },
    updated: args.updated,
   },
  },
  site: {
   metadata: {
    siteBackToTopShow: { value: args.showBackToTop },
   },
  },
 });
}


const meta = {
 title: "3. Components/Pre Footer",
 render,
 decorators: [
  (Story, context) => {
   const wrapper = document.createElement("div");

   const body = document.createElement("div");
   body.className = "qld__body";
   body.appendChild(document.createElement("div")).id = "content";

   const preFooter = document.createElement("section");
   preFooter.className = "qld__pre-footer";

   const result = Story(context);
   if (typeof result === "string") {
    preFooter.innerHTML = result;
   } else {
    preFooter.appendChild(result);
   }

   wrapper.appendChild(body);
   wrapper.appendChild(preFooter);

   return wrapper;
  },
 ],
 argTypes: {
  displayLastUpdated: {
   description:
    "Whether 'Last updated' block renders.",
   control: {
    type: "radio",
    labels: { yes: "Yes", no: "No" },
   },
   options: ["yes", "no"],
  },
  pageType: {
   description:
    "The type of page this component will be displayed on.",
   control: {
    type: "select",
    labels: {
     landing: "Landing page",
     news_detail: "News detail",
     content: "Content page",
     site_search: "Site search",
    },
   },
   options: ["landing", "news_detail", "content", "site_search"],
  },
  updated: {
   description:
    "Date the page was last updated, formatted as 'F Y' (example June 2025).",
   control: { type: "date" },
  },
  showBackToTop: {
   description:
    "Whether 'Back to top' block renders.",
   control: { type: "boolean" },
  },
 },
 args: {
  displayLastUpdated: "yes",
  pageType: "content",
  updated: new Date(2025, 5, 16).getTime(),
  showBackToTop: true,
 },
 // Currently only documented under the "Back to top" pattern in DS and Figma.
 parameters: storyParams("backToTop")
};

export default meta;

export const Default = {};

export const LandingPage = {
 args: { pageType: "landing" },
};

export const NewsDetailPage = {
 args: { pageType: "news_detail" },
};

export const SiteSearchPage = {
 args: { pageType: "site_search" },
};

export const WithoutBackToTop = {
 args: { showBackToTop: false },
};

export const BackToTopOnly = {
 args: { displayLastUpdated: "no", showBackToTop: true },
};

export const Empty = {
 args: { displayLastUpdated: "no", showBackToTop: false },
};