/* eslint-disable no-unused-vars */

function capitalize(word) {
  var alteredWord = '';
  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      alteredWord += word.charAt(i).toUpperCase();
    } else {
      alteredWord += word.charAt(i).toLowerCase();
    }
  }
  return alteredWord;
}
