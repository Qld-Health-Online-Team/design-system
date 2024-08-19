module.exports = function (lat, lng, userLat, userLong) {
    var distanceAway = "";

    /**
     * Haversine formula - calculate distance "as the crow flies" between two sets of lat/long coordinates
     * https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula
     * 
     * @param {number} lat1 
     * @param {number} lon1 
     * @param {number} lat2 
     * @param {number} lon2 
     * 
     * @returns {number}
     */
    function getDistance(lat1, lon1, lat2, lon2) {
        var p = 0.017453292519943295;    // Math.PI / 180
        var c = Math.cos;
        var a = 0.5 - c((lat2 - lat1) * p)/2 + 
                c(lat1 * p) * c(lat2 * p) * 
                (1 - c((lon2 - lon1) * p))/2;

        var result = 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
        
        if (result >= 10) {
            return round(result);
        } else {
            return round(result, 1)
        }
    }

    function round(value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    }

    // Init
    distanceAway = getDistance(lat, lng, userLat, userLong);

    return distanceAway;
};
