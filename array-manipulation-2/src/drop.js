/* eslint-disable no-unused-vars */

function drop(array, count) {
  if (count > array.length || count < 0) {
    return array;
  }
  var subArray = [];
  for (var i = count; i < array.length; i++) {
    subArray.push(array[i]);
  }
  return subArray;
}
