function isItArray (arr) {
    return Array.isArray(arr);
}

function abs (x) {
    if (typeof x !== 'number' || x === undefined) return 'not a number';
    if (x > 0) {
      return x;
    } else {
        return -x;
      }
}

function FirstLetter(str) {
    if (typeof str !== 'string' || str === undefined) return 'not a string';
    return str[0].toUpperCase() + str.slice(1);
}

function mult (a, b) {
    return a * b;
}
module.exports = {isItArray, abs, FirstLetter, mult};
