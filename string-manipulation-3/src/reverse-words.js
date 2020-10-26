/* eslint-disable no-unused-vars */

function reverseWords(string) {
  var words = string.split(' ');
  var reverseString = '';

  for (var i = 0; i < words.length; i++) {
    if (i !== words.length - 1) {
      reverseString = reverseString + reverse(words[i]) + ' ';
    } else {
      reverseString = reverseString + reverse(words[i]);
    }
  }
  return reverseString;
}

function reverse(string) {
  var newWord = '';
  var charArray = string.split('');
  var temp = '';
  for (var i = 0; i < Math.floor(string.length / 2); i++) {
    temp = charArray[i];
    charArray[i] = charArray[string.length - 1 - i];
    charArray[string.length - 1 - i] = temp;
  }

  for (var k = 0; k < charArray.length; k++) {
    newWord += charArray[k];
  }
  return newWord;
}
