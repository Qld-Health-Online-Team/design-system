import Template from "./html/component.hbs";
import {dummyText} from '../../../.storybook/globals'

function render({id, bodyWidth, background}) {
    return Template({
        component: {
            data: {
                assetid: "123",
                metadata: {
                    background: {value: background},
                    body_width: {value: bodyWidth},
                    id_field: {value: id},
                },
            },
        },
        content: dummyText,
    })
}

const meta = {
    title: "3. Components/Body",
    render,
    argTypes: {
        id: {
            name: "id_field",
            description: "Optional anchor ID applied to the wrapping section. Falls back to body-{assetid} when empty.",
            control: {type: "text"},
        },
        bodyWidth: {
            name: "body_width",
            description: "Width of the body content area.",
            options: ["qld__body--half-width", "qld__body--full-width"],
            control: {
                type: "select",
                labels: {
                    "qld__body--half-width": "Half-width",
                    "qld__body--full-width": "Full-width",
                },
            },
            table: {defaultValue: {summary: "Full-width"}},
        },
        background: {
            name: "background",
            description: "Background theme applied to the body section.",
            options: ["", "qld__body--light", "qld__body--dark", "qld__body--alt", "qld__body--dark-alt"],
            control: {
                type: "select",
                labels: {
                    "": "White",
                    "qld__body--light": "Light",
                    "qld__body--dark": "Dark",
                    "qld__body--alt": "Alternate",
                    "qld__body--dark-alt": "Dark Alternate",
                },
            },
            table: {defaultValue: {summary: "White"}},
        },
    },
    args: {
        id: "",
        bodyWidth: "qld__body--full-width",
        background: "",
    },
};
export default meta;

export const Default = {};

export const White = {args: {background: ""}};

export const Light = {args: {background: "qld__body--light"}};

export const Dark = {args: {background: "qld__body--dark"}};

export const Alternate = {args: {background: "qld__body--alt"}};

export const DarkAlternate = {args: {background: "qld__body--dark-alt"}};
