/* eslint-disable no-unused-vars */

function reverseWord(word) {
  var temp;
  var middleIndex = Math.floor(word.length / 2);
  var array = [];
  var newWord = '';

  for (var k = 0; k < word.length; k++) {
    array.push(word.charAt(k));
  }

  for (var i = 0; i < middleIndex; i++) {
    temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }

  for (var j = 0; j < word.length; j++) {
    newWord += array[j];
  }

  return newWord;
}
