module.exports = function(items, options) {
    var html = '';
    var services = [];
    var letters = [];
    for(var i = 0; i < items.length; i++) {
        var service = items[i].name;

        if(service == ""){
            continue;
        }

        var firstLetter = service.substring(0,1);
        var arrayWithFirstLetter = services[firstLetter];

        if(arrayWithFirstLetter == null){
            services[firstLetter] = [];
            letters.push(firstLetter);
        }
    }

    letters = letters.sort(function(a, b){
        if(a < b) { return -1; }
        if(a > b) { return 1; }
        return 0;
    })

    for(var i = 0; i < letters.length; i++) {

        html += '<li class="qld__a-z_listing__options__item"><a class="qld__a-z_listing__options__item__link" href="#' + letters[i] + '">' + letters[i] + '</a></li>';

    }

    return html;
};