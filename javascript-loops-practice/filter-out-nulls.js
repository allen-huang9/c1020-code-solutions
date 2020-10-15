/* exported filterOutNulls */

function filterOutNulls(values) {
  var noNull = [];

  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      noNull.push(values[i]);
    }
  }

  return noNull;
}
