(function(){
    'use strict';

    var forms = {};

    forms.init = function() {
        $.validator.addMethod("nospaces", function(value, element) {
            return this.optional(element) || (value.indexOf(' ') === -1);
        });

        $.validator.addMethod("postcode", function(value, element) {
            return this.optional(element) || (!isNaN(value) && value.length === 4);
        });

        $('.qld__form--validate').each(function() {
            var $form = $(this);

            // Validate form
            $form.validate({

                // Error properties
                errorElement: 'p',
                errorClass: 'qld__input--error',
                errorAttribute: 'tabindex=”0″',

                // Place error appropriately in DOM
                errorPlacement: function(error, element) {
                    if (element.closest(".sq-form-question-answer").length > 0) {
                        var errorPlacement = element.closest(".sq-form-question-answer").parent();
                        var errorID = '#' + error[0].id.replace( /(:|\.|\[|\]|,|=|@)/g, "\\$1" );
                        error.attr('tabindex','0');
                        if(errorPlacement.find(errorID).length === 0){
                            if (element.closest(".qld__form-file-wrapper").length > 0) {
                                element.closest(".qld__form-file-wrapper").before(error);
                            } else {
                                error.prependTo(errorPlacement);
                            }
                        }
                        error.focus();
                        
                    } else if (element.closest(".qld__form-group").length > 0) {
                        error.attr('tabindex','0');
                        error.prependTo(element.closest(".qld__form-group"));
                        error.focus();
                    }
                },

                // Set valid class
                validClass: 'qld__input--valid',

                // Check validation on focus out
                onfocusout: function(element) {
                    $(element).valid();
                },

                // Check validation on click
                onclick: function(element) {
                    if ( element.type === "radio" || element.type === "checkbox") {
                        $(element).valid();
                    }
                },

                // Highlight invalid
                highlight: function( element, errorClass, validClass ) {
                    if ( element.type === "radio" || element.type === "checkbox") {
                        this.findByName( element.name ).addClass( errorClass ).removeClass( validClass );
                    } else if ( element.type === "file" && element.classList.contains("qld__file-input") ) {
                        $( element ).closest(".qld__form-file-dropzone").addClass( errorClass ).removeClass( validClass );
                    }  else {
                        $( element ).addClass( errorClass ).removeClass( validClass );
                    }
                },

                // Highlight valid
                unhighlight: function( element, errorClass, validClass ) {
                    if ( element.type === "radio" || element.type === "checkbox") {
                        if(this.findByName(element.name).is(":checked") || this.findByName(element.name).is(":selected")){
                            this.findByName( element.name ).removeClass( errorClass ).addClass( validClass );
                        }  
                    } else if (element.type === "file" && element.classList.contains("qld__file-input")) {
                        $( element ).closest(".qld__form-file-dropzone").removeClass( errorClass ).addClass( validClass );
                    } else {
                        if ($( element ).val().length > 0){
                            $( element ).removeClass( errorClass ).addClass( validClass );
                        }
                    }
                }
            });

            // Add custom rules if they exist
            if (typeof(addCustomRules) !== 'undefined') {
                addCustomRules();
            }

            // Add required labels to fields
            updateRequiredLabels($form);
            $form.on('change', function() {
                updateRequiredLabels($(this));
            });
            // Add aria tag to helper text
            updateHelperText($form);

            //Add data auto complete to date field ---Matrix bug fix---
            dobFieldAutocomplete($form);

            linkHintText($form);

            // Validate select fields when option is selected
            $form.find('select').on('change', function() {
                console.log('select change');
                $(this).valid();
            });
        });

        $('[data-displayif-show]').each(function() {
            displayCheck($(this));
        });
    }

    // Make forms available to public
    QLD.forms = forms;
    
    document.addEventListener("DOMContentLoaded", function(event) { 
        QLD.forms.init();
    });

    function updateRequiredLabels($form) {
        var $requiredFields = $form.find('[required]');
            
        $requiredFields.each(function() {
            var $field = $(this);
            var $question = $field.closest('.sq-form-question');
            
            if ($question.length > 0) {
                var $requiredLabel = $question.find('.sq-form-required-field');
                
                if ($requiredLabel.length === 0) {
                    var $title = $question.find('.sq-form-question-title');
                    $title.append(' <abbr class="sq-form-required-field" title="required">*</abbr>');
                }
            }
            
        });
    };
    function updateHelperText($form) {
        var $allFields = $form.find('input:not([type=hidden])');

        $allFields.each(function() {
            var currentField = $(this);
            var currentID = $(this).attr('id');

            if(currentField.parents('.sq-form-question-answer').siblings('.sq-form-question-note').length){
                currentField.attr('aria-describedby', currentID + '_description');
                currentField.parents('.sq-form-question-answer').siblings('.sq-form-question-note').attr('id', currentID + '_description');

            }
        });
    };

    function dobFieldAutocomplete($form) {
        var $dateFieldWrapper = $form.find('.sq-form-question-datetime');

        if($dateFieldWrapper.length){
            var $dateFieldWrapperId = $form.find('.sq-form-question-datetime').attr('id');
            var $dateFieldLegend = $dateFieldWrapper.find('legend');
            var $dateFieldLegendId = $dateFieldWrapperId.replace( /(wrapper)/g, "legend" );
            var $dateField = $dateFieldWrapper.find('input:not([type=hidden])');
            
            var $dateHelperTextId = $dateFieldWrapper.find('em.sq-form-question-note').attr('id');

            $dateFieldLegend.attr('id', $dateFieldLegendId);
            $dateFieldLegend.attr('aria-labeledby', $dateFieldLegendId + " " + $dateHelperTextId);

            if($dateFieldWrapper.find('.sq-form-question-title').text().toLowerCase().indexOf("birth") >= 0){
                $dateField.each(function() {
                    var currentField = $(this);
                    var currentID = $(this).attr('id');
                    if(currentID.toLowerCase().indexOf("value_d") >= 0){
                        currentField.attr('autocomplete', 'bday-day');
                    }else if(currentID.toLowerCase().indexOf("value_m") >= 0){
                        currentField.attr('autocomplete', 'bday-month');
                    }else if(currentID.toLowerCase().indexOf("value_y") >= 0){
                        currentField.attr('autocomplete', 'bday-year');
                    }

                });
            }
        }
    };

    function displayCheck(field) {
        var show_hide = field[0].dataset.displayifShow;
        var logic_operator = field[0].dataset.displayifOperator;
        var rules = field[0].dataset.displayifRule.replaceAll('}{','},{');
        rules = JSON.parse(rules);
        var rulesPassed = 0;
        var ruleCount = rules.length;

        for (var j = 0; j < ruleCount; j++) {
            var rule = rules[j];
            var fieldName = rule.field;
            var operator = rule.operator;
            var ruleValue = rule.value;
            
            var dependantOnField = $('#' + fieldName);
            var fieldValue = dependantOnField.val();

            if (fieldName.indexOf(':') !== -1) {
                dependantOnField = $(`[name="${fieldName}"]`);
                fieldValue = $(`[name="${fieldName}"]:checked`).val();
            }

            dependantOnField.on('change', function() {
                displayCheck(field);
            });
            
            if(dependantOnField.is(`input[type="checkbox"]`)) {
                if(!dependantOnField.is(':checked')) {
                    fieldValue = ""; 
                }
            }
            
            
            if (operator == "equals") {
                if (fieldValue == ruleValue) {
                    rulesPassed++;
                }

            } else if(operator == "less_than") {
                
                var dependantNumber = Number(fieldValue);
                var valueNumber = Number(ruleValue);
                if (!Number.isNaN(dependantNumber) && !Number.isNaN(valueNumber) ){
                    if (dependantNumber < valueNumber) {
                        rulesPassed++;
                    }
                }
                
            } else if (operator == "greater_than"){
                
                var dependantNumber = Number(fieldValue);
                var valueNumber = Number(ruleValue);
                if (!Number.isNaN(dependantNumber) && !Number.isNaN(valueNumber) ){
                    if (dependantNumber > valueNumber) {
                        rulesPassed++;
                    }
                }
                
            } else if (operator == "contains"){
                if (fieldValue.indexOf(ruleValue) !== -1) {
                    rulesPassed++;
                }
            
            }
        }

        // For 'AND', check that all rules have passed
        if (logic_operator === 'AND') {
            if (rulesPassed === ruleCount) {
                showHideField($(field).closest('.sq-form-question'), show_hide);
            } else {
                showHideField($(field).closest('.sq-form-question'), !show_hide);
            }
            
        // For 'OR', check that at least 1 rule has passed
        } else if (logic_operator === 'OR') {
            if (rulesPassed > 0) {
                showHideField($(field).closest('.sq-form-question'), show_hide);
            } else {
                showHideField($(field).closest('.sq-form-question'), !show_hide);
            }
        }
    }

    function showHideField(field, show_hide) {
        if (show_hide) {
            $(field).removeClass('hidden');
        } else {
            $(field).addClass('hidden');
        }
    }

    function linkHintText($form) {
        var $allFields = $form.find('.sq-form-question-answer');
    
        $allFields.each(function() {
            var $field = $(this);
    
            // Get the direct child input/textarea/select element
            var $inputElement = $field.find('input, textarea, select').first();
    
            if ($inputElement.length) {
                // Get the ID of the input element
                var inputId = $inputElement.attr('id');
    
                if (inputId) {
                    // Find the sibling <em> element in the parent .sq-form-question
                    var $hintElement = $field.closest('.sq-form-question').find('em').first();
    
                    if ($hintElement.length) {
                        // Create a unique ID for the <em> element
                        var hintId = inputId + '_hint';
    
                        // Apply the unique ID to the <em> element
                        $hintElement.attr('id', hintId);
    
                        // Add the 'aria-describedby' attribute to the input element
                        $inputElement.attr('aria-describedby', hintId);
                    }
                }
            }
        });
    }
}());
