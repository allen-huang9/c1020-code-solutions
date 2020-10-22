/* eslint-disable no-unused-vars */

function truncate(length, string) {
  var truncString = '';
  for (var i = 0; i < length; i++) {
    truncString += string.charAt(i);
  }
  return truncString + '...';
}
