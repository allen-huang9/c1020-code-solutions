/* eslint-disable no-unused-vars */

function swapChars(firstIndex, secondIndex, string) {
  var charArray = string.split('');

  var temp = charArray[firstIndex];
  charArray[firstIndex] = charArray[secondIndex];
  charArray[secondIndex] = temp;

  var alteredString = '';
  for (var i = 0; i < charArray.length; i++) {
    alteredString += charArray[i];
  }
  return alteredString;
}
