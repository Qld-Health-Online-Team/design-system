export const viewports = {
    // QLD-media Breakpoints from variables.scss
    small: { name: "Small", styles: { width: "400px", height: "800px" } },
    medium: { name: "Medium", styles: { width: "699px", height: "800px" } },
    large: { name: "Large", styles: { width: "992px", height: "800px" } },
    xlarge: { name: "Extra large", styles: { width: "1312px", height: "1000px" } },
    xxlarge: { name: "Extra extra large", styles: { width: "1599px", height: "1000px" } },
    mainNavBreakpoint: { name: "Main nav breakpoint", styles: { width: "992px", height: "800px" } },
};

export const themes = {
    white: "qld__body",
    light: "qld__body qld__body--light qld__light",
    "light alt": "qld__body qld__body--alt qld__light-alt",
    dark: "qld__body qld__body--dark qld__dark",
    "dark alt": "qld__body qld__body--dark-alt qld__dark-alt",
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
    inPageAlert: {
        design: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QGDS-UI-kit?node-id=5990-98125&p=f&t=y8LMLpCtTxOgtHpT-0",
        file: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QGDS-UI-kit?node-id=23167-395551&t=h9SPYdoJV6KCygCT-0",
        ds: "https://www.designsystem.qld.gov.au/components/alerts-in-page",
    },
    filterTags: {
        design: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QGDS-UI-kit?node-id=5990-97596&p=f&t=y8LMLpCtTxOgtHpT-0",
        file: "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QGDS-UI-kit?node-id=23167-395550&t=y8LMLpCtTxOgtHpT-0",
        ds: "https://www.designsystem.qld.gov.au/components/tags",
    },
};
