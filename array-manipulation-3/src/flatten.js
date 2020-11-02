/* eslint-disable no-unused-vars */

function flatten(array) {
  var flatArray = [];

  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var k = 0; k < array[i].length; k++) {
        flatArray.push(array[i][k]);
      }
    } else {
      flatArray.push(array[i]);
    }
  }

  return flatArray;
}
