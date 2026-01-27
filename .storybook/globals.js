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
    inPageAlert: {
        design: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QGDS-UI-kit?node-id=5990-98125&p=f&t=WmKMIp3MbkVrYkUf-0",
        ds: "https://www.designsystem.qld.gov.au/components/alerts-in-page",
    },
    linkColumns: {
        design: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QGDS-UI-kit?node-id=11056-321574&p=f&t=WmKMIp3MbkVrYkUf-0",
        ds: "https://www.designsystem.qld.gov.au/components/link-columns-link-list",
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
    tags: {
        design: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QGDS-UI-kit?node-id=5990-97596&p=f&t=WmKMIp3MbkVrYkUf-0",
        ds: "https://www.designsystem.qld.gov.au/components/tags",
    },
    videoPlayer: {
        design: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QGDS-UI-kit?node-id=13297-214065&p=f&t=WmKMIp3MbkVrYkUf-0",
        ds: "https://www.designsystem.qld.gov.au/components",
    },
    footer: {
        design: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QGDS-UI-kit?node-id=5990-97582&p=f&t=xM7nOPN0NPouiFDO-0",
        ds: "https://www.designsystem.qld.gov.au/components/footer",
    },
};
