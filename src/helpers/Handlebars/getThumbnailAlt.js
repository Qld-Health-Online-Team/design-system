module.exports = function(thumbnails, index, shortName) {
    var ariaLabel = 'aria-label="Image for '

    if(thumbnails[index].asset_thumbnail_alt.length){
        
        ariaLabel += thumbnails[index].asset_thumbnail_alt + '"';
    } else {
        ariaLabel += shortName + '"';
    }

    return ariaLabel
}