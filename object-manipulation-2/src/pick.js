/* eslint-disable no-unused-vars */

function pick(source, keys) {
  var sharedKeys = {};
  var i;

  for (var objectKey in source) {
    for (i = 0; i < keys.length; i++) {
      if (objectKey === keys[i] && source[objectKey] !== undefined) {
        sharedKeys[objectKey] = source[objectKey];
        break;
      }
    }
  }
  return sharedKeys;
}
