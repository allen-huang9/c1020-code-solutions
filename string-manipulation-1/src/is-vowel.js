/* eslint-disable no-unused-vars */

function isVowel(character) {
  var lowerCase = character.toLowerCase();
  if (lowerCase === 'a' || lowerCase === 'e' || lowerCase === 'i' ||
  lowerCase === 'o' || lowerCase === 'u') {
    return true;
  }
  return false;
}
