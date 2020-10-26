/* eslint-disable no-unused-vars */

function isAnagram(firstString, secondString) {
  var tempArray1 = firstString.split(' ');
  var tempArray2 = secondString.split(' ');

  var newFirstString = stringConcat(tempArray1);
  var newSecondString = stringConcat(tempArray2);

  var charArray = newSecondString.split('');
  var k;
  for (var i = 0; i < newFirstString.length; i++) {
    for (k = 0; k < charArray.length; k++) {

      if (newFirstString[i] === charArray[k]) {
        charArray.splice(k, 1);
        break;
      }
    }

  }
  if (charArray.length === 0) return true;
  return false;
}

function stringConcat(array) {
  var newString = '';
  for (var i = 0; i < array.length; i++) {
    newString += array[i];
  }
  return newString;
}
