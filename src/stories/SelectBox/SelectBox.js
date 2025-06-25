export const SelectBox = ({ id, extraClass, isFilled, isRequired, isDisabled, isMultiple, label, hintText, state, succcessMessage, errorMessage, defaultOption, options }) => {
    let stateMessage = "";
    let stateClass = "";

    if (!defaultOption) {
        defaultOption = {
            value: "",
            label: "--Select an option--",
        };
    }

    const optionsMapped = [defaultOption, ...options]
        ?.map((option) => {
            return `<option value="${option.value}">${option.label}</option>`;
        })
        .join("");

    switch (state) {
        case "success":
            stateClass = "qld__text-input--valid";
            stateMessage = `
                <span id="${id}-state-message" class="qld__input--success">
                    <svg class="qld__icon qld__icon--lead qld__icon--sm" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                        <use href="/QLD-icons.svg#status-success"></use>
                    </svg>
                    <span>${succcessMessage}</span>
                </span>`;
            break;
        case "error":
            stateClass = "qld__text-input--error";
            stateMessage = `
                <span id="${id}-state-message" class="qld__input--error">
                    <svg class="qld__icon qld__icon--lead qld__icon--sm" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                        <use href="/QLD-icons.svg#status-error"></use>
                    </svg>
                    <span>${errorMessage}</span>
                </span>`;
            break;
        default:
            stateMessage = "";
    }

    return `
        <fieldset ${isFilled ? "class='qld__form-style-filled'" : ""}>
            <label for="${id}">${isRequired ? "<abbr title=required>*</abbr>" : ""}${label}</label>
            ${hintText ? `<span id="${id}-hint" class="qld__hint-text">${hintText}</span>` : ""}
            ${stateMessage}
            <select id="${id}" class="qld__select-control ${extraClass} ${stateClass}" ${isDisabled ? "disabled" : ""} name="${id}" aria-describedby="${id}-hint ${id}-state-message" ${isMultiple ? "multiple" : ""}>
                ${optionsMapped}
            </select>
        </fieldset>
    `;
};
