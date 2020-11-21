/* eslint-disable no-unused-vars */

function dropRight(array, count) {
  if (count > array.length || count < 0) {
    return array;
  }

  var subArray = [];
  for (var i = 0; i < array.length - count; i++) {
    subArray.push(array[i]);
  }
  return subArray;
}
