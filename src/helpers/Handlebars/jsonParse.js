module.exports = function(string) {
    try {
        return JSON.parse(string); 
    } catch (error) {
        return {};
    }
    
}