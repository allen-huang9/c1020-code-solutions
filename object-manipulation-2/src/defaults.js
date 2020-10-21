/* eslint-disable no-unused-vars */

function defaults(target, source) {

  var keysIntarget = [];
  var notShared = {};
  var shared = false;
  var i;

  for(var targetKeys in )

  for (var objectKey in source) {
    for (i = 0; i < keys.length; i++) {
      if (objectKey === keys[i]) {
        shared = true;
      }
    }
    if (shared === false && source[objectKey] !== undefined) {
      notShared[objectKey] = source[objectKey];
    }
    shared = false;
  }


}
