module.exports = function(array,key,value,options) {
  var childArray = []
  for(var x = 0; x<array.length;x++) {
      if(array[x][key] == value) {
        childArray.push(array[x]);
          
      }
  }
  if(childArray.length > 0){
    return options.fn(childArray)
  }

};