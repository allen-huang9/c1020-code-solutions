/* eslint-disable no-unused-vars */

function intersection(first, second) {

  var intersectArray = [];

  for (var i = 0; i < first.length; i++) {
    for (var k = 0; k < second.length; k++) {
      if (first[i] === second[k]) {
        intersectArray.push(first[i]);
        break;
      }
    }
  }

  return intersectArray;
}
