const MORSE_CODE = {
  "-.-.--": "!",
  ".-..-.": '"',
  "...-..-": "$",
  ".-...": "&",
  ".----.": "'",
  "-.--.": "(",
  "-.--.-": ")",
  ".-.-.": "+",
  "--..--": ",",
  "-....-": "-",
  ".-.-.-": ".",
  "-..-.": "/",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "---...": ":",
  "-.-.-.": ";",
  "-...-": "=",
  "..--..": "?",
  ".--.-.": "@",
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "..--.-": "_",
  "...---...": "SOS",
  "": " ",
};
/**
 * @param {string} morseCode input
 */
decodeMorse = function (morseCode) {
  let cutMorse = morseCode.trim().split("   "); // array of words
  let phrase = cutMorse.map(breakWord); // array of broken words, where each word is array of letters in morse

  let transMorse = phrase.map(translateWord);

  return transMorse.join(" ");
};
/**
 * @param {string} word
 * @returns {string[]}
 */
function breakWord(word) {
  return word.split(" ");
}
/**
 * @param {string[]} word
 */
function translateWord(word) {
  return word.map(translate).join("");
}
function translate(letter) {
  return MORSE_CODE[letter];
}
const { assert } = require("chai");

describe("Sample tests", function () {
  it("Example from description", () => {
    assert.strictEqual(decodeMorse(".... . -.--   .--- ..- -.. ."), "HEY JUDE");
  });

  it("Leading and trailing spaces", () => {
    assert.strictEqual(decodeMorse("   .... . -.--   "), "HEY");
  });
});
