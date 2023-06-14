
(function () {
    'use strict';

    //this function gets a url of a csv file and a callback function, then feeds the content of the csv to the callback and runs it.
    function readCSVFile(url, callback) {
        fetch(url)
        .then(response => {
            if (!response.ok) {
              throw new Error('Error fetching CSV file.');
            }
            return response.text();
        })
        .then(data => {
            const lines = data.split('\n');
            callback(null, lines);
        })
        .catch(error => {
            callback(error);
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        // Creating a table from a CSV datasource
        const fileURL = document.getElementById('csvFileInput').value;
        if(fileURL) {
            readCSVFile(fileURL, (err, lines) => {
                
                if (err) {
                    console.error('Error:', err);
                    return;
                }
    
                let returnArray = [];
                //this should run if the lins has at least one element
                let tableColumnHeads = [];
                let tableFooterData = [];
                
                // this block takes the head and footer of the table
                if(lines.length > 0) {
                    tableColumnHeads = lines.shift().split(',');
                    if(lines.length > 0) {
                        tableFooterData = lines.pop().split(',');
                        if(lines.length > 0 && !tableFooterData[0]) { // when the last element is just a new line pop runs again to pick the actual last element as footer. 
                            tableFooterData = lines.pop().split(',');
                        }
                    }
                }
    
                //this block takes the body content of the table 
                for(let i = 0; i < lines.length; i++) {
    
                    let line = lines.shift().split(',');
                    let obj = {};
                    for(let j = 0; j < line.length; j++) {
                        obj[tableColumnHeads[j]] = line[j].replace(/\r/g, '');
                    }
                    returnArray.push(obj);
    
                };
    
                //Defining varialbes to feed them to DataTables.
                let tableData = returnArray;
                let tableColumns = tableColumnHeads.map(column => {
                    return { data: column, title: column }
                });
                let tableFooter = tableFooterData.map(f => {
                    return `<th>${f}</th>`;
                });
                let csvTable = new DataTable('#qld_table_csv', {
                    data: tableData ? tableData : [], 
                    columns: tableColumns ? tableColumns : [],
                    dom: '<"top"if>rt<"bottom"lp><"clear">',
                    columnDefs: [
                        {
                            targets: -1,
                            className: 'dt-body-right'
                        }
                    ]              
                });
                
                //footer is appended to the table here after table exists on the page
                $("#qld_table_csv").append( //sorting_asc
                    $('<tfoot/>').append(tableFooter)
                ).addClass("qld__table");
    
                const htmlTable = new DataTable('#qld_table_html');
                
            });
        };

        //Replacing dataTable's default icons.
        const arrowUpDow = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M171.3 36.7c-6.2-6.2-16.4-6.2-22.6 0l-96 96c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L144 86.6V464c0 8.8 7.2 16 16 16s16-7.2 16-16V86.6l68.7 68.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-96-96zm352 342.6c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L432 425.4V48c0-8.8-7.2-16-16-16s-16 7.2-16 16V425.4l-68.7-68.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l96 96c6.2 6.2 16.4 6.2 22.6 0l96-96z"/></svg>';
        const arrowUp = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M203.3 36.7c-6.2-6.2-16.4-6.2-22.6 0l-176 176c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L176 86.6V464c0 8.8 7.2 16 16 16s16-7.2 16-16V86.6L356.7 235.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-176-176z"/></svg>';
        const arrowDown = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M180.7 475.3c6.2 6.2 16.4 6.2 22.6 0l176-176c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L208 425.4 208 48c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 377.4L27.3 276.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l176 176z"/></svg>';

    });
}());