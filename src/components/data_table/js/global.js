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

    function getTableHeaderAndFooter(tableLines) {
        let tableColumnHeads = [];
        let tableFooterData = [];

        if (tableLines?.length > 0) {
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

    function getTableData(tableLines, tableColumnHeads) {
        let returnArray = [];

        for (let i = 0; i < tableLines?.length; i++) {
            let line = tableLines.shift().split(",");
            let obj = {};
            for (let j = 0; j < line.length; j++) {
                obj[tableColumnHeads[j]] = line[j].replace(/\r/g, "");
            }
            returnArray.push(obj);
        }

        return [...returnArray];
    }

    function dataTableCsv() {
        const csvTable = document.getElementById("qld_data-table_csv");
        csvTable.style.display = "table";
        const csvFileURL = csvTable.getAttribute('data-csv-source');

        readCSVFile(csvFileURL, (err, tableLines) => {
            if (err) {
                console.log("Error: ", err);
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
            // let tableFooter = tableFooterData.map((f, i) => {
            //     footerHasContent = footerHasContent || f.trim().length > 0;
            //     return i == 0
            //         ? `<th class="sorting_1">${f}</th>`
            //         : `<th>${f}</th>`;
            // });

            const QLD_DataTable = $("#qld_data-table_csv").DataTable({
                data: tableData ? tableData : [],
                columns: tableColumns ? tableColumns : [],
                dom: '<"top"if>rt<"bottom"lp><"clear">',
                pagingType: "simple_numbers",
                pagingTag: "li",
                language: {
                    paginate: {
                        previous: `<a rel="prev"
                        aria-label="Next page of results" class="qld__search-pagination_link">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true" focusable="false"
                            width="16" height="16" role="img">
                            <path fill="currentColor"
                                d="M448 256C448 264.8 440.6 272 431.4 272H54.11l140.7 149.3c6.157 6.531 5.655 16.66-1.118 22.59C190.5 446.6 186.5 448 182.5 448c-4.505 0-9.009-1.75-12.28-5.25l-165.9-176c-5.752-6.094-5.752-15.41 0-21.5l165.9-176c6.19-6.562 16.69-7 23.45-1.094c6.773 5.938 7.275 16.06 1.118 22.59L54.11 240h377.3C440.6 240 448 247.2 448 256z">
                            </path>
                        </svg><span>Back</span>
                    </a>`,
                        next: `<a rel="next" aria-label="Next page of results" class="qld__search-pagination_link">
                            <span>Next</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true" focusable="false" width="16" height="16" role="img"><path fill="currentColor" d="M443.7 266.8l-165.9 176C274.5 446.3 269.1 448 265.5 448c-3.986 0-7.988-1.375-11.16-4.156c-6.773-5.938-7.275-16.06-1.118-22.59L393.9 272H16.59c-9.171 0-16.59-7.155-16.59-15.1S7.421 240 16.59 240h377.3l-140.7-149.3c-6.157-6.531-5.655-16.66 1.118-22.59c6.789-5.906 17.27-5.469 23.45 1.094l165.9 176C449.4 251.3 449.4 260.7 443.7 266.8z"></path></svg>
                            </a>`,
                    },
                    sEmptyTable: "No data available in table",
                    sInfo: "<span class='item-numbers'><span class='item-numbers-heading'>Showing:</span> _START_-_END_ of <span class='item-numbers-total'>_TOTAL_ entries</span></span>",
                    sInfoEmpty:
                        "<span class='item-numbers'><span class='item-numbers-heading'>Showing:</span> 0-0 of <span class='item-numbers-total'>0 entries</span></span>",
                    sInfoFiltered: "(filtered from _MAX_ total entries)",
                    sInfoPostFix: "",
                    sDecimal: "",
                    sThousands: ",",
                    sLengthMenu: "<span>Items per page</span> _MENU_",
                    sLoadingRecords: "Loading...",
                    sProcessing: "",
                    sSearch: `<div class="qld__search__inner"><input type="search" id="qld__header__search-query" name="query" class="qld__text-input" autocomplete="off" value="" />
                    <div class="qld__search__btn">
                        <button class="qld__btn qld__btn--search" type="submit" aria-label="Search">
                            <span style="display:block" class="qld__btn__icon"></span>
                        </button>
                    </div></div>`,
                    sSearchPlaceholder: "Search this table",
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
                    sTable: "dataTable",
                    sNoFooter: "no-footer",
                    sPageButton: "qld__search-pagination_link ",
                    sPageButtonActive: "active",
                    sPageButtonDisabled: "disabled",
                    sStripeOdd: "odd",
                    sStripeEven: "even",
                    sRowEmpty: "dataTables_empty",
                    sWrapper: "dataTables_wrapper",
                    sFilter: "dataTables_filter",
                    sInfo: "dataTables_info",
                    sPaging:
                        "dataTables_paginate paging_ qld__search-pagination ",
                    sLength: "dataTables_length ",
                    sProcessing: "dataTables_processing",
                    sSortAsc: "sorting_asc",
                    sSortDesc: "sorting_desc",
                    sSortable: "sorting",
                    sSortableAsc: "sorting_desc_disabled",
                    sSortableDesc: "sorting_asc_disabled",
                    sSortableNone: "sorting_disabled",
                    sSortColumn: "sorting_",
                    sLengthSelect: "",
                    sScrollWrapper: "dataTables_scroll",
                    sScrollHead: "dataTables_scrollHead",
                    sScrollHeadInner: "dataTables_scrollHeadInner",
                    sScrollBody: "dataTables_scrollBody",
                    sScrollFoot: "dataTables_scrollFoot",
                    sScrollFootInner: "dataTables_scrollFootInner",
                    sHeaderTH: "",
                    sFooterTH: "",
                    sSortJUIAsc: "",
                    sSortJUIDesc: "",
                    sSortJUI: "",
                    sSortJUIAscAllowed: "",
                    sSortJUIDescAllowed: "",
                    sSortJUIWrapper: "",
                    sSortIcon: "",
                    sJUIHeader: "",
                    sJUIFooter: "bottom AAAA",
                },
                drawCallback: function (settings) {
                    var parentDiv = $("div.qld__search-pagination");
                    var ulElement = $(
                        '<ul class="qld__search-pagination__list"></ul>'
                    );
                    parentDiv.children().appendTo(ulElement);
                    ulElement.appendTo(parentDiv);

                    $(".qld__search-pagination_link").each(function () {
                        var $this = $(this);
                        if (
                            $this.children("a").length === 0 &&
                            $this.children("span").length === 0 &&
                            $this.children("svg").length === 0
                        ) {
                            var textContent = $this.text();
                            $this.html(
                                '<a class="num">' + textContent + "</a>"
                            );
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
                },
            });

            QLD_DataTable.on("order.dt", function () {
                let order = QLD_DataTable.order()[0]; // Get the column index being sorted
                let columns = QLD_DataTable.columns(); // Get all columns in the table

                $("#qld_data-table_csv tfoot th").removeClass(
                    "sorting_asc sorting_desc sorting sorting_1"
                );

                $(
                    "#qld_data-table_csv tfoot th:nth-child(" + (order[0] + 1) + ")"
                ).addClass("sorting_1");
            });

            if (footerHasContent) {
                $("#qld_data-table_csv")
                    .append(
                        $("<tfoot class='qld__data-table-footer' />").append(
                            tableFooter
                        )
                    )
                    .addClass("qld__table");
            }
        });
    }

    function dataTableHtml() {
        const htmlTable = document.getElementById("qld_data-table_html").style.display = "block";
        const tableElement = $("#qld_data-table_html table");

        const QLD_DataTable = tableElement.DataTable({
            dom: '<"top"if>rt<"bottom"lp><"clear">',
            pagingType: "simple_numbers",
            pagingTag: "li",
            language: {
                paginate: {
                    previous: `<a rel="prev"
                        aria-label="Next page of results" class="qld__search-pagination_link">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true" focusable="false"
                            width="16" height="16" role="img">
                            <path fill="currentColor"
                                d="M448 256C448 264.8 440.6 272 431.4 272H54.11l140.7 149.3c6.157 6.531 5.655 16.66-1.118 22.59C190.5 446.6 186.5 448 182.5 448c-4.505 0-9.009-1.75-12.28-5.25l-165.9-176c-5.752-6.094-5.752-15.41 0-21.5l165.9-176c6.19-6.562 16.69-7 23.45-1.094c6.773 5.938 7.275 16.06 1.118 22.59L54.11 240h377.3C440.6 240 448 247.2 448 256z">
                            </path>
                        </svg><span>Back</span>
                    </a>`,
                    next: `<a rel="next" aria-label="Next page of results" class="qld__search-pagination_link">
                            <span>Next</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true" focusable="false" width="16" height="16" role="img"><path fill="currentColor" d="M443.7 266.8l-165.9 176C274.5 446.3 269.1 448 265.5 448c-3.986 0-7.988-1.375-11.16-4.156c-6.773-5.938-7.275-16.06-1.118-22.59L393.9 272H16.59c-9.171 0-16.59-7.155-16.59-15.1S7.421 240 16.59 240h377.3l-140.7-149.3c-6.157-6.531-5.655-16.66 1.118-22.59c6.789-5.906 17.27-5.469 23.45 1.094l165.9 176C449.4 251.3 449.4 260.7 443.7 266.8z"></path></svg>
                            </a>`,
                },
                sEmptyTable: "No data available in table",
                sInfo: "<span class='item-numbers'><span class='item-numbers-heading'>Showing:</span> _START_-_END_ of <span class='item-numbers-total'>_TOTAL_ entries</span></span>",
                sInfoEmpty:
                    "<span class='item-numbers'><span class='item-numbers-heading'>Showing:</span> 0-0 of <span class='item-numbers-total'>0 entries</span></span>",
                sInfoFiltered: "(filtered from _MAX_ total entries)",
                sInfoPostFix: "",
                sDecimal: "",
                sThousands: ",",
                sLengthMenu: "<span>Items per page</span> _MENU_",
                sLoadingRecords: "Loading...",
                sProcessing: "",
                sSearch: `<div class="qld__search__inner"><input type="search" id="qld__header__search-query" name="query" class="qld__text-input" autocomplete="off" value="" />
                    <div class="qld__search__btn">
                        <button class="qld__btn qld__btn--search" type="submit" aria-label="Search">
                            <span style="display:block" class="qld__btn__icon"></span>
                        </button>
                    </div></div>`,
                sSearchPlaceholder: "Search this table",
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
                sTable: "dataTable",
                sNoFooter: "no-footer",
                sPageButton: "qld__search-pagination_link ",
                sPageButtonActive: "active",
                sPageButtonDisabled: "disabled",
                sStripeOdd: "odd",
                sStripeEven: "even",
                sRowEmpty: "dataTables_empty",
                sWrapper: "dataTables_wrapper",
                sFilter: "dataTables_filter",
                sInfo: "dataTables_info",
                sPaging: "dataTables_paginate paging_ qld__search-pagination ",
                sLength: "dataTables_length ",
                sProcessing: "dataTables_processing",
                sSortAsc: "sorting_asc",
                sSortDesc: "sorting_desc",
                sSortable: "sorting",
                sSortableAsc: "sorting_desc_disabled",
                sSortableDesc: "sorting_asc_disabled",
                sSortableNone: "sorting_disabled",
                sSortColumn: "sorting_",
                sLengthSelect: "",
                sScrollWrapper: "dataTables_scroll",
                sScrollHead: "dataTables_scrollHead",
                sScrollHeadInner: "dataTables_scrollHeadInner",
                sScrollBody: "dataTables_scrollBody",
                sScrollFoot: "dataTables_scrollFoot",
                sScrollFootInner: "dataTables_scrollFootInner",
                sHeaderTH: "",
                sFooterTH: "",
                sSortJUIAsc: "",
                sSortJUIDesc: "",
                sSortJUI: "",
                sSortJUIAscAllowed: "",
                sSortJUIDescAllowed: "",
                sSortJUIWrapper: "",
                sSortIcon: "",
                sJUIHeader: "",
                sJUIFooter: "bottom AAAA",
            },
            drawCallback: function (settings) {
                var parentDiv = $("div.qld__search-pagination");
                var ulElement = $(
                    '<ul class="qld__search-pagination__list"></ul>'
                );
                parentDiv.children().appendTo(ulElement);
                ulElement.appendTo(parentDiv);

                $(".qld__search-pagination_link").each(function () {
                    var $this = $(this);
                    if (
                        $this.children("a").length === 0 &&
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



            },
        });

        $( // this line enforces the correct sorting class to the html table's first column's footer. 
            "#qld_table_html tfoot tr th:first-child"
        ).addClass("sorting_1");

        QLD_DataTable.on("order.dt", function () {
            let order = QLD_DataTable.order()[0]; // Get the column index being sorted

            $("#qld_table_html tfoot tr th").removeClass(
                "sorting_asc sorting_desc sorting sorting_1"
            );

            $(
                "#qld_table_html tfoot tr th:nth-child(" + (order[0] + 1) + ")"
            ).addClass("sorting_1");
        });
    }

    function triggerFunctionBasedOnClass() {
        var tableDiv = $(".qld__data-table");

        if (tableDiv.hasClass("qld__data-table--csv")) {
            dataTableCsv();
        } else if (tableDiv.hasClass("qld__data-table--html")) {
            dataTableHtml();
        }
    }

    dataTable.init = function () {

        var tableDiv = document.querySelector(".qld__data-table");


        triggerFunctionBasedOnClass();

        // if (tableDiv.hasClass("qld__data-table--csv")) {
        //     dataTableCsv();
        // } else if (tableDiv.hasClass("qld__data-table--html")) {
        //     dataTableHtml();
        // }
        
    }

    QLD.dataTable = dataTable;

    document.addEventListener("DOMContentLoaded", QLD.dataTable.init);

})();
