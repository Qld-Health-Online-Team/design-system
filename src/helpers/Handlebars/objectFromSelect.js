module.exports = function(selectValues, options) {
    let output = "";
    let outputArr = [];
    let splitSelectValues = [];

    if(selectValues) {
        splitSelectValues = selectValues.replace(/_/g, ' ').split('; ');
    }

    // if(num !== 0) {
    //     splitSelectValues.splice(num);
    // }

    for(let selectValue in splitSelectValues) {
        if(splitSelectValues.hasOwnProperty(selectValue)) {
            output = output + options.fn({key: splitSelectValues[selectValue].replace(/ /g, '_'), value:splitSelectValues[selectValue].charAt(0).toUpperCase() + splitSelectValues[selectValue].slice(1)})
        }
    }

    return output;
};