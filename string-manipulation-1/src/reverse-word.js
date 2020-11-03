/* eslint-disable no-unused-vars */

function reverseWord(word) {
  var newWord = '';

  for (var i = word.length - 1; i >= 0; i--) {
    newWord += word.charAt(i);
  }

  return newWord;
}
