(function () {
    /**
     * @module code
     */
    var code = {};

    code.init = function() {
        const codes = document.querySelectorAll('code')
        const inlinecodes = document.querySelectorAll('code:not(.qld__code-body)')
        const copyButtons = document.querySelectorAll('.qld__code-copy--button')
        const showToggle = document.querySelectorAll('.qld__code-toggle-button')
        const colorButtons = document.querySelectorAll('.qld__code-preview-colours input[type=radio]')
        const icon = document.querySelector('.qld__code-header .fa-arrow-up-right-from-square')

        if (icon) {
            icon.removeAttribute('aria-hidden');
          }
          
        if (codes.length) {
            codes.forEach(function(code) {
                code.innerHTML = Prism.highlight(code.innerText, Prism.languages.html, 'html')
            })
        }

        if (inlinecodes.length) {
            inlinecodes.forEach(function(inlinecode){
                const codeWrap = document.createElement("div");
                codeWrap.classList.add('qld__code--inline');

                inlinecode.replaceWith(codeWrap);
                codeWrap.appendChild(inlinecode);

                const tooltip = document.createElement("span");
                const tooltipText = document.createTextNode("Copy");
                tooltip.appendChild(tooltipText);
                tooltip.classList.add('qld__code-tooltip');
                inlinecode.after(tooltip);
                inlinecode.setAttribute('tabindex', 0);

                inlinecode.addEventListener('click', function () {
                    copyButtonAction(this);
                })

                inlinecode.addEventListener("keypress", function(event) {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        copyButtonAction(this);
                    }
                });
            })
        }
        
        if (copyButtons.length) {
            copyButtons.forEach(function(copyButton){
                copyButton.addEventListener('click', function () {
                    copyButtonAction(this);
                })
            })
        }

        if (showToggle.length) {
            showToggle.forEach(function(showToggleButton){
                const parent = showToggleButton.closest('.qld__code');
                const target = parent.querySelector('code')
                target.style.height = '120px'

                showToggleButton.addEventListener('click', function () {
                    if (this.innerText.indexOf('more') > -1) {
                        this.innerHTML = 'Show less<i class="fa-regular fa-chevron-up"></i>'
                    } else {
                        this.innerHTML = 'Show more<i class="fa-regular fa-chevron-up"></i>'
                    }

                    QLD.animate.Toggle({
                        element: target,
                        property: 'height',
                        speed: 250,
                        closeSize: 120,
                        prefunction: function () {
                            parent.classList.toggle('show_less')
                        }
                    })
                })
            })
        }

        if (colorButtons.length) {
            colorButtons.forEach(function(colorButton){
                colorButton.addEventListener('change', function () {
                    const body = colorButton.closest('.qld__code').querySelector('.qld__code-preview-body')
                    body.classList.remove('qld__body--light','qld__body--alt','qld__body--dark','qld__body--dark-alt')
                    if (this.value){
                        body.classList.add(this.value)
                    }
                    const toggle = colorButton.closest('.qld__code').querySelector('.qld__code-toggle')
                    if (typeof(toggle)!=='undefined'){
                        toggle.classList.remove('qld__body--light','qld__body--alt','qld__body--dark','qld__body--dark-alt')
                        if (this.value){
                            toggle.classList.add(this.value)
                        }
                    }
                })
            })
        }
    }

    function copyButtonAction(button) {
        if (button.classList.contains('qld__code-copy--button')){
            const parent = button.closest('.qld__code');
            copyTextToClipboard(parent.querySelector('code').innerText)
            button.classList.add('copied');

            setTimeout(() => {
                button.classList.remove('copied')
            }, "1500")
        } else {
            copyTextToClipboard(button.innerText);
            button.nextElementSibling.innerText = "Copied"
            button.addEventListener('blur', function() {
                button.nextElementSibling.innerText = "Copy"
            });
        }
    }

    function fallbackCopyTextToClipboard(text) {
        const textArea = document.createElement("textarea")
        textArea.value = text;
        
        // Avoid scrolling to bottom
        textArea.style.top = "0"
        textArea.style.left = "0"
        textArea.style.position = "fixed"
      
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
      
        try {
            const successful = document.execCommand('copy')
            const msg = successful ? 'successful' : 'unsuccessful';
            console.log('Fallback: Copying text command was ' + msg)
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err)
        }
      
        document.body.removeChild(textArea)
    }

    function copyTextToClipboard(text) {
        if (!navigator.clipboard) {
            fallbackCopyTextToClipboard(text)
            return;
        }
        navigator.clipboard.writeText(text).then(function() {
            console.log('Async: Copying to clipboard was successful!')
        }, function(err) {
            console.error('Async: Could not copy text: ', err)
        });
    }

    QLD.code = code;

    // Init In Page Nav on document load
    document.addEventListener('DOMContentLoaded', QLD.code.init)
}());