export const viewports = {
    // QLD-media Breakpoints from variables.scss
    small: { name: "Small", styles: { width: "400px", height: "800px" } },
    medium: { name: "Medium", styles: { width: "699px", height: "800px" } },
    large: { name: "Large", styles: { width: "992px", height: "800px" } },
    xlarge: {
        name: "Extra large",
        styles: { width: "1312px", height: "1000px" },
    },
    xxlarge: {
        name: "Extra extra large",
        styles: { width: "1599px", height: "1000px" },
    },
    mainNavBreakpoint: {
        name: "Main nav breakpoint",
        styles: { width: "992px", height: "800px" },
    },
};

export const themes = {
    white: "js qld__body qld__grid",
    light: "js qld__body qld__body--light qld__light",
    "light alt": "js qld__body qld__body--alt qld__light-alt",
    dark: "js qld__body qld__body--dark qld__dark",
    "dark alt": "js qld__body qld__body--dark-alt qld__dark-alt",
};

export const themeColours = {
    white: "",
    light: "var(--QLD-color-light__background)",
    "light alt": "var(--QLD-color-light__background--alt)",
    dark: "var(--QLD-color-dark__background)",
    "dark alt": "var(--QLD-color-dark__background--alt)",
};

export const dummyText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export const dummyLink = "https://www.google.com";

const dsBase = "https://www.designsystem.qld.gov.au";
const figmaBase = "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QGDS-UI-kit";

export const componentLinks = {
    accordion: { ds: `${dsBase}/components/accordion` },
    backToTop: {
        ds: `${dsBase}/patterns/back-to-top`,
        figma: `${figmaBase}?node-id=135268-27564&t=Gk55sISVPoJM2wm4-0`,
    },
    banner: { ds: `${dsBase}/components/banner`, figma: `${figmaBase}?node-id=120353-65175&t=Lne25vgTT2xUkJcD-0` },
    breadcrumbs: {
        ds: `${dsBase}/components/breadcrumbs`,
        figma: `${figmaBase}?node-id=5990-98076&p=f&t=4xsFBWGSPA5BjG6z-0`,
    },
    button: { ds: `${dsBase}/components/button`, figma: `${figmaBase}?node-id=5990-98058&p=f&t=pMQreNNlQuuKMxlD-0` },
    callout: { ds: `${dsBase}/components/callout`, figma: `${figmaBase}?node-id=5990-98115&p=f&t=3aGzWYalpb1UXS73-0` },
    checkboxes: {
        ds: `${dsBase}/components/checkbox`,
        figma: `${figmaBase}?node-id=11056-321348&p=f&t=WmKMIp3MbkVrYkUf-0`,
    },
    ctaLink: {
        ds: `${dsBase}/components/call-to-action-cta`,
        figma: `${figmaBase}?node-id=11056-321367&p=f&t=WmKMIp3MbkVrYkUf-0`,
    },
    directionLinks: {
        ds: `${dsBase}/components/direction-link`,
        figma: `${figmaBase}?node-id=11056-321363&p=f&t=WmKMIp3MbkVrYkUf-0`,
    },
    footer: { ds: `${dsBase}/components/footer`, figma: `${figmaBase}?node-id=5990-97582&p=f&t=xM7nOPN0NPouiFDO-0` },
    forms: { ds: `${dsBase}/components/forms` },
    globalAlert: {
        ds: `${dsBase}/components/global-alert`,
        figma: `${figmaBase}?node-id=5990-97590&p=f&t=DWJ5IM0EPnQV6Sui-0`,
    },
    header: { ds: `${dsBase}/components/header`, figma: `${figmaBase}?node-id=5990-97586&p=f&t=UZuh698yg2zKvMDG-0` },
    horizontalRule: {
        ds: `${dsBase}/components/horizontal-rule`,
        figma: `${figmaBase}?node-id=5990-97954&p=f&t=avPgpU6waAIMt5Tt-0`,
    },
    iconography: { ds: `${dsBase}/styles/iconography` },
    inPageAlert: {
        ds: `${dsBase}/components/alerts-in-page`,
        figma: `${figmaBase}?node-id=5990-98125&p=f&t=WmKMIp3MbkVrYkUf-0`,
    },
    inPageNavigation: {
        ds: `${dsBase}/components/in-page-navigation`,
        figma: `${figmaBase}?node-id=7905-252906&p=f&t=Tb6VtPPWrZ7Na35f-0`,
    },
    linkColumns: {
        ds: `${dsBase}/components/link-columns-link-list`,
        figma: `${figmaBase}?node-id=11056-321574&p=f&t=WmKMIp3MbkVrYkUf-0`,
    },
    loadingSpinner: {
        ds: `${dsBase}/components/loading-spinner`,
        figma: `${figmaBase}?node-id=49314-16705&p=f&t=N6vEZVb73vuDEtRO-0`,
    },
    navbar: {
        ds: `${dsBase}/components/navigation-horizontal`,
        figma: `${figmaBase}?node-id=5990-97586&p=f&t=UZuh698yg2zKvMDG-0`,
    },
    pagination: {
        ds: `${dsBase}/components/pagination`,
        figma: `${figmaBase}?node-id=11056-321779&p=f&t=wdrRF6qJa1fuzxWP-0`,
    },
    promoPanel: {
        ds: `${dsBase}/components/promotional-panel`,
        figma: `${figmaBase}?node-id=23269-286312&p=f&t=ub7vIB4rUQNZ6zzo-0`,
    },
    radioButtons: {
        ds: `${dsBase}/components/radio-buttons`,
        figma: `${figmaBase}?node-id=11056-321347&p=f&t=kHfUZsyKYuDkprji-0`,
    },
    selectBox: {
        ds: `${dsBase}/components/input-fields-select-box`,
        figma: `${figmaBase}?node-id=11056-321345&p=f&t=WmKMIp3MbkVrYkUf-0`,
    },
    table: { ds: `${dsBase}/components/table`, figma: `${figmaBase}?node-id=120418-57729&t=VPLTzrxLs85peK9J-0` },
    tabs: { ds: `${dsBase}/components/tabs`, figma: `${figmaBase}?node-id=25951-236134&p=f&t=pMQreNNlQuuKMxlD-0` },
    tags: { ds: `${dsBase}/components/tags`, figma: `${figmaBase}?node-id=5990-97596&p=f&t=WmKMIp3MbkVrYkUf-0` },
    textInput: {
        ds: `${dsBase}/components/text-input`,
        figma: `${figmaBase}?node-id=5990-97997&p=f&t=yRd2EKrtkEkPbBDT-0`,
    },
    videoPlayer: {
        figma: `${figmaBase}?node-id=13297-214065&p=f&t=WmKMIp3MbkVrYkUf-0`,
    },
};

/**
 * Standard docs parameters for a story.
 * Renders a Resources line at the top of autodocs with links to the QLD Design System
 * and Figma (when available). Both are looked up automatically from the component key.
 *
 * @param {keyof typeof componentLinks} componentKey
 */
export function storyParams(componentKey) {
    const { ds, figma } = componentLinks[componentKey] ?? {};
    const links = ds ? [`[QLD Design System ↗](${ds})`] : [];
    if (figma) links.push(`[Figma UI Kit ↗](${figma})`);
    return {
        docs: {
            toc: true,
            codePanel: true,
            description: {
                component: `**Resources:** ${links.join(" · ")}`,
            },
        },
        ...(figma && { design: { type: "figma", url: figma } }),
    };
}
