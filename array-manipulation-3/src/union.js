/* eslint-disable no-unused-vars */

function union(first, second) {
  var unionArray = [];

  for (var i = 0; i < first.length; i++) {
    for (var k = 0; k < second.length; k++) {
      if (first[i] === second[k]) {
        second.splice(k, 1);
      }
    }
  }

  for (var j = 0; j < first.length; j++) {
    unionArray.push(first[j]);
  }

  for (var o = 0; o < second.length; o++) {
    unionArray.push(second[o]);
  }

  return unionArray;
}
