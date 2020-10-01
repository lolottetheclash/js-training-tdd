'use strict';

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:
function keepFirst(str) {
  return str.slice(0, 2);
}

function keepLast(str) {
  return str.slice(str.length - 2, str.length);
}

function keepFirstLast(str) {
  return str.slice(2, 4);
}
//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof keepFirst, 'function');
assert.strictEqual(keepFirst('salut'), 'sa');
assert.strictEqual(keepFirst(''), '');;
assert.strictEqual(keepFirst('SaluT'), 'Sa');


assert.strictEqual(typeof keepLast, 'function');
assert.strictEqual(keepLast('salut'), 'ut');
assert.strictEqual(keepLast(''), '');;
assert.strictEqual(keepLast('SaluT'), 'uT');

assert.strictEqual(typeof keepFirstLast, 'function');
assert.strictEqual(keepFirstLast('salutations'), 'lu');
assert.strictEqual(keepFirstLast(''), '');;
assert.strictEqual(keepFirstLast('SalUTations'), 'lU');

// assert.strictEqual(typeof keepFirstLast, 'function');;
// assert.strictEqual(keepFirstLast('salut'),'saut')

// assert.fail('You must write your own tests');
// End of tests */
