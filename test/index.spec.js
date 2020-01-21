const assert = require('assert');
const {isItArray, abs, firstLetter, triangle, mult} = require('../index.js');



// Function checks is array(arr) an Array?

describe('function isItArray', () => {
  it('should function isItArray returns true', () => {
    assert.equal(isItArray([8, 15, 90, 3]), true);
  });

  it('should function isItArray returns true', () => {
    assert.equal(isItArray([]), true);
  });

  it('should function isItArray returns true', () => {
    assert.equal(isItArray(['8', 5, '90year', 3, undefined]), true);
  });

  it('should function isItArray returns true', () => {
    assert.equal(isItArray([0, NaN, 708664534, -32, undefined]), true);
  });

  it('should function isItArray returns true', () => {
    assert.equal(isItArray([NaN]), true);
  });

  it('should function isItArray returns true', () => {
    assert.equal(isItArray(['one', 'two', 'three', '']), true);
  });

  it('should function isItArray returns false, object is not an array', () => {
    assert.equal(isItArray({}), false);
  });

  it('should function isItArray returns false, null is not an array', () => {
    assert.equal(isItArray(null), false);
  });

  it('should function isItArray returns false, Date is not an array', () => {
    assert.equal(isItArray(new Date), false);
  });

});



// Function abs returns the module of number x

describe('function abs', () => {
  it('should  return 0, function abs works correct', () => {
    assert.equal(abs(0), 0);
  });

  it('should  return 1, function abs works correct', () => {
    assert.equal(abs(1), 1);
  });

  it('should return 1, function abs works correct', () => {
    assert.equal(abs(-1), 1);
  });

  it('should return 678, function abs works not correct', () => {
    assert.notEqual(abs(678), -678);
  });

  it('should return 46, function abs works not correct', () => {
    assert.notEqual(abs(-46), -46);
  });

  it('should return \'not a number\' if x not a number', () => {
    assert.equal(abs('678'), 'not a number');
  });

  it('should retern \'not a number\' if x undefined', () => {
    assert.equal(abs(), 'not a number');
  });

});


// Function FirstLetter does the first letter of the string CAPITAL

describe('function firstLetter', () => {
  it('should returns str equal \'Frediuk Olena\' firstLetter works correct', () => {
    assert.equal(firstLetter('frediuk Olena'), 'Frediuk Olena');
  });

  it('should returns str equal \'Hello world\' firstLetter works NOT correct', () => {
    assert.notEqual(firstLetter('hello world!'), 'hello world');
  });

  it('should be \'not a string\' if str not a string', () => {
    assert.equal(firstLetter(456), 'not a string');
  });

  it('should be \'not a string\' if str undefined', () => {
    assert.equal(firstLetter(), 'not a string');
  });

});


//Function triangle calculate the third side of the right-angled triangle

describe('function triangle', () => {
  it('should return 7.62, function triangle works correct', () => {
    assert.equal(triangle(7, 3), 7.62);
  });

  it('should return 7.62, function triangle works correct', () => {
    assert.equal(triangle(4, 3), 5);
  });

  it('should a be a number, function triangle works correct', () => {
    assert.equal(triangle(0, 7), 'not a triangle');
  });

  it('should return \'not a triangle\', function triangle works correct', () => {
    assert.equal(triangle(54, 0), 'not a triangle');
  });

  it('should return \'not a triangle\', function triangle works correct', () => {
    assert.equal(triangle(0, 0), 'not a triangle');
  });

  it('should return \'not a triangle\', function triangle works correct', () => {
    assert.equal(triangle(-7, 15), 'not a triangle');
  });

  it('should return \'not a triangle\', function triangle works correct', () => {
    assert.equal(triangle(17, -15), 'not a triangle');
  });

  it('should return \'not a triangle\', function triangle works correct', () => {
    assert.equal(triangle(-35, -43), 'not a triangle');
  });

  it('should function triangle works only with numbers, a is a string now,', () => {
    assert.equal(triangle('7f', 3), 'not a triangle');
  });

  it('should function triangle works only with numbers, b is a string now', () => {
    assert.equal(triangle(7, 'num'), 'not a triangle');
  });

  it('should function triangle works only with numbers, a is an array now', () => {
    assert.equal(triangle([4, 6, 8], 3), 'not a triangle');
  });

  it('should function triangle works only with numbers, b is an array now', () => {
    assert.equal(triangle(7, [6, 'f']), 'not a triangle');
  });

});



it('should function mult works correct', () => {
  assert.equal(mult(2, 3), 6);
});

it('should function mult works not correct', () => {
  assert.notEqual(mult(2, 3), 0);
});