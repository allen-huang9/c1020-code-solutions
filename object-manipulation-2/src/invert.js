/* eslint-disable no-unused-vars */

function invert(source) {
  var inverse = {};
  for (var keys in source) {
    inverse[source[keys]] = keys;
  }
  return inverse;
}
