const romanNumber = require('../src');
const assert = require('assert');

const MESSAGE_VALUE_MUST_BE_VALID_NUMBER = 'the value should be a valid number';

const MESSAGE_VALUE_MUST_BE_WITHIN_RANGE = 'the number needs to be an integer in a range between 1 and 10';

suite('romanNumber', () => {
	test('1 => I', () => {
		assert.equal(romanNumber(1), 'I');
	});

	test('2 => II', () => {
		assert.equal(romanNumber(2), 'II');
	});

	test('3 => III', () => {
		assert.equal(romanNumber(3), 'III');
	});

	test('4 => IV', () => {
		assert.equal(romanNumber(4), 'IV');
	});

	test('5 => V', () => {
		assert.equal(romanNumber(5), 'V');
	});

	test('6 => VI', () =>{
		assert.equal(romanNumber(6), 'VI');
	});

	test('7 => VII', () => {
		assert.equal(romanNumber(7), 'VII');
	});

	test('8 => VIII', () => {
		assert.equal(romanNumber(8), 'VIII');
	});

	test('9 => IX', () => {
		assert.equal(romanNumber(9), 'IX');
	});

	test('10 => X', () => {
		assert.equal(romanNumber(10), 'X');
	});

/*	test('string => throw error', () => {

		assert.throws(() => romanNumber('10'), MESSAGE_VALUE_MUST_BE_VALID_NUMBER);
	});

	test('number not between 1 & 10 => error message', () => {
		assert.throws(() => (romanNumber(11), MESSAGE_VALUE_MUST_BE_WITHIN_RANGE));
		assert.throws(() => (romanNumber(0), MESSAGE_VALUE_MUST_BE_WITHIN_RANGE));
	});

	test('object => error message', () => {
		assert.throws(()=>(romanNumber({ number: 1 }), MESSAGE_VALUE_MUST_BE_VALID_NUMBER));
	});

	test('undefined => error message', () => {
		assert.throws(()=>(romanNumber(undefined), MESSAGE_VALUE_MUST_BE_VALID_NUMBER));
	});

	test('array => error message', () => {
		assert.throws( () =>(romanNumber([1]), MESSAGE_VALUE_MUST_BE_VALID_NUMBER));
	});

	test('null => error message', () => {
		assert.throws( () => (romanNumber(null), MESSAGE_VALUE_MUST_BE_VALID_NUMBER));
	});

	test('NaN => error message', () => {
		assert.throws ( () => (romanNumber(NaN), MESSAGE_VALUE_MUST_BE_WITHIN_RANGE));
	});

	test('operations, if 3 + 2 => result = 5', () => {
		assert.equal(romanNumber(3+2), 'V');
	});

	test('function result, if 3 + 2 => result = 5', () => {
		function sum(n1, n2) {
			return n1 + n2;
		}
		assert.equal(romanNumber(sum(2,3)), 'V');
	});
*/
}); 