/* eslint-disable no-unused-vars */

function getValues(object) {
  var values = [];

  for (var objKeys in object) {
    values.push(object[objKeys]);
  }
  return values;
}
