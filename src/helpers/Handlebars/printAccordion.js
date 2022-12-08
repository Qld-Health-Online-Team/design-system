module.exports = function (metadata, options) {
    var accordions = "";
    var accNum = Number(metadata.accordion_num.value);
    var accordion = {"title": "", "content": "", "fieldid":""};

    for (var property in metadata) {
        var accIndex = property.replace('title_','').replace('content_','');
        accIndex = Number(accIndex);
        
        if (property.indexOf('title_') > -1) {
            if (accNum >= accIndex) {
                accordion.title = metadata[property].value;
            }
        } else if(property.indexOf('content_') > -1) {
            if (accNum >= accIndex) {
                accordion.content = metadata[property].value;
                accordion.fieldid = metadata[property].fieldid;
                accordions = accordions + options.fn(accordion);
            }
        }
    }

    return accordions;
};