/* eslint-disable no-console, no-unused-vars, dot-notation */
var student = {
  firstName: 'Allen',
  lastName: 'Huang',
  age: 26
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('Value of fullName: ', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'stower';
console.log('Value of student.livesInIrvine: ', student.livesInIrvine);
console.log('Value of student.previousOccupation: ', student.previousOccupation);
console.log('Value of student: ', student);

var vehicle = {
  make: 'Lexus',
  model: 'GX',
  year: 2018
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = false;
console.log('Value of vehicle["color"]: ', vehicle['color']);
console.log('Value of vehicle["isConvertible"]: ', vehicle['isConvertible']);
console.log('Value of veheicle: ', vehicle);

var pet = {
  name: 'John',
  type: 'dog'
};

delete pet.name;
delete pet.type;
console.log('Value of pet: ', pet);
