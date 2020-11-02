/* eslint-disable no-unused-vars */

function equal(first, second) {

  if (first.length !== second.length) {
    return false;
  }

  var arrayLengths = first.length;
  for (var i = 1; i < arrayLengths; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
