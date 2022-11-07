module.exports = function(items, url, options) {
    var html = '<li class="qhealth__services_a-z__list__item">';
    var services = [];
    var letters = [];

    for(var i = 0; i < items.length; i++) {
        var service = items[i].name;
        var serviceUrl = items[i].web_path;
        if(service == ""){
            continue;
        }

        var firstLetter = service.substring(0,1);
        var arrayWithFirstLetter = services[firstLetter];

        if(arrayWithFirstLetter == null){
            services[firstLetter] = [];
            letters.push(firstLetter);
        }

        services[firstLetter].push({"web_path" : serviceUrl, "name" : service});
    }

    services = services.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    })

    letters = letters.sort(function(a, b){
        if(a < b) { return -1; }
        if(a > b) { return 1; }
        return 0;
    })

    url = url ? url : '';

    for(var i = 0; i < letters.length; i++) {
        html += '<h3 class="qhealth__services_a-z__list__item__header"><span id="'+letters[i]+'">'+letters[i]+'</span></h3>';
        html += '<ul class="row qhealth__services_a-z__list__item__services">';
        for(var k = 0; k < services[letters[i]].length; k++) {
            html += '<li class="col-lg-4 col-md-6 col-xs-12 qhealth__services_a-z__list__item__services__item"><a class="qhealth__services_a-z__list__item__services__item__link" href="'+url+'/'+services[letters[i]][k].web_path+'"><span>'+services[letters[i]][k].name+'</span><i class="fas fa-arrow-right"></i></a></li>';
        }
        html += '</ul>';
    }


    html += '</li>';

    return html;
};