/* eslint-disable no-unused-vars */

function capitalizeWords(string) {
  var list = string.split(' ');
  var altWord;
  var result = '';

  for (var i = 0; i < list.length; i++) {
    if (i !== list.length - 1) {
      altWord = list[i].charAt(0).toUpperCase() + list[i].slice(1).toLowerCase() + ' ';
    } else {
      altWord = list[i].charAt(0).toUpperCase() + list[i].slice(1).toLowerCase();
    }

    result += altWord;
  }
  return result;
}
