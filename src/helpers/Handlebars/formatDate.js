module.exports = function (datetime, formatStr) {
    var date = new Date(datetime);

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
};
