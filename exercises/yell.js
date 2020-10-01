'use strict';

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

// Your code:
function yell(str) {
  return str.toUpperCase();
}
//* Begin of tests
const assert = require('assert');
assert.strictEqual(typeof yell, "function");
assert.strictEqual(yell.length, 1);
assert.strictEqual(yell('salut'), 'SALUT');
assert.strictEqual(yell('SALUT'), 'SALUT');
assert.strictEqual(yell(''), '');

// assert.fail('You must write your own tests');
// End of tests */
