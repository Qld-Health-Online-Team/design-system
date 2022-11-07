module.exports = function(selectValues, tags, options) {
    let output = "";
    let splitSelectValues = [];

    if(tags){

        if(selectValues) {
            splitSelectValues = selectValues.replace(/_/g, ' ').split('; ');
        }
    
        for(let selectValue in splitSelectValues) {
            if(splitSelectValues.hasOwnProperty(selectValue)) {
                var key = splitSelectValues[selectValue].replace(/ /g, '_');
                output = output + options.fn({key: key, value: tags[key]})
            }
        }
    }

    return output;
};