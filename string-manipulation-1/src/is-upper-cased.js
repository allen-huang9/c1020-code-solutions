/* eslint-disable no-unused-vars */

function isUpperCased(word) {
  var lowerCase;
  for (var i = 0; i < word.length; i++) {
    lowerCase = word[i].toLowerCase();
    if (word[i] === lowerCase && lowerCase.charCodeAt(0) >= 97 && lowerCase.charCodeAt(0) <= 122) {
      return false;
    }
  }
  return true;
}
