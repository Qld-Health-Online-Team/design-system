export default function (obj, key) {
  var possibleValues = [];
  for (var i in obj) {
    if (Object.prototype.hasOwnProperty.call(obj[i], key)) {
      var value = obj[i][key];
      if (possibleValues.indexOf(value) === -1) {
        possibleValues.push(value);
      }
    }
  }

  return possibleValues;
}
