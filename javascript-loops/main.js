/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen() {
  var currentNumber;
  var numbers = [];

  for (currentNumber = 1; currentNumber <= 10; currentNumber++) {
    numbers.push(currentNumber);
  }

  return numbers;
}

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber;

  for (currentNumber = 2; currentNumber <= 20; currentNumber += 2) {
    evenNumbers.push(currentNumber);
  }

  return evenNumbers;
}

function repeatWord(word, times) {
  var count;
  var repeated = '';

  for (count = 1; count <= times; count++) {
    repeated += word;
  }

  return repeated;
}

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

function doubleAll(numbers) {
  var doubled = [];

  for (var i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }

  return doubled;
}

function getKeys(object) {
  var keys = [];

  for (var property in object) {
    keys.push(property);
  }

  return keys;
}

function getValues(object) {
  var values = [];
  for (var property in object) {
    values.push(object[property]);
  }

  return values;
}
