module.exports = function(thumbnails, index, shortName) {
    if (!thumbnails[index].asset_thumbnail_alt.length) return '';

    return 'aria-label="' + thumbnails[index].asset_thumbnail_alt + '" role="img"';
}