import { storyParams } from "../../../.storybook/globals";

const indent = (str, n) => str.replace(/^/gm, " ".repeat(n));

const Feat = {
    contained: "Contained",
    scrollable: "Scrollable",
    customWidths: "Custom Widths",
    striped: "Striped",
    multilevelHeadings: "Multilevel Headings",
};

function render({ features = [], numRows }) {
    const isContained = features.includes(Feat.contained);
    const isScrollable = features.includes(Feat.scrollable);
    const hasCustomWidths = features.includes(Feat.customWidths);
    const isStriped = features.includes(Feat.striped);
    const hasMultilevelHeadings = features.includes(Feat.multilevelHeadings);

    const headings = hasMultilevelHeadings
        ? `<tr>
  <th rowspan="2" scope="col">Header</th>
  <th colspan="2" class="qld__table__cell-left-border qld__table__cell--middle">Header</th>
</tr>
<tr>
  <th scope="col" class="qld__table__cell-left-border ${hasCustomWidths ? "qld__table__header--width-10" : ""}">Header</th>
  <th scope="col" class="qld__table__cell-left-border">Header</th>
</tr>`
        : `<tr>
  <th scope="col">Header</th>
  <th scope="col" class="${hasCustomWidths ? "qld__table__header--width-10" : ""}">Header</th>
  <th scope="col">Header</th>
</tr>`;

    const rows = Array.from({ length: numRows })
        .map(
            () => `<tr>
  <td>Cell</td>
  <td>Cell</td>
  <td>Cell</td>
</tr>`,
        )
        .join("\n");

    const tableClasses = ["qld__table", "qld__align-middle", isStriped && "qld__table--striped", hasMultilevelHeadings && "qld__table__col-2-left-border qld__table__col-3-left-border"].filter(Boolean).join(" ");

    const table = `<table class="${tableClasses}">
  <caption>Table caption
    <span class="qld__caption">Table is ordered by</span>
  </caption>
  <thead>
${indent(headings, 4)}
  </thead>
  <tbody>
${indent(rows, 4)}
  </tbody>
  <tfoot>
    <tr>
      <td>Footer</td>
      <td>Footer</td>
      <td>Footer</td>
    </tr>
  </tfoot>
</table>`;

    if (isContained || isScrollable) {
        const wrapperClasses = ["qld__table__wrapper", isContained && "qld__table--contained", isScrollable && "qld__table--scroll"].filter(Boolean).join(" ");

        return `<div class="${wrapperClasses}">
${indent(table, 2)}
</div>`;
    }
    return table;
}

const meta = {
    title: "3. Components/Table",
    render,
    argTypes: {
        numRows: {
            control: {
                type: "number",
                min: 0,
                max: 50,
            },
        },
        features: {
            description: "Toggle styling features to apply to the table.",
            options: Object.values(Feat),
            control: {
                type: "check",
            },
        },
    },
    args: {
        numRows: 5,
    },
    parameters: storyParams("table"),
};
export default meta;

export const Borderless = {};

export const Contained = { args: { features: [Feat.contained] } };

export const VerticalScrolling = { args: { numRows: 20, features: [Feat.scrollable] } };

export const CustomWidths = { args: { features: [Feat.customWidths] } };

export const Striped = { args: { features: [Feat.striped] } };

export const MultilevelHeadings = { args: { features: [Feat.multilevelHeadings] } };
