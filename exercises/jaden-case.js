'use strict';

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

// Your code:
function jadenCase(arg) {
  let arr = arg.split(' ');
  let result = arr.map(word => {
    if (typeof word[0] === 'string') {
      return word[0].toUpperCase() + word.slice(1, word.length);
    }
    return word;
  });
  return result.join(' ');
}
//* Begin of tests
const assert = require('assert');
assert.strictEqual(typeof jadenCase, 'function');
assert.strictEqual(jadenCase.length, 1);
assert.strictEqual(jadenCase("How are you ?"), "How Are You ?");
assert.strictEqual(jadenCase("salut les futurs wilders"), "Salut Les Futurs Wilders");
assert.strictEqual(jadenCase(""), "");

// assert.fail('You must write your own tests');
// End of tests */
