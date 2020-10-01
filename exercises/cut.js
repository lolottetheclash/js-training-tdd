'use strict';

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code:
function cutFirst(str) {
  str = str.split('');
  str.splice(0, 2);
  ;
  return str.join('');
}

function cutLast(str) {
  str = str.split('');
  str.splice(str.length - 2, 2);
  ;
  return str.join('');
}
function cutFirstLast(str) {
  return cutLast(cutFirst(str));
}

//* Begin of tests
const assert = require('assert');
assert.strictEqual(typeof cutFirst, "function");
assert.strictEqual(cutFirst.length, 1);
assert.strictEqual(cutFirst('salut'), 'lut');
assert.strictEqual(cutFirst(''), (''));

assert.strictEqual(typeof cutLast, "function");
assert.strictEqual(cutLast.length, 1);
assert.strictEqual(cutLast('salut'), 'sal');
assert.strictEqual(cutLast(''), (''));

assert.strictEqual(typeof cutFirstLast, "function");
assert.strictEqual(cutFirstLast.length, 1);
assert.strictEqual(cutFirstLast('salutations'), 'lutatio');
assert.strictEqual(cutFirstLast(''), (''));

// assert.fail('You must write your own tests');
// End of tests */
