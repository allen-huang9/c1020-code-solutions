/* eslint-disable no-console, no-unused-vars, dot-notation */
var colors = ['red', 'white', 'blue'];

console.log('value of colors[0]: ', colors[0]);
console.log('value of colors[1]: ', colors[1]);
console.log('value of colors[2]: ', colors[2]);

console.log('America is ' + colors[0] + ', ' + colors[1] + ', ' + colors[2]);

colors[2] = 'green';
console.log('Mexico is ' + colors[0] + ', ' + colors[1] + ', ' + colors[2]);

console.log('value of colors', colors);

var students = ['Alvin', 'Chris', 'Jane', 'George'];
var numberOfStudent = students.length;
console.log('There are ' + numberOfStudent + ' students in the class.');

var lastIndex = numberOfStudent - 1;
var lastStudent = students[lastIndex];
console.log('The last student in the array is ' + lastStudent);
console.log('value of students: ', students);
