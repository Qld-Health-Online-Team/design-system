
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

        // Usage example
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
                let csvTable = new DataTable('#qld_table_csv', {data: tableData ? tableData : [], columns: tableColumns ? tableColumns : []});
                
                //footer is appended to the table here after table exists on the page
                $("#qld_table_csv").append(
                    $('<tfoot/>').append(tableFooter)
                );
    
                const htmlTable = new DataTable('#qld_table_html');
                
            });
        }

    });
    
}());