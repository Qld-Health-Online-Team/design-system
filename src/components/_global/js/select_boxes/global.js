(function () {
    "use strict";

    var selectBoxes = {};

    selectBoxes.init = function () {
        document.querySelectorAll("select").forEach((select) => {
            // First check that the select is not already wrapped
            if (select.closest(".qld__select")) {
                return;
            }

            // Create wrapper div
            const wrapper = document.createElement("div");
            wrapper.classList.add("qld__select");

            // Matrix specific - add error class to wrapper if the field has an error
            if (select.closest(".sq-form-question-error")) {
                wrapper.classList.add("qld__select-error");
            }

            // Insert wrapper BEFORE the select
            select.parentNode.insertBefore(wrapper, select);

            // Move the select into the wrapper
            wrapper.appendChild(select);
        });
    };

    // Make forms available to public
    QLD.selectBoxes = selectBoxes;

    document.addEventListener("DOMContentLoaded", function () {
        QLD.selectBoxes.init();
    });
})();
