export const Tags = ({ type, leadingText, text, isLargeTag, action }) => {
    const tagListWrapperStart = `<div class="qld__tag-list--wrapper"><span class="qld__tag-list--title">${leadingText}</span><ul class="qld__tag-list">`;
    const tagListWrapperEnd = `</ul></div>`;
    let tagListContent = "";

    switch (type) {
        case "action":
            tagListContent = `
                <li><a class="qld__tag ${isLargeTag ? "qld__tag--large" : ""} qld__tag--link" href="${action}">${text}</a></li>
                <li><a class="qld__tag ${isLargeTag ? "qld__tag--large" : ""} qld__tag--link" href="${action}">${text}</a></li>
                <li><a class="qld__tag ${isLargeTag ? "qld__tag--large" : ""} qld__tag--link" href="${action}">${text}</a></li>
            `;
            break;
        case "info":
            tagListContent = `
                <li class="qld__tag ${isLargeTag ? "qld__tag--large" : ""} qld__tag--info">${text}</li>
                <li class="qld__tag ${isLargeTag ? "qld__tag--large" : ""} qld__tag--info">${text}</li>
                <li class="qld__tag ${isLargeTag ? "qld__tag--large" : ""} qld__tag--info">${text}</li>
            `;
            break;
        case "filter":
            tagListContent = `
                <li>
                    <div class="qld__tag qld__tag--filter" tabindex="-1">
                        ${text}
                        <button class="qld__tag--filter-close" data-toggleUrl="{{toggleUrl}}">
                            <svg class="qld__icon qld__icon--sm" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><use href="/QLD-icons.svg#close"></use></svg>
                            <span class="sr-only">close</span>
                        </button>
                    </div>
                </li>
                <li>
                    <div class="qld__tag qld__tag--filter" tabindex="-1">
                        ${text}
                        <button class="qld__tag--filter-close" data-toggleUrl="{{toggleUrl}}">
                            <svg class="qld__icon qld__icon--sm" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><use href="/QLD-icons.svg#close"></use></svg>
                            <span class="sr-only">close</span>
                        </button>
                    </div>
                </li>
                <li>
                    <div class="qld__tag qld__tag--filter" tabindex="-1">
                        ${text}
                        <button class="qld__tag--filter-close" data-toggleUrl="{{toggleUrl}}">
                            <svg class="qld__icon qld__icon--sm" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><use href="/QLD-icons.svg#close"></use></svg>
                            <span class="sr-only">close</span>
                        </button>
                    </div>
                </li>
            `;
            break;
        case "default":
        default:
            tagListContent = `
                <li class="qld__tag ${isLargeTag ? "qld__tag--large" : ""}">${text}</li>
                <li class="qld__tag ${isLargeTag ? "qld__tag--large" : ""}">${text}</li>
                <li class="qld__tag ${isLargeTag ? "qld__tag--large" : ""}">${text}</li>
            `;
            break;
    }

    return tagListWrapperStart + tagListContent + tagListWrapperEnd;
};
