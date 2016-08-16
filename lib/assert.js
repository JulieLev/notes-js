(function(exports) {
  function isTrue(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log("OK");
    }
  };

  function arrayContains(array, element) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === element) {
          console.log("OK");
        } else {
          throw new Error("Assertion failed: " + element + " not found in " + array);
        }
    }
  }
  exports.isTrue = isTrue;
  exports.arrayContains = arrayContains;
})(this);

// function contains(a, obj) {
//     for (var i = 0; i < a.length; i++) {
//         if (a[i] === obj) {
//             return true;
//         }
//     }
//     return false;
// }
