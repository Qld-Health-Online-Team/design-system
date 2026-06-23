import Template from "../../../components/file_upload/html/component.hbs";
import { storyParams } from "../../../../.storybook/globals";
import { expect, waitFor } from "storybook/test";
import { initComponents } from "../../../../.storybook/decorators";
import { initFileUpload } from "../../../components/file_upload/js/global";

function buildMetadata({ inputName, fileTypes, maxSize, maxFiles }) {
  return {
    input_name: { value: inputName },
    file_types: { value: fileTypes },
    max_size: { value: String(maxSize) },
    max_selection: { value: String(maxFiles) },
    create_location: { value: "" },
  };
}

function render(args) {
  return Template({
    component: {
      data: {
        assetid: "file_upload-123",
        metadata: buildMetadata(args),
      },
    },
    // The template reads @root.site.metadata.coreSiteIcons for the icon sprite
    // path; `site` is provided globally by .storybook/preview.js args.
    site: args.site,
  });
}

/**
 * The init runs from a decorator deferred with setTimeout, so wait one tick
 * before interacting to be sure the input listeners are attached.
 */
const nextTick = () => new Promise((resolve) => setTimeout(resolve, 0));

/**
 * Select files on the input the way the browser does: set input.files from a
 * DataTransfer and fire a change event. userEvent.upload() can't be used here
 * because it redefines input.files as getter-only, which breaks the
 * component's own FileList updates.
 */
function selectFiles(input, files) {
  const dataTransfer = new DataTransfer();
  files.forEach((file) => dataTransfer.items.add(file));
  input.files = dataTransfer.files;
  input.dispatchEvent(new Event("change", { bubbles: true }));
}

const meta = {
  title: "3. Components/File Upload",
  render,
  decorators: [initComponents([initFileUpload])],
  parameters: {
    ...storyParams("forms"),
    layout: "padded",
  },
  argTypes: {
    inputName: {
      description: "Name of the file upload field, used for its label and id.",
      control: { type: "text" },
    },
    fileTypes: {
      description: "Comma-separated list of allowed file extensions.",
      control: { type: "text" },
    },
    maxSize: {
      description: "Maximum size per file, in MB.",
      control: { type: "number", min: 1 },
    },
    maxFiles: {
      description: "Maximum number of files that can be selected.",
      control: { type: "number", min: 1 },
    },
  },
  args: {
    inputName: "Resources",
    fileTypes: ".pdf,.doc,.docx,.png,.xlsx,.xlsm,.xls",
    maxSize: 10,
    maxFiles: 3,
  },
};

export default meta;

export const Default = {};

export const SingleFile = {
  args: { maxFiles: 1 },
};

export const WithSelectedFile = {
  play: async ({ canvasElement }) => {
    await nextTick();
    const input = canvasElement.querySelector("input[type=file]");
    const file = new File(["file contents"], "example.pdf", {
      type: "application/pdf",
    });

    selectFiles(input, [file]);

    // The file is accepted: a preview box is added and the input's FileList
    // holds the file. (The preview's inner markup, and with it the
    // "--complete" state, is disabled in the component pending its XSS TODO.)
    await waitFor(() => expect(input.files).toHaveLength(1));
    await expect(
      canvasElement.querySelector(".qld__form-file"),
    ).toBeInTheDocument();
    await expect(
      canvasElement.querySelector(".qld__form-file--error"),
    ).not.toBeInTheDocument();
  },
};

export const RejectsInvalidFileType = {
  play: async ({ canvasElement }) => {
    await nextTick();
    const input = canvasElement.querySelector("input[type=file]");
    const file = new File(["file contents"], "notes.txt", {
      type: "text/plain",
    });

    selectFiles(input, [file]);

    // The file is rejected: an error preview is shown and nothing is added to the input
    await waitFor(() =>
      expect(
        canvasElement.querySelector(".qld__form-file--error"),
      ).toBeInTheDocument(),
    );
    await expect(input.files).toHaveLength(0);
  },
};
