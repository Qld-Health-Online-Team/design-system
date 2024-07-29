module.exports = function (dates) {
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
};