module.exports = function(thumbnails, index, shortName) {
    // If thumbnails is an array and the index is valid
    if (Array.isArray(thumbnails) && thumbnails[index]) {
        // Return an aria-label for the thumbnail at the specified index
        return 'aria-label="' + thumbnails[index].asset_thumbnail_alt + '" role="img"';
    }

    // If thumbnails is an object, return the aria-label directly from the object
    // if (typeof thumbnails === 'object' && thumbnails.asset_thumbnail_assetid) {
    //     return 'aria-label="' + thumbnails.asset_thumbnail_alt + '" role="img"';
    // }

    // Return an empty string if no valid thumbnail found
    return 'aria-label="' + thumbnails.asset_thumbnail_alt + '"';
}
