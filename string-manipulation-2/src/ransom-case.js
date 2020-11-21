/* eslint-disable no-unused-vars */

function ransomCase(string) {
  var upperCase = false;
  var result = '';

  for (var i = 0; i < string.length; i++) {
    if (upperCase) {
      result += string.charAt(i).toUpperCase();
    } else {
      result += string.charAt(i).toLowerCase();
    }
    upperCase = !upperCase;
  }
  return result;
}
