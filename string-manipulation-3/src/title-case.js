/* eslint-disable no-unused-vars */

function titleCase(string) {
  var wordsInTitle = string.split(' ');

  var newTitle = [];

  if (wordsInTitle[0].length !== 1) {
    newTitle.push(wordsInTitle[0].charAt(0).toUpperCase() + wordsInTitle[0].slice(1, wordsInTitle[0].length));
  } else {
    newTitle.push(wordsInTitle[0].charAt(0).toUpperCase());
  }

  var singleWords;

  for (var i = 1; i < wordsInTitle.length; i++) {
    if (wordsInTitle[i].toLowerCase().includes('javascript')) { // wordsInTitle[i].length > 3 &&
      newTitle.push('JavaScript' + wordsInTitle[i].slice(10, wordsInTitle[i].length));
    } else if (wordsInTitle[i].length > 3) {
      newTitle.push(concatSingleWord(wordsInTitle[i].split('')));
    } else if (wordsInTitle[i].toUpperCase() === 'API') {
      newTitle.push('API');
    } else if ((wordsInTitle[i].length < 4 && wordsInTitle[i].charAt(0).toLowerCase() === 'a') ||
      (wordsInTitle[i].length < 4 && wordsInTitle[i].charAt(0).toLowerCase() === 'b') ||
      (wordsInTitle[i].length < 4 && wordsInTitle[i].charAt(0).toLowerCase() === 'f') ||
      (wordsInTitle[i].length < 4 && wordsInTitle[i].charAt(0).toLowerCase() === 'i') ||
      (wordsInTitle[i].length < 4 && wordsInTitle[i].charAt(0).toLowerCase() === 'o') ||
      (wordsInTitle[i].length < 4 && wordsInTitle[i].charAt(0).toLowerCase() === 'p') ||
      (wordsInTitle[i].length < 4 && wordsInTitle[i].charAt(0).toLowerCase() === 't')) {
      newTitle.push(wordsInTitle[i].toLowerCase());
    } else if (wordsInTitle[i].length < 4) {
      newTitle.push(concatSingleWord(wordsInTitle[i]));
    }
  }

  var title = '';
  for (var j = 0; j < newTitle.length; j++) {
    if (newTitle[j].includes(':')) {

      var wordAfterSemiColon = newTitle[j + 1].split('');
      newTitle[j + 1] = concatSingleWord(wordAfterSemiColon);
    }
    if (j !== newTitle.length - 1) {
      title += newTitle[j] + ' ';
    } else {
      title += newTitle[j];
    }
  }

  return title;
}

function concatSingleWord(wordCharArray) {
  var newSingleWord = wordCharArray[0].toUpperCase();
  for (var k = 1; k < wordCharArray.length; k++) {
    if (wordCharArray[k] === '-') {
      wordCharArray[k + 1] = wordCharArray[k + 1].toUpperCase();
    }

    newSingleWord += wordCharArray[k];
  }
  return newSingleWord;
}
