/* eslint-disable no-unused-vars */

function numVowels(string) {
  var counter = 0;
  var lowerCase;

  for (var i = 0; i < string.length; i++) {
    lowerCase = string[i].toLowerCase();
    if (lowerCase === 'a' || lowerCase === 'e' || lowerCase === 'i' ||
    lowerCase === 'o' || lowerCase === 'u') {
      counter++;
    }
  }
  return counter;
}
