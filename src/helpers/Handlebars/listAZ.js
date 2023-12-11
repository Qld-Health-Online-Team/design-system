module.exports = function(items, url, options) {
    var html = '<li class="qld__a-z_listing__options__item">';
    var services = [];
    var letters = [];

    for(var i = 0; i < items.length; i++) {
        var service = items[i].name;
        var serviceID = items[i].assetid;
        if(service == ""){
            continue;
        }

        var firstLetter = service.substring(0,1);
        var arrayWithFirstLetter = services[firstLetter];

        if(arrayWithFirstLetter == null){
            services[firstLetter] = [];
            letters.push(firstLetter);
        }

        services[firstLetter].push({"id" : serviceID, "name" : service});
    }

    services = services.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    })

    console.log(services);

    letters = letters.sort(function(a, b){
        if(a < b) { return -1; }
        if(a > b) { return 1; }
        return 0;
    })

    url = url ? url : '';

    for(var i = 0; i < letters.length; i++) {
        services[letters[i]] = services[letters[i]].sort(function(a, b){

            //sorting the letters disregarding the case.
            let lowerCaseA = a.name.toLowerCase();
            let lowerCaseB = b.name.toLowerCase();
            
            if(lowerCaseA < lowerCaseB) { return -1; }
            if(lowerCaseA > lowerCaseB) { return 1; }

            return 0;
        })
        html += `<h3 class="qld__a-z_listing__list__item__header"><span id="${letters[i]}">${letters[i]}</span></h3>`;
        html += '<ul class="qld__a-z_listing__list__item__services">';
        for(var k = 0; k < services[letters[i]].length; k++) {
            html += `<li class="qld__a-z_listing__list__item__services__item">
                        <a class="qld__a-z_listing__list__item__services__item__link" href="./?a=${services[letters[i]][k].id}">
                            <span>${services[letters[i]][k].name}</span>
                        </a>
                    </li>`;
        }
        html += '</ul>';
    }


    html += '</li>';

    return html;
};