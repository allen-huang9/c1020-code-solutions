/* eslint-disable no-unused-vars */

function isLowerCased(word) {
  var upperCase;
  for (var i = 0; i < word.length; i++) {
    upperCase = word[i].toUpperCase();
    if (word[i] === upperCase && upperCase.charCodeAt(0) >= 65 && upperCase.charCodeAt(0) <= 90) {
      return false;
    }
  }
  return true;
}
