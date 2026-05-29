import Template from "../../components/abstract/html/component.hbs";
import {dummyText} from '../../../.storybook/globals'
import {expect} from "storybook/test";

function render({id, content}) {
    return Template({
        component: {
            data: {
                assetid: "123",
                metadata: {
                    id_field: {value: id},
                    content: {value: content},
                },
            },
        },
    })
}

const meta = {
    title: "3. Components/Abstract",
    render,
    argTypes: {
        id: {
            name: "id_field",
            description: "Optional anchor ID applied to the wrapping section. Falls back to abstract-{assetid} when empty.",
            control: {type: "text"},
        },
        content: {
            description: "Rich-text (WYSIWYG) content displayed inside the abstract.",
            control: {type: "text"},
        },
    },
    args: {
        id: "abstract-000",
        content: dummyText
    },
};
export default meta;

export const Default = {};

export const Empty = {
    args: {
        id: undefined,
        content: undefined
    },
    play: async ({canvasElement}) => {
        const section = canvasElement.querySelector(".qld__abstract--wrapper");
        await expect(section).toHaveAttribute("id", "abstract-123");
    },
}
