/* eslint-disable no-unused-vars */

function chunk(array, size) {
  if (size > array.length || size < 0) {
    return array;
  }

  var subArray = [];
  var doubleArray = [];
  var remainder = array.length % size;
  var k;
  for (var i = 0; i < Math.ceil(array.length / size); i++) {
    if (i * size < array.length - remainder) {
      for (k = i * size; k < (i + 1) * size; k++) {
        subArray.push(array[k]);
      }
    } else {
      for (var j = array.length - remainder; j < array.length; j++) {
        subArray.push(array[j]);
      }
    }
    doubleArray.push(subArray);
    subArray = [];
  }
  return doubleArray;
}
