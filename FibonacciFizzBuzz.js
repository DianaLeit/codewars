var fibsFizzBuzz = function (n) {
  let fib = [1, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  const fizzbuzz = fib.map(putFizzBuzz);
  return fizzbuzz;
  
};
function putFizzBuzz(value) {
  if (value % 3 == 0 && value % 5 == 0) {
    return (value = "FizzBuzz");
  } else if (value % 3 == 0) {
    return (value = "Fizz");
  } else if (value % 5 == 0) {
    return (value = "Buzz");
  } else return value;
}
//
//
//Tests from Codewars
const Test = require("@codewars/test-compat");

describe("Fibonacci's FizzBuzz", function () {
  it("should work for a value of 2", function () {
    Test.assertSimilar(fibsFizzBuzz(2), [1, 1]);
  });

  it("should work for a value of 5", function () {
    Test.assertSimilar(fibsFizzBuzz(5), [1, 1, 2, "Fizz", "Buzz"]);
  });

  it("should work for a value of 20", function () {
    Test.assertSimilar(fibsFizzBuzz(20), [
      1,
      1,
      2,
      "Fizz",
      "Buzz",
      8,
      13,
      "Fizz",
      34,
      "Buzz",
      89,
      "Fizz",
      233,
      377,
      "Buzz",
      "Fizz",
      1597,
      2584,
      4181,
      "FizzBuzz",
    ]);
  });
});
