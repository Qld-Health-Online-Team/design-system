(function() {
    
    var previewDelay = previewDelay ? previewDelay : 50;

    // Component Page Handlers
    window.addEventListener('DOMContentLoaded', function () {

        /**
         * Local module for Handlebars live updates
         * 
         * @module componentPreview
         */
        var componentPreview = {

            /**
             * Initialise the componentPreview module (including event listeners)
             * 
             * @memberof module:componentPreview
             */
            'init': function() {

                //Remove Base64 Headers
                var componentClean = window.atob(component.replace('export default "data:text/x-handlebars-template;charset=utf-8;base64,','').replace('"',''));
                
                //Remove ./?a
                componentPreview.componentClean = componentClean.replace(/\.\/\?a=/g,'');

                //Event Listeners
                document.querySelectorAll(".qld__model_field").forEach(function(e) {
                    
                    e.addEventListener('change',function() {
                        componentPreview.updateHB(e.name,e.value)
                    },false);
                    
                    e.addEventListener('keyup',function() {
                        componentPreview.updateHB(e.name,e.value)
                    },false);
                });
            },

            /**
             * Re-render the Handlebars template with new data
             * 
             * @memberof module:componentPreview
             */
            'updateHB': QLD.utils.debounce(function(prop,value) {
                if(typeof componentModel.component.data.metadata[prop].value != 'undefined') {
                    
                    // Update value
                    componentModel.component.data.metadata[prop].value = value;
                    
                    // Compile the template
                    var compiled = Handlebars.compile(componentPreview.componentClean);
                    var output = compiled({
                        "component": componentModel.component,
                        "current": current,
                        "site": site,
                        "content":"Lorem Ipsum"
                    }).replace(/\.\/\?a=/g, '');
                    
                    // Set the main component preview
                    document.querySelector("#cp-tab--body.component_output").innerHTML = output

                    // Set the Raw HTML component output
                    document.querySelector(".qld__example__html .component_output").innerText = output;

                    // Run callback
                    if (renderCallback.length > 0) {
                        componentPreview.executeFunctionByName(renderCallback, window);
                    }

                    QLD.code.init();
                }
            }, previewDelay),

            /**
             * Execute a nested namespace function given the name as a string
             * 
             * @memberof module:componentPreview
             * 
             * @param {string} functionName 
             * @param {object} context 
             */
            'executeFunctionByName': function(functionName, context /*, args */) {
                var args = Array.prototype.slice.call(arguments, 2);
                var namespaces = functionName.split(".");
                var func = namespaces.pop();
                for(var i = 0; i < namespaces.length; i++) {
                    context = context[namespaces[i]];
                }
                context[func].apply(context, args);
            }
        };

        if (typeof(component) !== 'undefined') {
            componentPreview.init();
        }
        
    });

}());