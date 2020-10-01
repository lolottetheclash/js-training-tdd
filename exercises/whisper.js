'use strict';

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

// Your code:
function whisper(str) {
  return '*' + str.toLowerCase() + '*';
}
//* Begin of tests
const assert = require('assert');
assert.strictEqual(typeof whisper, "function");
assert.strictEqual(whisper.length, 1);
assert.strictEqual(whisper('SALUT'), '*salut*');
assert.strictEqual(whisper(''), '**');
assert.strictEqual(whisper('SaluT'), '*salut*');

// assert.fail('You must write your own tests');
// End of tests */