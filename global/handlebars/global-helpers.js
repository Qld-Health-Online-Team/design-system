const globalHelpers = {

    arrayWith: function(array, key, value, options) {
        try {
            const filteredArray = array.filter(item => item[key] === value);

            if (filteredArray.length > 0) {
                return options.fn(filteredArray);
            }
        } catch (error) {
            // Handle any potential errors
            console.error('Error in arrayWith helper:', error);
            return [];
        }
    },
    ifCond: function(v1, operator, v2, options) {
        try {
            switch (operator) {
                case '==':
                    return v1 == v2 ? options.fn(this) : options.inverse(this);
                case '===':
                    return v1 === v2 ? options.fn(this) : options.inverse(this);
                case '!=':
                    return v1 != v2 ? options.fn(this) : options.inverse(this);
                case '!==':
                    return v1 !== v2 ? options.fn(this) : options.inverse(this);
                case '<':
                    return v1 < v2 ? options.fn(this) : options.inverse(this);
                case '<=':
                    return v1 <= v2 ? options.fn(this) : options.inverse(this);
                case '>':
                    return v1 > v2 ? options.fn(this) : options.inverse(this);
                case '>=':
                    return v1 >= v2 ? options.fn(this) : options.inverse(this);
                case '&&':
                    return v1 && v2 ? options.fn(this) : options.inverse(this);
                case '||':
                    return v1 || v2 ? options.fn(this) : options.inverse(this);
                case 'contains':
                    if (typeof v1 === 'string' && typeof v2 === 'string') {
                        return v1.toLowerCase().includes(v2.toLowerCase()) ? options.fn(this) : options.inverse(this);
                    }
                    return options.inverse(this); // Return early if the type is not string
                default:
                    return options.inverse(this);
            }
        } catch (error) {
            // Handle any potential errors
            console.error('Error in ifCond helper:', error);
            return '';
        }
    },
    itemAt: function (array, index) {
        var idx = parseInt(index, 10);
        if (Array.isArray(array) && !isNaN(idx)) {
            if (idx < 0) {
                return array[array.length + idx];
            }
            if (idx < array.length) {
                return array[idx];
            }
        }
    },
    jsonParse: function(string) {
        try {
            return JSON.parse(string);
        } catch (error) {
            // Handle any potential errors
            console.error('Error in jsonParse helper:', error);
            return '';
        }
    },
    printAccordion: function (metadata, options) {
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
    },
    urldecode: function(url) {
        try {
            return decodeURIComponent(url || '');
        } catch (error) {
            // Handle any potential errors
            console.error('Error in urldecode:', error);
            return '';
        }
    },
    renderSpecialChar: function(string) {
        var map = {
            '&amp;' : '&',
            '&lt;' : '<',
            '&gt;' : '>',
            '&quot;' : '"',
            '&#039;' : "'"
        };
          
        return string.replace(/(&amp;|&lt;|&gt;|&quot;|&#039;)/g, function(m) { return map[m]; });
    }
}

export default globalHelpers;