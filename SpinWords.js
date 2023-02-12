/**
 * @param {string} string event
 */
function spinWords(string) {
  const myArray = string.split(" ");
  let newArray = myArray.map(transform); // map returns result of func, (forEach not)

  return newArray.join(" ");
}

function transform(element) {
  if (element.length >= 5) {
    return element.split("").reverse().join("");
  } else {
    return element;
  }
}

/* Better solution
function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}
*/
console.log(spinWords("Welcome"));

// Tests from codewars:
const chai = require("chai");
const assert = chai.assert;
assert.strictEqual(spinWords("Welcome"), "emocleW");
assert.strictEqual(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
assert.strictEqual(spinWords("This is a test"), "This is a test");
assert.strictEqual(spinWords("This is another test"), "This is rehtona test");
assert.strictEqual(
  spinWords("You are almost to the last test"),
  "You are tsomla to the last test"
);
assert.strictEqual(
  spinWords("Just kidding there is still one more"),
  "Just gniddik ereht is llits one more"
);
assert.strictEqual(
  spinWords("Seriously this is the last one"),
  "ylsuoireS this is the last one"
);
