import { dummyText, storyParams } from "../../../.storybook/globals";
import Template from "../../components/multi_column/html/component.hbs";

function colValue(text) {
  return text ? `<p>${text}</p>` : "";
}

function buildData(args) {
  return {
    component: {
      data: {
        assetid: "",
        metadata: {
          id_field: { value: args.idField },
          body_background: { value: args.bodyBackground },
          intro_show: { value: args.introShow },
          intro_heading: { value: args.introHeading },
          intro_body: { value: colValue(args.introBody) },
          intro_width: { value: args.introWidth },
          row_num: { value: args.rowNum },
          space_rows: { value: args.spaceRows },

          col_num: { value: args.colNum },
          col_1_width: { value: args.col1Width },
          col_2_width: { value: args.col2Width },
          col_3_width: { value: args.col3Width },
          // Column 4 uses auto-width to determine the left over sizing

          col_1_1: { value: colValue(args.col_1_1) },
          col_1_2: { value: colValue(args.col_1_2) },
          col_1_3: { value: colValue(args.col_1_3) },
          col_1_4: { value: colValue(args.col_1_4) },

          col_2_1: { value: colValue(args.col_2_1) },
          col_2_2: { value: colValue(args.col_2_2) },
          col_2_3: { value: colValue(args.col_2_3) },
          col_2_4: { value: colValue(args.col_2_4) },

          col_3_1: { value: colValue(args.col_3_1) },
          col_3_2: { value: colValue(args.col_3_2) },
          col_3_3: { value: colValue(args.col_3_3) },
          col_3_4: { value: colValue(args.col_3_4) },

          col_4_1: { value: colValue(args.col_4_1) },
          col_4_2: { value: colValue(args.col_4_2) },
          col_4_3: { value: colValue(args.col_4_3) },
          col_4_4: { value: colValue(args.col_4_4) },

          col_5_1: { value: colValue(args.col_5_1) },
          col_5_2: { value: colValue(args.col_5_2) },
          col_5_3: { value: colValue(args.col_5_3) },
          col_5_4: { value: colValue(args.col_5_4) },

          col_6_1: { value: colValue(args.col_6_1) },
          col_6_2: { value: colValue(args.col_6_2) },
          col_6_3: { value: colValue(args.col_6_3) },
          col_6_4: { value: colValue(args.col_6_4) },

          col_7_1: { value: colValue(args.col_7_1) },
          col_7_2: { value: colValue(args.col_7_2) },
          col_7_3: { value: colValue(args.col_7_3) },
          col_7_4: { value: colValue(args.col_7_4) },

          col_8_1: { value: colValue(args.col_8_1) },
          col_8_2: { value: colValue(args.col_8_2) },
          col_8_3: { value: colValue(args.col_8_3) },
          col_8_4: { value: colValue(args.col_8_4) },

          col_9_1: { value: colValue(args.col_9_1) },
          col_9_2: { value: colValue(args.col_9_2) },
          col_9_3: { value: colValue(args.col_9_3) },
          col_9_4: { value: colValue(args.col_9_4) },

          col_10_1: { value: colValue(args.col_10_1) },
          col_10_2: { value: colValue(args.col_10_2) },
          col_10_3: { value: colValue(args.col_10_3) },
          col_10_4: { value: colValue(args.col_10_4) },
        },
      },
    },
  };
}

function render(args) {
  return Template(buildData(args));
}

function rowColumnArgTypes(row) {
  const entries = {};
  for (let col = 1; col <= 4; col += 1) {
    entries[`col_${row}_${col}`] = {
      description: `Row ${row}, column ${col} content.`,
      control: { type: "text" },
      table: { category: `Row ${row}` },
    };
  }
  return entries;
}

function rowColumnArgs(row) {
  const entries = {};
  for (let col = 1; col <= 4; col += 1) {
    entries[`col_${row}_${col}`] = `Row ${row}, column ${col} sample content`;
  }
  return entries;
}

