////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(num1, num2) {
  if (num1 < num2) {
    return num1
  } if (num1 > num2) {
    return num2
  } else {
    return 0
  }
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(N) {
  if (N >= 0) {
    if (N % 2 === 0) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, char) {
  if (string.includes(char)) {
    var iterator = string.matchAll(char);
    var count = Array.from(iterator);
    return count.length;
  } else {
    return 0;
  }
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string) {
  if (string.includes('B')) {
    var bArr = string.match(/B/g);
    return bArr.length
  } else {
    return 0
  }

}
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};