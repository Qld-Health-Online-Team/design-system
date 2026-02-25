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

export const figmaLinks = {
    masterDoc: {
        file: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QGDS-UI-kit?node-id=23529-440999&t=y8LMLpCtTxOgtHpT-0",
    },
    backToTop: {
        design: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QGDS-UI-kit?node-id=11056-321317&p=f&t=A5RGn3vQ6cEyXHw7-0",
        ds: "https://www.designsystem.qld.gov.au/components/back-to-top",
    },
    breadcrumbs: {
        design: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QGDS-UI-kit?node-id=5990-98076&p=f&t=4xsFBWGSPA5BjG6z-0",
        ds: "https://www.designsystem.qld.gov.au/components/breadcrumbs",
    },
    button: {
        design: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QGDS-UI-kit?node-id=5990-98058&p=f&t=pMQreNNlQuuKMxlD-0",
        ds: "https://www.designsystem.qld.gov.au/components/button",
    },
    callout: {
        design: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QGDS-UI-kit?node-id=5990-98115&p=f&t=3aGzWYalpb1UXS73-0",
        ds: "https://www.designsystem.qld.gov.au/components/callout",
    },
    checkboxes: {
        design: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QGDS-UI-kit?node-id=11056-321348&p=f&t=WmKMIp3MbkVrYkUf-0",
        ds: "https://www.designsystem.qld.gov.au/components/checkboxes",
    },
    ctaLink: {
        design: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QGDS-UI-kit?node-id=11056-321367&p=f&t=WmKMIp3MbkVrYkUf-0",
        ds: "https://www.designsystem.qld.gov.au/components/call-to-action-cta",
    },
    directionLinks: {
        design: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QGDS-UI-kit?node-id=11056-321363&p=f&t=WmKMIp3MbkVrYkUf-0",
        ds: "https://www.designsystem.qld.gov.au/components/direction-links",
    },
    globalAlert: {
        design: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QGDS-UI-kit?node-id=5990-97590&p=f&t=DWJ5IM0EPnQV6Sui-0",
        ds: "https://www.designsystem.qld.gov.au/components/global-alert",
    },
    iconography: {
        ds: "https://www.designsystem.qld.gov.au/styles/iconography",
    },
    inPageAlert: {
        design: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QGDS-UI-kit?node-id=5990-98125&p=f&t=WmKMIp3MbkVrYkUf-0",
        ds: "https://www.designsystem.qld.gov.au/components/alerts-in-page",
    },
    inPageNavigation: {
        design: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QGDS-UI-kit?node-id=7905-252906&p=f&t=HnUAp2BI742820Qk-0",
        ds: "https://www.designsystem.qld.gov.au/components/in-page-navigation",
    },
    linkColumns: {
        design: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QGDS-UI-kit?node-id=11056-321574&p=f&t=WmKMIp3MbkVrYkUf-0",
        ds: "https://www.designsystem.qld.gov.au/components/link-columns-link-list",
    },
    loadingSpinner: {
        design: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QGDS-UI-kit?node-id=49314-16705&p=f&t=N6vEZVb73vuDEtRO-0",
        ds: "https://www.designsystem.qld.gov.au/components/loading-spinner",
    },
    pagination: {
        design: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QGDS-UI-kit?node-id=11056-321779&p=f&t=wdrRF6qJa1fuzxWP-0",
        ds: "https://www.designsystem.qld.gov.au/components/pagination",
    },
    promoPanel: {
        design: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QGDS-UI-kit?node-id=23269-286312&p=f&t=ub7vIB4rUQNZ6zzo-0",
        ds: "https://www.designsystem.qld.gov.au/components/promotional-panel",
    },
    radioButtons: {
        design: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QGDS-UI-kit?node-id=11056-321347&p=f&t=kHfUZsyKYuDkprji-0",
        ds: "https://www.designsystem.qld.gov.au/components/radio-buttons",
    },
    selectBox: {
        design: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QGDS-UI-kit?node-id=11056-321345&p=f&t=WmKMIp3MbkVrYkUf-0",
        ds: "https://www.designsystem.qld.gov.au/components/input-fields-select-box",
    },
    tabs: {
        design: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QGDS-UI-kit?node-id=25951-236134&p=f&t=pMQreNNlQuuKMxlD-0",
        ds: "https://www.designsystem.qld.gov.au/components/tabs",
    },
    tags: {
        design: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QGDS-UI-kit?node-id=5990-97596&p=f&t=WmKMIp3MbkVrYkUf-0",
        ds: "https://www.designsystem.qld.gov.au/components/tags",
    },
    textInput: {
        design: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QGDS-UI-kit?node-id=5990-97997&p=f&t=yRd2EKrtkEkPbBDT-0",
        ds: "https://www.designsystem.qld.gov.au/components/text-input",
    },
    videoPlayer: {
        design: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QGDS-UI-kit?node-id=13297-214065&p=f&t=WmKMIp3MbkVrYkUf-0",
        ds: "https://www.designsystem.qld.gov.au/components",
    },
    header: {
        design: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QGDS-UI-kit?node-id=5990-97586&p=f&t=UZuh698yg2zKvMDG-0",
        ds: "https://www.designsystem.qld.gov.au/components/header",
    },
    horizontalRule: {
        design: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QGDS-UI-kit?node-id=5990-97954&p=f&t=avPgpU6waAIMt5Tt-0",
        ds: "https://www.designsystem.qld.gov.au/components/horizontal-rule",
    },
    navbar: {
        design: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QGDS-UI-kit?node-id=5990-97586&p=f&t=UZuh698yg2zKvMDG-0",
        ds: "https://www.designsystem.qld.gov.au/components/navigation-horizontal",
    },
    footer: {
        design: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QGDS-UI-kit?node-id=5990-97582&p=f&t=xM7nOPN0NPouiFDO-0",
        ds: "https://www.designsystem.qld.gov.au/components/footer",
    },
};
