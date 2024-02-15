export default function arrayWith(array, key, value, options) {
  const childArray = [];
  for (let x = 0; x < array.length; x++) {
    if (array[x][key] === value) {
      childArray.push(array[x]);
    }
  }
  if (childArray.length > 0) {
    return options.fn(childArray);
  }
}