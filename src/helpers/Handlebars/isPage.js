module.exports = function(pageType, options) {
    if (pageType == 'page_standard' || pageType == 'page_redirect') {
        return options.fn(this)
    } else {
        return options.inverse(this)
    }
}