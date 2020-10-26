/* eslint-disable no-unused-vars */

function isPalindromic(string) {
  var stringLength = Math.floor(string.length / 2);
  var newString = string;

  if (string.includes(' ')) {
    var stringArray = string.split(' ');
    newString = '';

    for (var k = 0; k < stringArray.length; k++) {
      newString += stringArray[k];
    }

    stringLength = newString.length;
  }

  for (var i = 0; i < stringLength; i++) {
    if (newString[i] !== newString[newString.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
