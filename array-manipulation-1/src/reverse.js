/* eslint-disable no-unused-vars */

function reverse(array) {
  var result = [];

  for (var i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
}
