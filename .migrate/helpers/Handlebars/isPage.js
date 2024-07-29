module.exports = function(pageType, options) {
    if (pageType == 'page_standard' || pageType == 'page_redirect' || pageType == 'page_custom_form'|| pageType == 'page_decision_tree') {
        return options.fn(this)
    } else {
        return options.inverse(this)
    }
}