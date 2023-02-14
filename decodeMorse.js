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
};
/**
 * @param {string} morseCode input
 */
decodeMorse = function (morseCode) {
  let cutMorse = morseCode.trim().split(" ");
  let transMorse = cutMorse.map(translate);
  return transMorse.join("");
};
/**
 * @param {string} letter
 */
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
