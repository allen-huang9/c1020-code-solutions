/* eslint-disable no-unused-vars */

function includes(array, value) {
  var i = 0;
  while (i !== array.length) {
    if (array[i] === value) return true;
    i++;
  }
  return false;
}
