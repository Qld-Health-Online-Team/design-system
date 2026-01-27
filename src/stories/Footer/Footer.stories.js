import Handlebars from "handlebars";
import Template from "../../components/footer/html/component.hbs?raw";
import { figmaLinks } from "../../../.storybook/globals";

// Helper to format links for Handlebars
const formatLinks = (links) =>
    links?.map((link) => ({
        asset_type_code: "page",
        "asset_url^urlencode": link.asset_url,
        "asset_short_name^escapequotes": link.asset_short_name,
    })) || [];

// Default args
const footerArgs = {
    footerSiteTitle: "Queensland Government",
    footerCTAHeading: "Get in touch",
    footerCTALink: [{ asset_short_name: "Contact Us", asset_url: "/about" }],
    footerCTALead:
        "Get in touch for enquiries, feedback, complaints and compliments.",
    footerLogo: {
        asset_url:
            "https://www.designsystem.qld.gov.au/__data/assets/file/0029/454259/coa-delivering-for-qld-mono-blue-mini-lockup.svg",
    },

    footerLinks: [
        {
            asset_short_name: "Copyright",
            asset_url:
                "https://www.health.qld.gov.au/global/copyright-statement",
        },
        {
            asset_short_name: "Disclaimer",
            asset_url: "https://www.health.qld.gov.au/global/disclaimer",
        },
        {
            asset_short_name: "Privacy",
            asset_url: "https://www.health.qld.gov.au/global/privacy",
        },
        {
            asset_short_name: "Right to information",
            asset_url:
                "https://www.health.qld.gov.au/system-governance/contact-us/access-info",
        },
    ],
    footerSocialLinksHeading: "Follow Us",
    footerSocialLinks: [
        {
            asset_short_name: "Facebook",
            asset_url: "https://facebook.com",
            icon: "facebook",
        },
        {
            asset_short_name: "Twitter",
            asset_url: "https://twitter.com",
            icon: "twitter",
        },
        {
            asset_short_name: "LinkedIn",
            asset_url: "https://linkedin.com",
            icon: "linkedin",
        },
    ],
    footerOptionalExtraLinksHeading: "Test Heading",
    footerOptionalSecondLinksList: [
        { asset_short_name: "Extra Link 1", asset_url: "/extra1" },
        { asset_short_name: "Extra Link 2", asset_url: "/extra2" },
    ],
    footerCTAContactPhone: "123 4567",
    footerCTAContactPhoneLink: "tel:123 4567",
    footerCTAContactEmail: "email@qld.gov.au",
    footerCTAContactEmailLink: "mailto:email@qld.gov.au",
    footerAcknowledgementsHeading: "Acknowledgement of Country",
    footerAcknowledgements:
        "Queensland Government acknowledges the Traditional Owners of the land and pays respect to Elders past, present and future.",
    footerLogoLink: "https://www.qld.gov.au",
    footerStyle: "", // Default style
    footerCopyrightMessage:
        "© The State of Queensland 1995-2024 (Organisation) Queensland Government.",
    footerCopyrightLink: [
        {
            asset_short_name: "Queensland Government",
            asset_url: "https://www.qld.gov.au/",
        },
    ],
};

