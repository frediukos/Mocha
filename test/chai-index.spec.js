const {expect} = require('chai');
const {isItArray, abs, firstLetter, triangle, mult} = require('../index.js');



// Function checks is array(arr) an Array?

describe('function isItArray', () => {
  it('should function isItArray returns true', () => {
    expect(isItArray([8, 15, 90, 3])).true;
  });

  it('should function isItArray returns true', () => {
    expect(isItArray([])).true;
  });

  it('should function isItArray returns true', () => {
    expect(isItArray(['8', 5, '90year', 3, undefined])).true;
  });

  it('should function isItArray returns true', () => {
    expect(isItArray([0, NaN, 708664534, -32, undefined])).true;
  });

  it('should function isItArray returns true', () => {
    expect(isItArray([NaN])).true;
  });

  it('should function isItArray returns true', () => {
    expect(isItArray(['one', 'two', 'three', ''])).true;
  });

  it('should function isItArray returns false, object is not an array', () => {
    expect(isItArray({})).false;
  });

  it('should function isItArray returns false, null is not an array', () => {
    expect(isItArray(null)).false;
  });

  it('should function isItArray returns false, Date is not an array', () => {
    expect(isItArray(new Date)).false;
  });
});



// Function abs returns the module of number x

describe('function abs', () => {
  it('should  return 0, function abs works correct', () => {
    expect(abs(0)).eq(0);
  });

  it('should  return 1, function abs works correct', () => {
    expect(abs(1)).eq(1);
  });

  it('should return 1, function abs works correct', () => {
    expect(abs(-1)).eq(1);
  });

  it('should return 678, function abs works not correct', () => {
    expect(abs(678)).not.eq(-678);
  });

  it('should return 46, function abs works not correct', () => {
    expect(abs(-46)).not.eq(-46);
  });

  it('should return \'not a number\' if x not a number', () => {
    expect(abs('678')).eq('not a number');
  });

  it('should retern \'not a number\' if x undefined', () => {
    expect(abs()).eq('not a number');
  });
}); 


// Function FirstLetter does the first letter of the string CAPITAL

describe('function firstLetter', () => {
  it('should returns str equal \'Frediuk Olena\' firstLetter works correct', () => {
    expect(firstLetter('frediuk Olena')).eq('Frediuk Olena');
  });

  it('should returns str equal \'Hello world\' firstLetter works NOT correct', () => {
    expect(firstLetter('hello world!')).not.eq('Hello world');
  });

  it('should be str as a string', () => {
    expect(firstLetter(456)).eq('not a string');
  });

  it('should be str as a string', () => {
    expect(firstLetter()).eq('not a string');
  });
});


//Function triangle calculate the third side of the right-angled triangle

describe('function triangle', () => {
  it('should return 7.62, function triangle works correct', () => {
    expect(triangle(7, 3)).eq(7.62);
  });

  it('should return 7.62, function triangle works correct', () => {
    expect(triangle(4, 3)).eq(5);
  });

  it('should a be a number, function triangle works correct', () => {
    expect(triangle(0, 7)).eq('not a triangle');
  });

  it('should return \'not a triangle\', function triangle works correct', () => {
    expect(triangle(54, 0)).eq('not a triangle');
  });

  it('should return \'not a triangle\', function triangle works correct', () => {
    expect(triangle(0, 0)).eq('not a triangle');
  });

  it('should return \'not a triangle\', function triangle works correct', () => {
    expect(triangle(-7, 15)).eq('not a triangle');
  });

  it('should return \'not a triangle\', function triangle works correct', () => {
    expect(triangle(17, -15)).eq('not a triangle');
  });

  it('should return \'not a triangle\', function triangle works correct', () => {
    expect(triangle(-35, -43)).eq('not a triangle');
  });

  it('should function triangle works only with numbers, a is a string now,', () => {
    expect(triangle('7f', 3)).eq('not a triangle');
  });

  it('should function triangle works only with numbers, b is a string now', () => {
    expect(triangle(7, 'num')).eq('not a triangle');
  });

  it('should function triangle works only with numbers, a is an array now', () => {
    expect(triangle([4, 6, 8], 3)).eq('not a triangle');
  });

  it('should function triangle works only with numbers, b is an array now', () => {
    expect(triangle(7, [6, 'f'])).eq('not a triangle');
  });
});


it('should function mult works correct', () => {
  expect(mult(2, 3)).eq(6);
});

it('should function mult works not correct', () => {
  expect(mult(2, 3)).not.eq(0);
});
