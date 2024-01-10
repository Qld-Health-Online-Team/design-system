Handlebars.registerHelper('appendIf', function (head, tail, options) {
    if (options.hash.prepend === 'true') {
        return !head ? '' : tail + head;
    }
    return !head ? '' : head + tail;
}); 
Handlebars.registerHelper('arrayLength', function (json) {
        return Object.keys(json).length;
    }); 
Handlebars.registerHelper('arrayWith', function(array,key,value,options) {
  var childArray = []
  for(var x = 0; x<array.length;x++) {
      if(array[x][key] == value) {
        childArray.push(array[x]);
          
      }
  }
  if(childArray.length > 0){
    return options.fn(childArray)
  }

}); 
Handlebars.registerHelper('capitaliseFirst', function(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
  
  }); 
Handlebars.registerHelper('charMax', function (str, limit) {

    if (str.length > limit) {
        return str.substring(0, 160) + '...';
    }else{
        return str
    }
}); 
Handlebars.registerHelper('checkIf', function (v1, o1, v2, mainOperator, v3, o2, v4, options) {
    var operators = {
        '==': function(a, b){ return a==b},
        '===': function(a, b){ return a===b},
        '!=': function(a, b){ return a!=b},
        '!==': function(a, b){ return a!==b},
        '<': function(a, b){ return a<b},
        '<=': function(a, b){ return a<=b},
        '>': function(a, b){ return a>b},
        '>=': function(a, b){ return a>=b},
        '&&': function(a, b){ return a&&b},
        '||': function(a, b){ return a||b},
    }
    
    var a1 = operators[o1](v1,v2);
    var a2 = operators[o2](v3,v4);
    var isTrue = operators[mainOperator](a1, a2);

    return isTrue ? options.fn(this) : options.inverse(this);
}); 
Handlebars.registerHelper('columnWidth', function(target_col, data) {

    var col_widths = [
        data.col_1_width.value,
        data.col_2_width.value,
        data.col_3_width.value
    ];

    var col_num = Number(data.col_num.value);
    target_col = Number(target_col);
    var width = 12;

    // Use width override if available
    var width_override = Number(col_widths[target_col-1]);
    if (width_override > 0) {
        width = width_override;

    // Else loop through columns and accumulate manual width
    } else {

        var width_acc = 0;
        var auto_cols = 0;
        for (var i = 0; i < col_num; i++) {
            var col_width_override = Number(col_widths[i]);
            if (col_width_override > 0) {
                width_acc += col_width_override;
            } else {
                auto_cols++;
            }

        }

        var width_available = 12 - width_acc;
        width = width_available / auto_cols;
    }

    // Return bootstrap column class
    return 'col-xs-12 col-lg-' + width;
}); 
Handlebars.registerHelper('contains', function(string, contains, options) {
    if(string.indexOf(contains) !== -1) {
        return options.fn(this);
    }

    return options.inverse(this);
}); 
Handlebars.registerHelper('createMap', function(array, key, prop) {
    Array.prototype.polyReduce = function(callbackFn, initialValue) {
        var accumulator = initialValue;

        for (var i = 0; i < this.length; i++) {
            if (accumulator !== undefined) {
            accumulator = callbackFn.call(undefined, accumulator, this[i],   i, this);
            } else {
            accumulator = this[i];
            }
        }
        return accumulator;
    }

    return array.polyReduce(function(acc,item)  {
        acc[item[key]] = item[prop];
        return acc;
    }, {});
}); 
Handlebars.registerHelper('dsMapFromID', function(datastore, collection, key) {
    return datastore[collection].reduce(function(acc,item) {
        var id = item.id;
        var value = item[key];
        acc[id] = value;
        return acc;
    }, {});
}); 
Handlebars.registerHelper('dsMapFromProp', function(datastore, collection, property, key) {
    return datastore[collection].reduce(function(acc,item) {
        var prop = item[property];
        var value = item[key];
        acc[prop] = value;
        return acc;
    }, {});
}); 
Handlebars.registerHelper('eachByName', function(context,options) {
    var output = "";
    var sorted = context.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    });

    for(let item in sorted) {
        let i = Object.keys(sorted).indexOf(item);

        if(i >= 0) {
            output += options.fn(sorted[item]);
        }
    };

    return output;
}); 
Handlebars.registerHelper('eachDS', function(ds,context,options) {
    var ret = ""; 
    for (var i = 0, j = ds[context].length; i < j; i++) {
     ret = ret + options.fn(ds[context][i]);
    } 
    return ret;
}); 
Handlebars.registerHelper('eachFrom', function(context, count, options) {
    var ret = "";

    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = Array.prototype.forEach;
    }
  
    context.slice(count).forEach(function(elem) {
        ret += options.fn(elem);
    });
  
    return ret;
}); 
Handlebars.registerHelper('eachUpTo', function (arr, max, options) {
    var item = "";
    var totalCount = max < arr.length ? max : arr.length;
    for (var i = 0; i < totalCount; i++) {
        arr[i].index = i;
        item = item + options.fn(arr[i]);
    }
    return item;
}); 
Handlebars.registerHelper('eachWhen', function(list, key, value, options) {
    var result = "";
    var arr = [];
    var data = Handlebars.createFrame(options.data);
    var index = 0;
    
    for(var i in list) {
        if(list[i][key] === value) {
            arr.push({
                key: i,
                index: index,
                first: 0 === index,
                last: false,
                value: list[i]
            });
            index++;
        }
    }

    arr[arr.length - 1].last = true;

    for (var i = 0; i < arr.length; i++) {
        data.key = arr[i].key;
        data.index = arr[i].index;
        data.first = arr[i].first;
        data.last = arr[i].last;
        result = result + options.fn(arr[i].value, {
            data: data
        });
    }
    return result;
}); 
Handlebars.registerHelper('formatDate', function (datetime, formatStr) {
    var date = new Date(datetime);

    console.log(date);

    if (isNaN(date.valueOf())) {
        // date is not valid
        return datetime;
    }

    var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    var day = days[date.getDay()];
    var month = months[date.getMonth()];

    // Tuesday 1 June 2021
    var formatMap = {
        s: String("0" + date.getSeconds()).slice(-2),
        i: String("0" + date.getMinutes()).slice(-2),
        h: String("0" + date.getHours()).slice(-2),
        A: date.getHours() >= 12 ? 'PM' : 'AM',
        a: date.getHours() >= 12 ? 'am' : 'am',
        d: ("0" + date.getDate()).slice(-2), // 01
        D: day.slice(0, 3), // Tue
        F: month, // June
        l: day, // Tuesday
        m: ("0" + (date.getMonth() + 1)).slice(-2), // 06
        M: month.slice(0, 3), // Jun
        n: String(date.getMonth() + 1), // 6
        j: String(date.getDate()), // 1
        y: String(date.getFullYear()).slice(-2), // 21
        Y: String(date.getFullYear()), // 2021
    };

    var _formatStr = formatStr || "l j F Y";

    return _formatStr.replace(/[sihAadDFlmMnjyY]/g, function (match) {
        return formatMap[match] || match;
    });
}); 
Handlebars.registerHelper('generateDates', function (dates) {
    var dateArray = (dates === '' || dates === null) ? [] : dates.split(', ');
    var pastDates = [];
    var futureDates = [];
    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    var month = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    var html = '';

    for (let i = 0; i < dateArray.length; i++) {
        dateArray[i] = new Date(dateArray[i]);
    }

    dateArray.sort(function(a,b){
        return a - b;
    });

    var pastDates = [];
    var futureDates = [];

    for (let i = 0; i < dateArray.length; i++) {
        if (dateArray[i] < yesterday) {
            pastDates.push(dateArray[i]);
        } else {
            futureDates.push(dateArray[i]);
        }
    }

    convertIntoRange(futureDates, 'upcoming', '');
    convertIntoRange(pastDates, 'past', 'hidden="hidden"');

    function convertIntoRange(dateArray, type, hidden) {
        var dateRange = false;
        html += `<div role="tabpanel" id="qhealth__service_dates__tab-panel--${type}" aria-labelledby="qhealth__service_dates__tab-heading--${type}" class="qhealth__tab_panel mt-1" ${hidden}>`;
        if (dateArray.length > 0) {
            for (let i = 0; i < dateArray.length; i++) {
                var j = i + 1;
                var nextDate = new Date(dateArray[i]);
                nextDate.setDate(dateArray[i].getDate() + 1);
                if (dateArray.length > j) {
                    if (dateArray[j] - nextDate == 0) {
                        if (!dateRange) {
                            dateRange = true;
                            html += `<div>${("0" + dateArray[i].getDate()).slice(-2)} ${month[dateArray[i].getMonth()]} - `;
                        }
                    } else if (dateRange){
                        dateRange = false;
                        html += `${("0" + dateArray[i].getDate()).slice(-2)} ${month[dateArray[i].getMonth()]} ${dateArray[i].getFullYear()}</div>`;
                    } else {
                        dateRange = false;
                        html += `<div>${("0" + dateArray[i].getDate()).slice(-2)} ${month[dateArray[i].getMonth()]} ${dateArray[i].getFullYear()}</div>`;
                    }
                } else {
                    if (dateRange){
                        dateRange = false;
                        html += `${("0" + dateArray[i].getDate()).slice(-2)} ${month[dateArray[i].getMonth()]} ${dateArray[i].getFullYear()}</div>`;
                    } else {
                        dateRange = false;
                    html += `<div>${("0" + dateArray[i].getDate()).slice(-2)} ${month[dateArray[i].getMonth()]} ${dateArray[i].getFullYear()}</div>`;
                    }
                }
            }
        } else {
            if (type == 'upcoming') {
                html += '<div>No upcoming dates are scheduled at this stage. Please check again later.</div>';
            } else {
                html += '<div>There are no past dates for this service.</div>';
            }
        }
        html += '</div>'; 
    }

    return html;
}); 
Handlebars.registerHelper('getDistance', function (lat, lng, userLat, userLong) {
    var distanceAway = "";

    /**
     * Haversine formula - calculate distance "as the crow flies" between two sets of lat/long coordinates
     * https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula
     * 
     * @param {number} lat1 
     * @param {number} lon1 
     * @param {number} lat2 
     * @param {number} lon2 
     * 
     * @returns {number}
     */
    function getDistance(lat1, lon1, lat2, lon2) {
        var p = 0.017453292519943295;    // Math.PI / 180
        var c = Math.cos;
        var a = 0.5 - c((lat2 - lat1) * p)/2 + 
                c(lat1 * p) * c(lat2 * p) * 
                (1 - c((lon2 - lon1) * p))/2;

        var result = 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
        
        if (result >= 10) {
            return round(result);
        } else {
            return round(result, 1)
        }
    }

    function round(value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    }

    // Init
    distanceAway = getDistance(lat, lng, userLat, userLong);

    return distanceAway;
}); 
Handlebars.registerHelper('getObject', function (obj,key,prop) {
    return obj[key][prop];
}); 
Handlebars.registerHelper('getParamaterByName', function(name,req) {
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( req.originalUrl );
    if( results == null ) {
      return "";
    } else {
      return decodeURIComponent(results[1].replace(/\+/g, " "));
    }
}); 
Handlebars.registerHelper('getPossibleValues', function(obj,key) {
    var possibleValues = [];
    for(var i in obj) {
        if (obj[i].hasOwnProperty(key)) {
            var value = obj[i][key];
            if (possibleValues.indexOf(value) === -1) {
                possibleValues.push(value);
            }
        }
    }

    return possibleValues;
}); 
Handlebars.registerHelper('getProp', function (obj,prop) {
    return obj[prop];
}); 
Handlebars.registerHelper('getTags', function(selectValues, tags, options) {
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
}); 
Handlebars.registerHelper('getTitle', function (obj,name) {
    var index = name.replace(/\D/g, "");
    return obj['title_' + index].value;
}); 
Handlebars.registerHelper('if_eq', function () {
    const args = Array.prototype.slice.call(arguments, 0, -1);
    const options = arguments[arguments.length - 1];
    const allEqual = args.every(function (expression) {
        return args[0] === expression;
    });

    return allEqual ? options.fn(this) : options.inverse(this);
}); 
Handlebars.registerHelper('ifAny', function () {
    var options = arguments[arguments.length - 1];
    for (var i = 0; i < arguments.length - 1; i++) {
        if (arguments[i]) {
            return options.fn(this);
        }
    }
    return options.inverse(this);
}); 
Handlebars.registerHelper('ifArray', function (input,options) {
    return Array.isArray(input) ? options.fn(this) : options.inverse(this);
}); 
Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {
    switch (operator) {
        case '==':
            return (v1 == v2) ? options.fn(this) : options.inverse(this);
        case '===':
            return (v1 === v2) ? options.fn(this) : options.inverse(this);
        case '!=':
            return (v1 != v2) ? options.fn(this) : options.inverse(this);
        case '!==':
            return (v1 !== v2) ? options.fn(this) : options.inverse(this);
        case '<':
            return (v1 < v2) ? options.fn(this) : options.inverse(this);
        case '<=':
            return (v1 <= v2) ? options.fn(this) : options.inverse(this);
        case '>':
            return (v1 > v2) ? options.fn(this) : options.inverse(this);
        case '>=':
            return (v1 >= v2) ? options.fn(this) : options.inverse(this);
        case '&&':
            return (v1 && v2) ? options.fn(this) : options.inverse(this);
        case '||':
            return (v1 || v2) ? options.fn(this) : options.inverse(this);
        case 'contains':
            if(typeof v1 == 'string' && typeof v2 == 'string') {
                return (v1.toLowerCase().indexOf(v2.toLowerCase()) >= 0) ? options.fn(this) : options.inverse(this);
            }
            else return options.inverse(this);
        default:
            return options.inverse(this);
    }
}); 
Handlebars.registerHelper('ifEqualsOrChained', function() {
    var options = arguments[arguments.length-1];
    // Assuming that all wanted operator are '||'
    var valueToTest = arguments[0];

    for (var i = 1; i < (arguments.length - 1); i++) {
        if (valueToTest === arguments[i]) {
            return options.fn(this);
        }
    }
    return options.inverse(this);
}); 
Handlebars.registerHelper('ifProp', function (obj,key,prop,options) {
    return (obj[key][prop]) ? options.fn(this) : options.inverse(this);
}); 
Handlebars.registerHelper('inArray', function(array,key,value,options) {
    for(var x = 0; x<array.length;x++) {
        if(array[x][key] === value) {
            return options.fn(this)
        }
    }
    return options.inverse(this);
}); 
Handlebars.registerHelper('isPage', function(pageType, options) {
    if (pageType == 'page_standard' || pageType == 'page_redirect' || pageType == 'page_custom_form'|| pageType == 'page_decision_tree') {
        return options.fn(this)
    } else {
        return options.inverse(this)
    }
}); 
Handlebars.registerHelper('itemAt', function (array, index) {
    var idx = parseInt(index, 10);
    if (Array.isArray(array) && !isNaN(idx)) {
        if (idx < 0) {
            return array[array.length + idx];
        }
        if (idx < array.length) {
            return array[idx];
        }
    }
}); 
Handlebars.registerHelper('jsonParse', function(string) {
    try {
        return JSON.parse(string); 
    } catch (error) {
        return {};
    }
    
}); 
Handlebars.registerHelper('jsonStringify', function(string) {
    return JSON.stringify(string);
}); 
Handlebars.registerHelper('listAZ', function(items, url, options) {
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
        html += '<h3 class="qld__a-z_listing__list__item__header"><span id="'+letters[i]+'">'+letters[i]+'</span></h3>';
        html += '<ul class="qld__a-z_listing__list__item__services">';
        for(var k = 0; k < services[letters[i]].length; k++) {
            html += '<li class="qld__a-z_listing__list__item__services__item"><a class="qld__a-z_listing__list__item__services__item__link" href="./?a='+services[letters[i]][k].id+'"><span>'+services[letters[i]][k].name+'</span></a></li>';
        }
        html += '</ul>';
    }


    html += '</li>';

    return html;
}); 
Handlebars.registerHelper('listAZOptions', function(items, options) {
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
}); 
Handlebars.registerHelper('listByClosest', function (arr, max, userLat, userLong, options) {
    var item = "";
    var totalCount = max < arr.length ? max : arr.length;

    Array.prototype.polyMap = function(callbackFn) {
        var arr = [];              
        for (var i = 0; i < this.length; i++) { 
           /* call the callback function for every value of this array and       push the returned value into our resulting array
           */
          arr.push(callbackFn(this[i], i, this));
        }
        return arr;
      }

    arr = arr.polyMap(function(item) {
        item.distanceAway = getDistance(item.latitude, item.longitude, userLat, userLong);
        return item;
    });

    arr.sort(function(a, b) {
        return a.distanceAway - b.distanceAway;
    });

    for (var i = 0; i < totalCount; i++) {
        item = item + options.fn(arr[i]);
    }
    return item;

    /**
     * Haversine formula - calculate distance "as the crow flies" between two sets of lat/long coordinates
     * https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula
     * 
     * @param {number} lat1 
     * @param {number} lon1 
     * @param {number} lat2 
     * @param {number} lon2 
     * 
     * @returns {number}
     */
    function getDistance(lat1, lon1, lat2, lon2) {
        var p = 0.017453292519943295;    // Math.PI / 180
        var c = Math.cos;
        var a = 0.5 - c((lat2 - lat1) * p)/2 + 
                c(lat1 * p) * c(lat2 * p) * 
                (1 - c((lon2 - lon1) * p))/2;

        var result = 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
        
        if (result >= 10) {
            return round(result);
        } else {
            return round(result, 1)
        }
    }

    function round(value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    }
}); 
Handlebars.registerHelper('listByClosestWithOffset', function (arr, max, offset, userLat, userLong, options) {
    var item = "";
    var totalCount = max < arr.length ? max : arr.length;
    
    if(offset === null) {
        offset = 0;
    }

    Array.prototype.polyMap = function(callbackFn) {
        var arr = [];              
        for (var i = 0; i < this.length; i++) { 
            arr.push(callbackFn(this[i], i, this));
        }

        return arr;
      }

    arr = arr.polyMap(function(item) {
        item.distanceAway = getDistance(item.latitude, item.longitude, userLat, userLong);
        return item;
    });

    arr.sort(function(a, b) {
        return a.distanceAway - b.distanceAway;
    });

    for (var i = 0 + offset; i < totalCount; i++) {
        item = item + options.fn(arr[i]);
    }
    return item;

    /**
     * Haversine formula - calculate distance "as the crow flies" between two sets of lat/long coordinates
     * https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula
     * 
     * @param {number} lat1 
     * @param {number} lon1 
     * @param {number} lat2 
     * @param {number} lon2 
     * 
     * @returns {number}
     */
    function getDistance(lat1, lon1, lat2, lon2) {
        var p = 0.017453292519943295;    // Math.PI / 180
        var c = Math.cos;
        var a = 0.5 - c((lat2 - lat1) * p)/2 + 
                c(lat1 * p) * c(lat2 * p) * 
                (1 - c((lon2 - lon1) * p))/2;

        var result = 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
        
        if (result >= 10) {
            return round(result);
        } else {
            return round(result, 1)
        }
    }

    function round(value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    }
}); 
Handlebars.registerHelper('math', function(lvalue, operator, rvalue) {
    lvalue = parseFloat(lvalue);
    rvalue = parseFloat(rvalue);
    return {
        "+": lvalue + rvalue,
        "-": lvalue - rvalue,
        "*": lvalue * rvalue,
        "/": lvalue / rvalue,
        "%": lvalue % rvalue
    }[operator];
}); 
Handlebars.registerHelper('newLineToBreak', function (str) {
    if(typeof str == 'string') {
        return str.replace(/\n/g, '<br />');
    }
    else return str;
}); 
Handlebars.registerHelper('nonBreakingSpaces', function(str) {
    if(typeof str == 'string') {
        return str.replace(/ /g, '&nbsp;');
    }
    else return '';
}); 
Handlebars.registerHelper('objectFromSelect', function(selectValues, options) {
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
}); 
Handlebars.registerHelper('partialReplace', function (str, search, replacement) {
  var cleanReplacement = " " + replacement + " ";
  if(typeof str == 'string') {
      console.log(str);
      var regex = new RegExp(search, "g"); // need double backslashes in search to use them in regex
      return str.replace(regex, cleanReplacement);
  }
  else return '';
}); 
Handlebars.registerHelper('printAccordion', function (metadata, options) {
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
}); 
Handlebars.registerHelper('renderSpecialChar', function(string) {
    var map = {
        '&amp;' : '&',
        '&lt;' : '<',
        '&gt;' : '>',
        '&quot;' : '"',
        '&#039;' : "'"
    };
      
    return string.replace(/(&amp;|&lt;|&gt;|&quot;|&#039;)/g, function(m) { return map[m]; });
  }); 
Handlebars.registerHelper('replace', function (str, search, replacement) {
    if(typeof str == 'string') {
        console.log(str);
        var regex = new RegExp(search, "g"); // need double backslashes in search to use them in regex
        return str.replace(regex, replacement);
    }
    else return '';
}); 
Handlebars.registerHelper('replaceMany', function (find, replace, options) {
    var string = options.fn(this);
    var regex = new RegExp(find, "g");
    return string.replace(regex, replace);
}); 
Handlebars.registerHelper('sizeFormat', function (bytes, decimals) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}); 
Handlebars.registerHelper('split', function(string, separator) {
    if(typeof string == 'string') {
        return string.split(separator);
    }
    else return '';
}); 
Handlebars.registerHelper('toUpperCase', function(string) {
  if(string) {
    return string.toUpperCase();
  } else {
      return '';
  }
}); 
Handlebars.registerHelper('urldecode', function (url) {
    return decodeURIComponent(url || '');
}); 
Handlebars.registerHelper('urlencode', function (url) {
    return encodeURIComponent(url || '');
}); 
Handlebars.registerHelper('withinObject', function(obj,key,options) {

    var within = Object.keys(obj).some(function() {
        return obj[key] !== "";
    });


    if(within) {
        return options.fn(this); 
    }

    return options.inverse(this);
}); 
