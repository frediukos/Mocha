const assert = require('assert');
const {isItArray, abs, FirstLetter, mult} = require('../index.js');


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

    it('should function isItArray returns false', () => {
        assert.equal(isItArray({}), false);
    });

    it('should function isItArray returns false', () => {
        assert.equal(isItArray(null), false);
    });

    it('should function isItArray returns false', () => {
        assert.equal(isItArray(new Date), false);
    });

});


describe('function abs', () => {
    it('should function abs works correct 0', () => {
        assert.equal(abs(0), 0);
    });

    it('should function abs works correct 1', () => {
        assert.equal(abs(1), 1);
    });

    it('should function abs works correct -1', () => {
        assert.equal(abs(-1), 1);
    });

    it('should function abs works not correct 678', () => {
        assert.notEqual(abs(678), -678);
    });

    it('should function abs works not correct 46', () => {
        assert.notEqual(abs(-46), -46);
    });

    it('should be \'not a number\' if x not a number', () => {
        assert.equal(abs('678'), 'not a number');
    });

    it('should be \'not a number\' if x undefined', () => {
        assert.equal(abs(), 'not a number');
    });

});


describe('function FirstLetter', () => {
    it('should returns str equal \'Frediuk Olena\' FirstLetter works correct', () => {
        assert.equal(FirstLetter('frediuk Olena'), 'Frediuk Olena');
    });

    it('should returns str equal \'Hello world\' FirstLetter works NOT correct', () => {
        assert.notEqual(FirstLetter('hello world!'), 'hello world');
    });

    it('should be \'not a string\' if str not a string', () => {
        assert.equal(FirstLetter(456), 'not a string');
    });

    it('should be \'not a string\' if str undefined', () => {
        assert.equal(FirstLetter(), 'not a string');
    });

});







it('should function mult works correct', () => {
    assert.equal(mult(2, 3), 6);
});

it('should function mult works not correct', () => {
    assert.notEqual(mult(2, 3), 0);
});