export const Checkboxes = ({ id, legend, isRequired, inError, errorMessage, inSuccess, successMessage, inputs, isSmall }) => {
    const getInputClasses = (input) => {
        if (input.inError) return "qld__input--error";
        else if (input.inSuccess) return "qld__input--valid";
        else return "";
    };

    const getFeedbackMessage = () => {
        if (inError) {
            return `
                <span id="qld__checkboxes-status-${id}" class="qld__input--error" role="status" aria-live="polite">
                    <svg class="qld__icon qld__icon--lead qld__icon--sm" aria-hidden="true"><title>Error icon</title><desc>Indicates an error</desc><use href="QLD-icons.svg#status-error"></use></svg>${errorMessage}
                </span>
            `;
        } else if (inSuccess) {
            return `
                <span id="qld__checkboxes-status-${id}" class="qld__input--success" role="status" aria-live="polite">
                    <svg class="qld__icon qld__icon--lead qld__icon--sm" aria-hidden="true"><title>Success icon</title><desc>Indicates a correct answer</desc><use href="QLD-icons.svg#status-success"></svg>${successMessage}
                </span>
            `;
        } else return "";
    };

    const inputsMapped = inputs
        ?.map((input) => {
            return `<div class="qld__control-input ${isSmall ? "qld__control-input--small" : ""}"><input type="checkbox" id="qld__checkbox-${input.id}" ${
                getInputClasses(input) ? `class="${getInputClasses(input)}"` : ""
            } name="qld__checkbox-${id}" ${input.checked ? "checked" : ""} ${input.disabled ? "disabled" : ""}><label for="qld__checkbox-${input.id}">${input.label}</label></div>`;
        })
        .join("");

    return `
        <fieldset class="qld__checkboxes" role="group" aria-labelledby="qld__checkboxes-legend-${id}" ${getFeedbackMessage() ? `aria-describedby="qld__checkboxes-status-${id}"` : ""}>
            <legend id="qld__checkboxes-legend-${id}">${isRequired ? "<abbr title='required'>*</abbr>" : ""}${legend}</legend>${getFeedbackMessage()}${inputsMapped}
        </fieldset>
    `;
};
