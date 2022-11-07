function getPagination(resultsSummary, queryUrl) {
    var totalMatching = resultsSummary.totalMatching;
    var numRanks = resultsSummary.numRanks;
    var currStart = resultsSummary.currStart;
    var prevStart = resultsSummary.prevStart;
    var nextStart = resultsSummary.nextStart;
    var pageCount = Math.ceil(totalMatching / numRanks);
    var currPage = Math.ceil(currStart / numRanks);
    var startPage = Math.max(1, currPage - 2);
    var endPage = Math.min(pageCount, startPage + 4);
    var pagination = [];
    var index;

    // Add the page links
    for (index = startPage; index <= endPage; index++) {
        var page = {
            label: index,
            isCurrent: currPage === index,
            linkType: "num",
            url: (/[?&]/.test(queryUrl)) ? queryUrl + "start_rank=" + ((index - 1) * numRanks + 1) : queryUrl + "&start_rank=" + ((index - 1) * numRanks + 1),
        };
        pagination.push(page);
    }

    // If there's enough pages and page 1 wouldn't normally be shown
    // Add a first page link
    if (pageCount > 5 && currPage >= 4) {
        pagination.unshift({
            label: 1,
            linkType: "first",
            url: queryUrl + "&start_rank=1",
        });
    }

    // If we're past the first page, add a previous link
    if (pageCount > 1 && currPage > 1) {
        pagination.unshift({
            linkType: "prev",
            url: queryUrl + "&start_rank=" + prevStart,
        });
    }

    // If there's enough pages and the last page wouldn't normally be shown
    // Add a last page link
    if (pageCount > 5 && currPage < pageCount - 2) {
        pagination.push({
            label: pageCount,
            linkType: "last",
            url: queryUrl + "&start_rank=" + ((pageCount - 1) * numRanks + 1),
        });
    }

    // If we're not at the last page and there's more than one, add a next link
    if (pageCount > 1 && currPage < pageCount) {
        pagination.push({
            linkType: "next",
            url: queryUrl + "&start_rank=" + nextStart,
        });
    }

    return pagination;
}
