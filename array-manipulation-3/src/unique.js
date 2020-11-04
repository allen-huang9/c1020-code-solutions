/* eslint-disable no-unused-vars */

function unique(array) {
  var uniqueArray = [];

  if (array.length === 0) {
    return uniqueArray;
  }

  var isUnique = true;

  uniqueArray.push(array[0]);
  for (var i = 0; i < array.length; i++) {
    for (var k = 0; k < uniqueArray.length; k++) {
      if (array[i] === uniqueArray[k]) {
        isUnique = false;
        break;
      }
    }

    if (isUnique) {
      uniqueArray.push(array[i]);
    }
    isUnique = true;
  }

  return uniqueArray;
}
