
// Function checks is array(arr) an Array?
function isItArray (arr) {
  return Array.isArray(arr);
}

// Function abs returns the module of number x
function abs (x) {
  if (typeof x !== 'number' || x === undefined) return 'not a number';
  if (x > 0) {
    return x;
  } else {
    return -x;
  }
}

// Function FirstLetter does the first letter of the string CAPITAL
function FirstLetter(str) {
  if (typeof str !== 'string' || str === undefined) return 'not a string';
  return str[0].toUpperCase() + str.slice(1);
}

//Function triangle calculate the third side of the right-angled triangle
function triangle(a, b) {
  if (typeof a !== 'number' || a === undefined || a <= 0) return 'not a triangle';
  if (typeof b !== 'number' || b === undefined || b <= 0) return 'not a triangle';
  return +Math.sqrt(a ** 2 + b ** 2).toFixed(2);
}





function mult (a, b) {
  return a * b;
}
module.exports = {isItArray, abs, FirstLetter, triangle, mult};
