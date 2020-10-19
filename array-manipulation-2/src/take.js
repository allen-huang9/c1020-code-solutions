/* eslint-disable no-unused-vars */

function take(array, count) {
  var subArray = [];

  if (array.length > 0 && count <= array.length) {
    for (var i = 0; i < count; i++) {
      subArray.push(array[i]);
    }
  } else if (count > array.length) {
    return array;
  }

  return subArray;
}
