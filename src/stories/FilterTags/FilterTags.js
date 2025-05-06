export const FilterTags = ({ filterByText, text }) => {
    return `
        <div class="qld__tag-list--wrapper">
            <span class="qld__tag-list--title">${filterByText}</span>
            <ul class="qld__tag-list">
                <li>
                    <div class="qld__tag qld__tag--filter" tabindex="-1">
                        ${text}<button class="qld__tag--filter-close" data-toggleUrl="{{toggleUrl}}">
                            <svg class="qld__icon qld__icon--sm" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><use href="/QLD-icons.svg#close"></use></svg>
                            <span class="sr-only">close</span>
                        </button>
                    </div>
                </li>
                <li>
                    <div class="qld__tag qld__tag--filter" tabindex="-1">
                        ${text}<button class="qld__tag--filter-close" data-toggleUrl="{{toggleUrl}}">
                            <svg class="qld__icon qld__icon--sm" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><use href="/QLD-icons.svg#close"></use></svg>
                            <span class="sr-only">close</span>
                        </button>
                    </div>
                </li>
                <li>
                    <div class="qld__tag qld__tag--filter" tabindex="-1">
                        ${text}<button class="qld__tag--filter-close" data-toggleUrl="{{toggleUrl}}">
                            <svg class="qld__icon qld__icon--sm" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><use href="/QLD-icons.svg#close"></use></svg>
                            <span class="sr-only">close</span>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    `;
};
