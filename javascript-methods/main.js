
var x = 10;
var y = 15;
var z = 25;
var maximumValue = Math.max(x, y, z);
console.log('maximumValue: ', maximumValue);

var heroes = ['Batman', 'Iron man', 'Green Lantern', 'Thor'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex: ', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero: ', randomHero);

var library = [
  {
    title: "The Warrior's Heir",
    author: 'Cinda Williams Chima'
  },
  {
    title: "The Wizard's Heir",
    author: 'Cinda Williams Chima'
  },
  {
    title: "The Dragon's Heir",
    author: 'Cinda Williams Chima'
  }];
var lastBook = library.pop();
console.log('lastBook: ', lastBook);

var firstBook = library.shift();
console.log('firstBook: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library: ', library);

var fullName = 'Allen Huang';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName: ', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName: ', sayMyName);
