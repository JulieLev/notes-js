(function(exports) {
  function isTrue(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log("OK");
    }
  };

  function arrayContains(element, array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === element) {
          console.log("OK");
        } else {
          throw new Error("Assertion failed: " + element + " not found in array: " + array);
        }
    }
  }

  function arrayLength(array, length) {
    if (array.length === length) {
      console.log("OK");
    } else {
      throw new Error("Assertion failed: array does not contain " + length + " elements");
    }
  }

  exports.isTrue = isTrue;
  exports.arrayContains = arrayContains;
  exports.arrayLength = arrayLength;
})(this);
