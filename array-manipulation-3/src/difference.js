/* eslint-disable no-unused-vars */

function difference(first, second) {
  var differenceArray = [];

  var isSame = false;

  for (var i = 0; i < first.length; i++) {
    for (var k = 0; k < second.length; k++) {
      if (first[i] === second[k]) {
        second.splice(k, 1);
        isSame = true;
      }
    }

    if (isSame) {
      first.splice(i, 1);
    }
  }

  for (var j = 0; j < first.length; j++) {
    differenceArray.push(first[j]);
  }

  for (var o = 0; o < second.length; o++) {
    differenceArray.push(second[o]);
  }

  return differenceArray;
}
