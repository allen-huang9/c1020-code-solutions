/* eslint-disable no-unused-vars */

function defaults(target, source) {

  var keysInTarget = [];
  var shared = false;
  var i = 0;

  for (var targetKeys in target) {
    keysInTarget.push(targetKeys);
  }

  if (keysInTarget.length > 0) {
    for (var objectKey in source) {
      while (shared === false && i < keysInTarget.length) {
        if (objectKey === keysInTarget[i]) {
          shared = true;
        }
        i++;
      }
      if (shared === false && source[objectKey] !== undefined) {
        target[objectKey] = source[objectKey];
      }
      shared = false;
    }
  } else {
    for (var objKey in source) {
      target[objKey] = source[objKey];
    }
  }

  return target;
}
