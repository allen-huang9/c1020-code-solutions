/* eslint-disable no-unused-vars */

function isPalindromic(string) {
  var stringLength = Math.floor(string.length / 2);
  var newString = string;

  if (string.includes(' ')) {
    var stringArray = string.split(' ');
    newString = stringArray.join('');

    stringLength = Math.floor(newString.length / 2);
  }

  for (var i = 0; i < stringLength; i++) {
    if (newString[i] !== newString[newString.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