// Render function
const renderFooter = (args) => {
    const { footerStyle, ...rest } = args;

    const site = {
        metadata: {
            footerSiteTitle: { value: rest.footerSiteTitle },
            footerCTAHeading: { value: rest.footerCTAHeading },
            footerCTALead: { value: rest.footerCTALead },
            footerStyle: { value: footerStyle },
            footerMetaMetadata: {
                value: JSON.stringify({
                    footerCTALink: rest.footerCTALink?.[0]
                        ? formatLinks(rest.footerCTALink)[0]
                        : null,
                    footerLinks: formatLinks(rest.footerLinks),
                    footerLogo: rest.footerLogo
                        ? formatLinks([rest.footerLogo])[0]
                        : null,

                    footerSocialLinks: formatLinks(rest.footerSocialLinks).map(
                        (link, i) => ({
                            ...link,
                            icon: rest.footerSocialLinks[i].icon,
                        }),
                    ),
                    footerOptionalExtraLinksHeading:
                        rest.footerOptionalExtraLinksHeading,
                    footerOptionalSecondLinksList: formatLinks(
                        rest.footerOptionalSecondLinksList,
                    ),
                    footerCopyrightLink: rest.footerCopyrightLink?.[0]
                        ? formatLinks(rest.footerCopyrightLink)[0]
                        : null,
                }),
            },
            footerSocialLinksHeading: { value: rest.footerSocialLinksHeading },
            footerCTAContactPhone: { value: rest.footerCTAContactPhone },
            footerCTAContactPhoneLink: {
                value: rest.footerCTAContactPhoneLink,
            },
            footerCTAContactEmail: { value: rest.footerCTAContactEmail },
            footerCTAContactEmailLink: {
                value: rest.footerCTAContactEmailLink,
            },
            footerAcknowledgementsHeading: {
                value: rest.footerAcknowledgementsHeading,
            },
            footerAcknowledgements: { value: rest.footerAcknowledgements },
            footerCopyrightMessage: { value: rest.footerCopyrightMessage },
            footerLogoLink: { value: rest.footerLogoLink },
            coreSiteIcons: { value: "/QLD-icons.svg" },
        },
    };

    return Handlebars.compile(Template)({ site });
};

// ✅ CSF metadata
export default {
    title: "Layout/Footer",
    render: renderFooter,
    argTypes: {
        footerStyle: {
            control: "select",
            options: [
                "",
                "qld__footer--alt",
                "qld__footer--dark",
                "qld__footer--dark-alt",
            ],
            labels: {
                "": "Light",
                "qld__footer--alt": "Alternative",
                "qld__footer--dark": "Dark",
                "qld__footer--dark-alt": "Dark Alternative",
            },
        },
        footerLinks: {
            control: "object",
            description: "Primary footer navigation links",
        },
        footerSocialLinks: {
            control: "object",
            description: "Social media links",
        },
        footerOptionalSecondLinksList: {
            control: "object",
            description: "Optional extra links",
            defaultValue: footerArgs.footerOptionalSecondLinksList,
        },
    },
    args: footerArgs,
    parameters: { design: { type: "figma", url: figmaLinks.footer.design } },
};

// Named exports for stories
export const Default = { args: { ...footerArgs } };
export const Light = { args: { ...footerArgs, footerStyle: "" } };
export const Alt = { args: { ...footerArgs, footerStyle: "qld__footer--alt" } };
export const Dark = {
    args: {
        ...footerArgs,
        footerStyle: "qld__footer--dark",
        footerLogo: {
            asset_url:
                "https://www.designsystem.qld.gov.au/__data/assets/file/0022/456502/coa-delivering-for-qld-mono-white-mini-lockup.svg",
        },
    },
};
export const DarkAlt = {
    args: {
        ...footerArgs,
        footerStyle: "qld__footer--dark-alt",
        footerLogo: {
            asset_url:
                "https://www.designsystem.qld.gov.au/__data/assets/file/0022/456502/coa-delivering-for-qld-mono-white-mini-lockup.svg",
        },
    },
};

export const FooterWithoutOptionalLinks = {
    args: {
        ...footerArgs,
        footerSiteTitle: "Site Title",
        footerSocialLinks: [],
        footerOptionalSecondLinksList: [],
    },
};

export const FooterWithoutQueenslandCoatOfArms = {
    args: {
        ...footerArgs,
        footerSiteTitle: "Site Title",

        footerOptionalSecondLinksList: [
            { asset_short_name: "Custom Link 1", asset_url: "/privacy" },
            { asset_short_name: "Custom Link 2", asset_url: "/terms" },
            { asset_short_name: "Custom Link 3", asset_url: "/accessibility" },
        ],
    },
};
