module.exports = function(thumbnails, index, shortName) {
    if (!thumbnails[index]) return '';

    return 'aria-label="' + thumbnails[index] + '" role="img"';
}
