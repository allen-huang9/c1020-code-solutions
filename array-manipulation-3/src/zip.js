/* eslint-disable no-unused-vars */

function zip(first, second) {
  var shortestLength;

  if (first.length > second.length) {
    shortestLength = second.length;
  } else {
    shortestLength = first.length;
  }

  var array = [];
  var subArray = [];
  for (var i = 0; i < shortestLength; i++) {
    subArray.push(first[i]);
    subArray.push(second[i]);
    array.push(subArray);
    subArray = [];
  }

  return array;
}
