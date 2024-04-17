(function () {
    'use strict';

    /**
     * @module fileUploads
     */
    let datePickers = {};

    /**
     * Initialise any date picker components on the page
     * 
     * @memberof module:datePickers
     */
    datePickers.init = () => {
        let $dateInputs = document.querySelectorAll('div.flatpickr > input[type=text].qld__text-input');

        // Loop through each date field and initialize flatpickr 
        $dateInputs.forEach($input => {
            // Empty object to store the flatpickr settings
            let flatpickrSettings = {};
            // Data attributes
            const dataAttributes = $input.dataset;
            
            // Loop through each data attribute of the element
            for (let key in dataAttributes) {
                // Add the data attribute key and value to the object
                flatpickrSettings[key] = dataAttributes[key];
            }

            // Initialise flatpickr for the input
            initDatePicker($input, flatpickrSettings);
        });
    }


    const initDatePicker = ($input, settings) => {
        const wrapper = $input.parentElement;
        const toggleBtn = wrapper.querySelector('.calendar-toggle');
        // Default settings, all options here: https://flatpickr.js.org/options/
        const defaultSettings = {
            // Prevents the date picker from opening when the text input is clicked
            clickOpens: false,
            // Allow a user to manually enter a date into the text input
            allowInput: true, 
            locale: {
                firstDayOfWeek: 1
            },
            // Wraps the elements inside the element with the .flatpickr class
            wrap: true
        }
        // Merge the settings from the text input data attributes with the defaultSettings object
        const allSettings = { ...settings, ...defaultSettings };

        // Initialise flatpickr 
        const fp = flatpickr(wrapper, allSettings);
        
        // Calendar toggle button
        $(toggleBtn).on("click", (e)=>{
            fp.toggle();
        })
    }

    // Store fileUploads object globally
    QLD.datePickers = datePickers;

    document.addEventListener('DOMContentLoaded', function () {
        QLD.datePickers.init();
    });

}());

// Existing 'multiple' functionality
// onChange(selectedDates, dateStr, instance) {
//     selectedDates.sort(function(a,b){
//         return a - b;
//     });
//     let sortedString = ''
//     selectedDates.forEach((date, index) => {
//         sortedString += `<span>${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}<button class="remove-date" data-date="${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}" type="button" title="Remove date"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg></button></span>` 
//     });

//     $(instance.input.nextElementSibling).html(sortedString)

//     $(".date-list .remove-date").on("click",function(){
//         var flatpickr = $(this).closest('.flatpickr').find('input[type=text]').flatpickr(flatpickrMultiple);
//         var selectedDates = flatpickr.selectedDates
//         var date = new Date($(this).data('date')).setHours(0, 0, 0)
//         for(var i = 0; i < selectedDates.length; i++) {
//             if (selectedDates[i] - date == 0) { 
//                 selectedDates.splice(i, 1); 
//             }
//         }
//         flatpickr.setDate(selectedDates, true, "Y-m-d")
//     });
// },
// onReady(selectedDates, dateStr, instance) {
//     selectedDates.sort(function(a,b){
//         return a - b;
//     });
//     var sortedString = ''
//     selectedDates.forEach((date, index) => {
//         sortedString += `<span>${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}<button class="remove-date" data-date="${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}" type="button" title="Remove date"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg></button></span>`
//     });
//     $(instance.input.nextElementSibling).html(sortedString)
//     $(".date-list .remove-date").on("click",function(){
//         var flatpickr = $(this).closest('.flatpickr').find('input[type=text]').flatpickr(flatpickrMultiple);
//         var selectedDates = flatpickr.selectedDates
//         var date = new Date($(this).data('date')).setHours(0, 0, 0)
//         for(var i = 0; i < selectedDates.length; i++) {
//             if (selectedDates[i] - date == 0) { 
//                 selectedDates.splice(i, 1); 
//             }
//         }
//         flatpickr.setDate(selectedDates, true, "Y-m-d");
//     });
// }