const meta = {
  title: "3. Components/Multi Column",
  render,
  argTypes: {
    idField: {
      description:
        "Optional custom id for the component, otherwise falls back to 'multi-column-{assetid}' by default.",
      control: { type: "text" },
    },
    bodyBackground: {
      description: "Background colour of the component.",
      control: {
        type: "select",
        labels: {
          "": "White",
          "qld__body--light": "Light",
          "qld__body--alt": "Alternate",
          "qld__body--dark": "Dark",
          "qld__body--dark-alt": "Dark Alternate",
        },
      },
      options: [
        "",
        "qld__body--light",
        "qld__body--alt",
        "qld__body--dark",
        "qld__body--dark-alt",
      ],
    },
    introShow: {
      description: "Whether the intro heading/body block renders.",
      control: { type: "boolean" },
    },
    introHeading: {
      description: "Intro heading text.",
      control: { type: "text" },
    },
    introBody: {
      description: "Intro body text.",
      control: { type: "text" },
    },
    introWidth: {
      description: "Column width class for the intro block.",
      control: {
        type: "select",
        labels: {
          "col-lg-6": "Half width",
          "col-lg-12": "Full width",
        },
      },
      options: ["col-lg-6", "col-lg-12"],
    },
    rowNum: {
      description: "Number of rows the component should render, max 10.",
      control: { type: "number", min: 1, max: 10, step: 1 },
    },
    spaceRows: {
      description: "Vertical spacing class applied between rows.",
      control: {
        type: "select",
        labels: {
          "qld__row-gap-p": "Paragraph gap (16px)",
          "qld__row-gap-text-element": "Text element gap (24px)",
          "qld__row-gap-component": "Component gap (32px)",
        },
      },
      options: [
        "qld__row-gap-p",
        "qld__row-gap-text-element",
        "qld__row-gap-component",
      ],
    },
    colNum: {
      description: "Number of columns per row.",
      control: { type: "number", min: 1, max: 4, step: 1 },
      table: { category: "Columns (global)" },
    },
    col1Width: {
      description: "Manual width override for column 1.",
      control: { type: "number", min: 0, max: 12, step: 1 },
      table: { category: "Columns (global)" },
    },
    col2Width: {
      description: "Manual width override for column 2.",
      control: { type: "number", min: 0, max: 12, step: 1 },
      table: { category: "Columns (global)" },
    },
    col3Width: {
      description: "Manual width override for column 3.",
      control: { type: "number", min: 0, max: 12, step: 1 },
      table: { category: "Columns (global)" },
    },

    ...rowColumnArgTypes(1),
    ...rowColumnArgTypes(2),
    ...rowColumnArgTypes(3),
    ...rowColumnArgTypes(4),
    ...rowColumnArgTypes(5),
    ...rowColumnArgTypes(6),
    ...rowColumnArgTypes(7),
    ...rowColumnArgTypes(8),
    ...rowColumnArgTypes(9),
    ...rowColumnArgTypes(10),
  },
  args: {
    idField: "",
    bodyBackground: "",
    introShow: false,
    introHeading: "",
    introBody: "",
    introWidth: "col-lg-12",
    rowNum: 1,
    spaceRows: "qld__row-gap-text-element",
    colNum: 4,
    col1Width: 0,
    col2Width: 0,
    col3Width: 0,

    ...rowColumnArgs(1),
    ...rowColumnArgs(2),
    ...rowColumnArgs(3),
    ...rowColumnArgs(4),
    ...rowColumnArgs(5),
    ...rowColumnArgs(6),
    ...rowColumnArgs(7),
    ...rowColumnArgs(8),
    ...rowColumnArgs(9),
    ...rowColumnArgs(10),
  },
  decorators: [
    // Mimicking a content page layout
    (Story) => {
      const main = document.createElement("main");
      main.className = "main content";
      main.setAttribute("role", "main");
      main.innerHTML = Story();
      return main;
    },
  ],
  parameters: storyParams("multiColumns"),
};

export default meta;

export const Default = {};

export const TwoColumns = {
  args: { colNum: 2 },
};

export const ThreeColumns = {
  args: { colNum: 3 },
};

export const MissingColumnContent = {
  args: { col_1_2: "" },
};

// Column 1 explicitly takes 8/12 width, column 2 auto-fills to 4/12.
export const ManualWidthOverride = {
  args: {
    col1Width: 8,
    col_1_1:
      "Row 1, Column 1 content manually overridden to take 8/12 of the row width",
  },
};

export const TextSpacing = {
  args: { rowNum: 3, spaceRows: "qld__row-gap-text-element" },
};

export const ParagraphSpacing = {
  args: {
    rowNum: 3,
    spaceRows: "qld__row-gap-p",
  },
};

export const ComponentSpacing = {
  args: { rowNum: 3, spaceRows: "qld__row-gap-component" },
};

export const MaxRows = {
  args: { rowNum: 10 },
};

export const WithIntro = {
  args: {
    introShow: true,
    introHeading: "Section heading",
    introBody: dummyText,
  },
};

export const LightBackground = {
  args: { bodyBackground: "qld__body--light" },
};

export const AlternateBackground = {
  args: { bodyBackground: "qld__body--alt" },
};

export const DarkBackground = {
  args: { bodyBackground: "qld__body--dark" },
};

export const DarkAltBackground = {
  args: { bodyBackground: "qld__body--dark-alt" },
};

export const CustomId = {
  args: { idField: "123456" },
};
