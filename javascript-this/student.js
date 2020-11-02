/* exported student */

var student = {
  firstName: 'Douglas',
  lastName: 'Crockford',
  subject: 'JavaScript',

  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },

  getIntroduction: function () {
    var sentence = 'Hello, my name is ' + this.firstName + ' ' +
    this.lastName + ' and I am studying ' + this.subject + '.';

    return sentence;
  }
};
