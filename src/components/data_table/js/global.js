(function () {
    "use strict";

    /**
     * @module dataTable
     */

    var dataTable = {};

    function readCSVFile(url, callback) {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error fetching CSV file.");
                }
                return response.text();
            })
            .then((data) => {
                const tableLines = data.split("\n");
                callback(null, tableLines);
            })
            .catch((error) => {
                callback(error);
            });
    }

    function getTableHeaderAndFooter(tableLines = []) {
        let tableColumnHeads = [];
        let tableFooterData = [];

        if (tableLines.length > 0) {
            tableColumnHeads = tableLines.shift().split(","); //whatever is the first element is the header.
            // if (tableLines?.length > 0) { //This allows us to have a separate footer to the header. 
            //     //If anything left then goes to the footer.
            //     tableFooterData = tableLines.pop().split(",");
            //     if (tableLines?.length > 0 && !tableFooterData[0]) {
            //         tableFooterData = tableLines.pop().split(",");
            //     }
            // }
        }

        return {
            header: tableColumnHeads,
            // footer: tableFooterData,
            footer: tableColumnHeads
        };
    }

    function getTableData(tableLines = [], tableColumnHeads) {
        let returnArray = [];
        
        let tableLength = tableLines.length - 1;

        for (let i = 0; i < tableLength; i++) {
            let unprocessedLine = tableLines.shift();

            let line = unprocessedLine.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g).map(cell => {
                // Remove surrounding quotes if present
                return cell.replace(/^"(.+(?="$))"$/, '$1');
            });

            let obj = {};
            for (let j = 0; j < line.length; j++) {
                obj[tableColumnHeads[j]] = line[j].replace(/\r/g, "");
            }
            returnArray.push(obj);
        }

        return [...returnArray];
    }

    function dataTableCsv(tableDiv) {
        
        let tableDivId = tableDiv.attr("id");
        tableDivId = '#' + tableDivId;

        const csvTable = tableDiv.children("#qld_data-table_csv");
        csvTable.css("display", "table");

        const csvFileURL = csvTable.attr('data-csv-source');

        readCSVFile(csvFileURL, (err, tableLines) => {
            if (err) { //the file reader is prone to throwing errors - CORS errors etc.
                console.log("Error: ", err);
                csvTable.css("display", "none");
            }

            let tableHeaderAndFooter = getTableHeaderAndFooter(tableLines);

            let tableColumnHeads = tableHeaderAndFooter.header;
            let tableFooterData = tableHeaderAndFooter.footer;
            var tableData = getTableData(tableLines, tableColumnHeads); //this name needs to be changed

            // Defining variblers that are included in the table using the processed data from the functions.
            let tableColumns = tableColumnHeads.map((column) => {
                return { data: column, title: column };
            });

            let footerHasContent = false;

            const QLD_DataTable = $(csvTable).DataTable({
                "sScrollX": "100%",
                "sScrollXInner": "100%",
                "bScrollCollapse": true,
                data: tableData ? tableData : [],
                columns: tableColumns ? tableColumns : [],
                dom: '<"top"if>rt<"bottom"lp><"clear">',
                pagingType: "simple_numbers",
                pagingTag: "li",
                language: {
                    paginate: {
                        previous: `<button rel="prev"
                        aria-label="Next page of results" class="qld__search-pagination_link">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true" focusable="false"
                            width="16" height="16" role="img">
                            <path fill="currentColor"
                                d="M448 256C448 264.8 440.6 272 431.4 272H54.11l140.7 149.3c6.157 6.531 5.655 16.66-1.118 22.59C190.5 446.6 186.5 448 182.5 448c-4.505 0-9.009-1.75-12.28-5.25l-165.9-176c-5.752-6.094-5.752-15.41 0-21.5l165.9-176c6.19-6.562 16.69-7 23.45-1.094c6.773 5.938 7.275 16.06 1.118 22.59L54.11 240h377.3C440.6 240 448 247.2 448 256z">
                            </path>
                        </svg><span>Back</span>
                    </button>`,
                        next: `<button rel="next" aria-label="Next page of results" class="qld__search-pagination_link">
                            <span>Next</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true" focusable="false" width="16" height="16" role="img"><path fill="currentColor" d="M443.7 266.8l-165.9 176C274.5 446.3 269.1 448 265.5 448c-3.986 0-7.988-1.375-11.16-4.156c-6.773-5.938-7.275-16.06-1.118-22.59L393.9 272H16.59c-9.171 0-16.59-7.155-16.59-15.1S7.421 240 16.59 240h377.3l-140.7-149.3c-6.157-6.531-5.655-16.66 1.118-22.59c6.789-5.906 17.27-5.469 23.45 1.094l165.9 176C449.4 251.3 449.4 260.7 443.7 266.8z"></path></svg>
                            </button>`,
                    },
                    sEmptyTable: "No data available in table",
                    sInfo: "<span class='qld__data-table-item-numbers'><span class='qld__data-table-item-numbers-heading'>Showing:</span> _START_-_END_ of <span class='qld__data-table-item-numbers-total'>_TOTAL_ entries</span></span>",
                    sInfoEmpty:
                        "<span class='qld__data-table-item-numbers'><span class='qld__data-table-item-numbers-heading'>Showing:</span> 0-0 of <span class='qld__data-table-item-numbers-total'>0 entries</span></span>",
                    sInfoFiltered: "(filtered from _MAX_ total entries)",
                    sInfoPostFix: "",
                    sDecimal: "",
                    sThousands: ",",
                    sLengthMenu: "<span>Items per page</span> _MENU_",
                    sLoadingRecords: "Loading...",
                    sProcessing: "",
                    sSearch: `Search:<input type="search" id="qld__data-table__search-field" name="query" class="qld__text-input" autocomplete="off" value=""></input>`,
                    sSearchPlaceholder: "",
                    sUrl: "",
                    sZeroRecords: "No matching records found",
                },
                columnDefs: [
                    {
                        targets: -1,
                        className: "dt-body-right",
                    },
                ],
                oClasses: {
                    sFilterInput: "qld__text-input",
                    sPageButton: "qld__search-pagination_link ",
                    sPageButtonActive: "active",
                    sPageButtonDisabled: "disabled",
                    sPaging: "dataTables_paginate paging_ qld__search-pagination "
                },
                drawCallback: function (settings) {
                    var parentDiv = $(tableDivId + " div.qld__search-pagination");
                    var ulElement = $('<ul class="qld__search-pagination__list"></ul>');
                    parentDiv.children().appendTo(ulElement);
                    ulElement.appendTo(parentDiv);
                
                    $(".qld__search-pagination_link").each(function () {
                        var $this = $(this);
                        if (
                            $this.children("a").length === 0 &&
                            $this.children("button").length === 0 &&
                            $this.children("span").length === 0 &&
                            $this.children("svg").length === 0
                        ) {
                            var textContent = $this.text();
                            $this.html('<a class="num">' + textContent + "</a>");
                        }
                    });

                    $(".qld__search-pagination__list span:not([class])").each(
                        function () {
                            var $span = $(this);

                            // Move the nested <li> elements outside of the <span>
                            $span.before($span.contents());

                            // Remove the empty <span>
                            $span.remove();
                        }
                    );
                    $("li.previous").addClass("prev"); //adding the appropriate class
                    // Remove role="link" and tabindex="0" from <li> elements in pagination
                    $('li.qld__search-pagination_link[role="link"]').removeAttr('role');
                    $('li.qld__search-pagination_link').removeAttr('tabindex');
                    // Remove the aria-label attribute
                    $(tableDivId + " .dataTables_wrapper th").removeAttr('aria-label');

                    // Update sortable <th> elements
                    $(tableDivId + " .dataTables_wrapper th[tabindex='0']").each(function () {
                        const $this = $(this);
                
                        // Remove the tabindex attribute
                        $this.removeAttr("tabindex");
                
                        // Replace the content with a button
                        const textContent = $this.text().trim(); // Get the current text
                        $this.html('<button type="button" class="sortable-header-btn qld__data-table__btn">' + textContent + "</button>");
                    });
                },
            });

            QLD_DataTable.on("order.dt", function () {
                let order = QLD_DataTable.order()[0]; // Get the column index being sorted
                let columns = QLD_DataTable.columns(); // Get all columns in the table

                $(`${tableDivId} > #qld_data-table_csv tfoot th`).removeClass(
                    "sorting_asc sorting_desc sorting sorting_1"
                );

                $(tableDivId + " > #qld_data-table_csv tfoot th:nth-child(" + (order[0] + 1) + ")"
                ).addClass("sorting_1");
            });

            if (footerHasContent) {
                $(`${tableDivId} > #qld_data-table_csv`)
                    .append(
                        $("<tfoot class='qld__data-table-footer' />").append(
                            tableFooter
                        )
                    )
                    .addClass("qld__table");
            }
        });
    }

    function dataTableHtml(tableDiv) {

        let tableDivId = tableDiv.attr("id");
        tableDivId = '#' + tableDivId;

        const htmlTable = tableDiv.children("#qld_data-table_html");
        htmlTable.css("display", "block");
        const tableElement = $(tableDivId + " #qld_data-table_html table");

        const QLD_DataTable = tableElement.DataTable({
            "sScrollX": "100%",
            "sScrollXInner": "100%",
            "bScrollCollapse": true,
            dom: '<"top"if>rt<"bottom"lp><"clear">',
            pagingType: "simple_numbers",
            pagingTag: "li",
            language: {
                paginate: {
                    previous: `<button rel="prev"
                        aria-label="Next page of results" class="qld__search-pagination_link">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true" focusable="false"
                            width="16" height="16" role="img">
                            <path fill="currentColor"
                                d="M448 256C448 264.8 440.6 272 431.4 272H54.11l140.7 149.3c6.157 6.531 5.655 16.66-1.118 22.59C190.5 446.6 186.5 448 182.5 448c-4.505 0-9.009-1.75-12.28-5.25l-165.9-176c-5.752-6.094-5.752-15.41 0-21.5l165.9-176c6.19-6.562 16.69-7 23.45-1.094c6.773 5.938 7.275 16.06 1.118 22.59L54.11 240h377.3C440.6 240 448 247.2 448 256z">
                            </path>
                        </svg><span>Back</span>
                    </button>`,
                    next: `<button rel="next" aria-label="Next page of results" class="qld__search-pagination_link">
                            <span>Next</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true" focusable="false" width="16" height="16" role="img"><path fill="currentColor" d="M443.7 266.8l-165.9 176C274.5 446.3 269.1 448 265.5 448c-3.986 0-7.988-1.375-11.16-4.156c-6.773-5.938-7.275-16.06-1.118-22.59L393.9 272H16.59c-9.171 0-16.59-7.155-16.59-15.1S7.421 240 16.59 240h377.3l-140.7-149.3c-6.157-6.531-5.655-16.66 1.118-22.59c6.789-5.906 17.27-5.469 23.45 1.094l165.9 176C449.4 251.3 449.4 260.7 443.7 266.8z"></path></svg>
                            </button>`,
                },
                sEmptyTable: "No data available in table",
                sInfo: "<span class='qld__data-table-item-numbers'><span class='qld__data-table-item-numbers-heading'>Showing:</span> _START_-_END_ of <span class='qld__data-table-item-numbers-total'>_TOTAL_ entries</span></span>",
                sInfoEmpty:
                    "<span class='qld__data-table-item-numbers'><span class='qld__data-table-item-numbers-heading'>Showing:</span> 0-0 of <span class='qld__data-table-item-numbers-total'>0 entries</span></span>",
                sInfoFiltered: "(filtered from _MAX_ total entries)",
                sInfoPostFix: "",
                sDecimal: "",
                sThousands: ",",
                sLengthMenu: "<span>Items per page</span> _MENU_",
                sLoadingRecords: "Loading...",
                sProcessing: "",
                sSearch: `Search:<input type="search" id="qld__data-table__search-field" name="query" class="qld__text-input" autocomplete="off" value=""></input>`,
                sSearchPlaceholder: "",
                sUrl: "",
                sZeroRecords: "No matching records found",
            },
            columnDefs: [
                {
                    targets: -1,
                    className: "dt-body-right",
                },
            ],
            oClasses: {
                sFilterInput: "qld__text-input",
                sPageButton: "qld__search-pagination_link ",
                sPageButtonActive: "active",
                sPageButtonDisabled: "disabled",
                sPaging: "dataTables_paginate paging_ qld__search-pagination ",

            },
            drawCallback: function (settings) {
                var parentDiv = $(tableDivId + " div.qld__search-pagination");
                var ulElement = $('<ul class="qld__search-pagination__list"></ul>');
                parentDiv.children().appendTo(ulElement);
                ulElement.appendTo(parentDiv);
            
                $(".qld__search-pagination_link").each(function () {
                    var $this = $(this);
                    if (
                        $this.children("a").length === 0 &&
                        $this.children("button").length === 0 &&
                        $this.children("span").length === 0 &&
                        $this.children("svg").length === 0
                    ) {
                        var textContent = $this.text();
                        $this.html('<button class="num">' + textContent + "</button>");
                    }
                });

                $(".qld__search-pagination__list span:not([class])").each(
                    function () {
                        var $span = $(this);

                        // Move the nested <li> elements outside of the <span>
                        $span.before($span.contents());

                        // Remove the empty <span>
                        $span.remove();
                    }
                );
                $("li.previous").addClass("prev"); //adding the appropriate class
                 // Remove role="link" and tabindex="0" from <li> elements in pagination
                 $('li.qld__search-pagination_link[role="link"]').removeAttr('role');
                 $('li.qld__search-pagination_link').removeAttr('tabindex');
                 // Remove the aria-label attribute
                 $(tableDivId + " .dataTables_wrapper th").removeAttr('aria-label');

                 // Update sortable <th> elements
                $(tableDivId + " .dataTables_wrapper th[tabindex='0']").each(function () {
                    const $this = $(this);
            
                    // Remove the tabindex attribute
                    $this.removeAttr("tabindex");
            
                    // Replace the content with a button
                    const textContent = $this.text().trim(); // Get the current text
                    $this.html('<button type="button" class="sortable-header-btn qld__data-table__btn">' + textContent + "</button>");
                });
            },
            
        });

        $( // this line enforces the correct sorting class to the html table's first column's footer. 
            tableDivId + " #qld_table_html tfoot tr th:first-child"
        ).addClass("sorting_1");

        QLD_DataTable.on("order.dt", function () {
            let order = QLD_DataTable.order()[0]; // Get the column index being sorted

            $(tableDivId + " #qld_table_html tfoot tr th").removeClass(
                "sorting_asc sorting_desc sorting sorting_1"
            );

            $(
                tableDivId + " #qld_table_html tfoot tr th:nth-child(" + (order[0] + 1) + ")"
            ).addClass("sorting_1");
        });
    }

    function triggerFunctionBasedOnClass(tableDiv) {

        if (tableDiv.hasClass("qld__data-table--csv")) {
            dataTableCsv(tableDiv);
        } else if (tableDiv.hasClass("qld__data-table--html")) {
            dataTableHtml(tableDiv);
        }
    }

    dataTable.init = function () {

        const tableDivs = $(".qld__data-table");

        for(let tableDiv of tableDivs) {
            triggerFunctionBasedOnClass($(tableDiv));
        }
    }

    QLD.dataTable = dataTable;

    document.addEventListener("DOMContentLoaded", QLD.dataTable.init);

})();
