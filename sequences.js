function sequence(n) {
  let obj = [];
  for (let i = 0; i < n; i++) {
    obj[i] = i + 1;
  }
  return obj;
}

function isEven(n) {
  return n % 2 == 0;
  // if (n % 2 == 0) {
  //   return true;
  // } else {
  //   return false;
  // }
}

function returnEven(n) {
  let obj = [];
  for (let i = 2; i <= n; i = i + 2) {
    obj.push(i);
  }
  return obj;
}

function contains(arr, elem) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (elem === element) {
      return true;
    }
  }
  return false;
}

function indexOf(arr, elem) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (elem == element) {
      return i;
    }
  }
  return null;
}

function last(arr, def) {
  if (arr.length == 0) {
    return def;
  }
  return arr[arr.length - 1];
}

function tail(arr) {
  let obj = [];
  for (let i = 1; i < arr.length; i++) {
    obj.push(arr[i]);
  }
  return obj;
}
function reverse(arr) {
  let obj = [];
  for (let i = 0; i < arr.length; i++) {
    obj.push(arr[arr.length - i - 1]);
  }
  return obj;
}

function map(arr, func) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    arr2.push(func(el));
  }
  return arr2;
}

function filter(arr, func) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (func(el)) {
      arr2.push(el);
    }
  }
  return arr2;
}

function middle(arr) {
  if (arr.length % 2 !== 0) {
    return arr[Math.floor(arr.length / 2)];
  }
  return "doesn`t have middle";
}

function min(arr) {
  let minNumber = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minNumber) {
      minNumber = arr[i];
    }
  }
  return minNumber;
}

function min2(a, b) {
  if (a < b) {
    return a;
  }
  return b;
}

function fac(n) {
  if (n == 1) {
    return 1;
  }
  return fac(n - 1) * n;
}

function double(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    result.push(element * 2);
  }
  return result;
}

function indexes(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(i);
  }
  return result;
}

function count(func, arr) {
  let result = 0;
  arr.forEach((n) => {
    if (func(n)) {
      result++;
    }
  });
  return result;
}

function mean2(a, b) {
  return (a + b) / 2;
}

function mean3(a, b, c) {
  return (a + b + c) / 3;
}

function mean(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    sum += el;
  }
  return sum / arr.length;
}

function applyMask(numbers, bools) {
  let res = [];
  for (let i = 0; i < bools.length; i++) {
    if (bools[i]) {
      res.push(numbers[i]);
    }
  }
  return res;
}
function hamming(word1, word2) {
  let sum = 0;
  let shln;
  if (word1.length > word2.length) {
    shln = word2.length;
  } else {
    shln = word1.length;
  }
  for (let i = 0; i < shln; i++) {
    if (word1[i] !== word2[i]) {
      sum++;
    }
  }
  if (word1.length > word2.length) {
    sum += word1.length - word2.length;
  } else {
    sum += word2.length - word1.length;
  }
  return sum;
}

function intersperse(arr, elem) {
  let interArray = [];
  for (let i = 0; i < arr.length - 1; i++) {
    const el = arr[i];
    interArray.push(el, elem);
  }
  interArray.push(arr[arr.length - 1]);
  return interArray;
}

function merge(arr1, arr2) {
  let res = [];
  for (let i = 0; i < arr1.length; i++) {
    res.push(arr1[i], arr2[i]);
  }
  return res;
}

function isSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
const chai = require("chai");
const assert = chai.assert;

describe("Sequence tests", function () {
  it("test_Sequence", () => {
    assert.deepEqual(sequence(5), [1, 2, 3, 4, 5]);
  });
  it("test_IsEven", () => {
    assert.equal(isEven(5), false);
    assert.equal(isEven(6), true);
  });
  it("test_ReturnEven", () => {
    assert.deepEqual(returnEven(10), [2, 4, 6, 8, 10]);
  });
  it("test_Contains", () => {
    assert.equal(contains([1, 2, 3, 4, 5], 3), true);
    assert.equal(contains([1, 2, 3, 4, 5], 0), false);
    assert.equal(contains([1, 2, 3, 4, 5], 6), false);
  });
  it("test_IndexOf", () => {
    assert.equal(indexOf([1, 2, 3, 4, 5], 3), 2);
    assert.equal(indexOf([1, 2, 3, 4, 5], 6), null);
  });
  it("test_Last", () => {
    assert.equal(last([4, 5, 6]), 6);
    assert.equal(last([], 25), 25);
  });
  it("test_Tail", () => {
    assert.deepEqual(tail([4, 5, 6]), [5, 6]);
  });
  it("test_Reverse", () => {
    assert.deepEqual(reverse([4, 5, 6]), [6, 5, 4]);
  });
  it("test_Map", () => {
    assert.deepEqual(
      map([4, 5, 6], (x) => x * 2),
      [8, 10, 12]
    );
  });
  it("test_Filter", () => {
    assert.deepEqual(filter([4, 5, 6, 7], isEven), [4, 6]);
  });
  it("test_Middle", () => {
    assert.equal(middle([4, 5, 6]), 5);
    assert.equal(middle([4, 5, 6, 7, 8]), 6);
    assert.equal(middle([4, 5, 6, 7]), "doesn`t have middle");
  });
  it("test_min", () => {
    assert.equal(min([6, 5, 4]), 4);
    assert.equal(min([0, 1, 2, 3]), 0);
    assert.equal(min([4, 5, 3, 7]), 3);
    assert.equal(min([4, 5, 3, 7, 4, 6]), 3);
  });
  it("test_Min2", () => {
    assert.equal(min2(2, 4), 2);
    assert.equal(min2(5, 3), 3);
  });
  it("test_Fac", () => {
    assert.equal(fac(4), 24);
    assert.equal(fac(5), 120);
  });
  it("test_Double", () => {
    assert.deepEqual(double([1, 2, 3, 4, 5]), [2, 4, 6, 8, 10]);
  });
  it("test_Indexes", () => {
    assert.deepEqual(indexes([1, 2, 3]), [0, 1, 2]);
    assert.deepEqual(indexes([5, 5, 5]), [0, 1, 2]);
  });
  it("test_Mean2", () => {
    assert.deepEqual(mean2(1, 2), 1.5);
    assert.deepEqual(mean2(2, 4), 3);
  });
  it("test_Mean3", () => {
    assert.deepEqual(mean3(1, 2, 3), 2);
    assert.deepEqual(mean3(6, 6, 0), 4);
  });
  it("test_Mean", () => {
    assert.deepEqual(mean([1, 2, 3]), 2);
    assert.deepEqual(mean([6, 6, 0, 6]), 4.5);
  });
  it("test_ApplyMask", () => {
    assert.deepEqual(applyMask([1, 2, 3], [true, true, false]), [1, 2]);
    assert.deepEqual(applyMask([5, 7, 4], [false, true, false]), [7]);
  });
  it("test_Hamming", () => {
    assert.deepEqual(hamming("cool", "polo"), 3);
    assert.deepEqual(hamming("above", "abobe"), 1);
    assert.deepEqual(hamming("above", "above"), 0);
    assert.deepEqual(hamming("hallo", "hola"), 3);
    assert.deepEqual(hamming("hola", "hallo"), 3);
  });
  it("test_intersperse", () => {
    assert.deepEqual(intersperse([1, 2, 3], 0), [1, 0, 2, 0, 3]);
    assert.deepEqual(intersperse(["a", "b", "c", "d"], "crap"), [
      "a",
      "crap",
      "b",
      "crap",
      "c",
      "crap",
      "d",
    ]);
  });
  it("test_merge", () => {
    assert.deepEqual(merge([1, 2, 3], [4, 5, 6]), [1, 4, 2, 5, 3, 6]);
    assert.deepEqual(merge([1, 2, 3], ["a", "b", "c"]), [
      1,
      "a",
      2,
      "b",
      3,
      "c",
    ]);
  });
  it("test_isSorted", () => {
    assert.deepEqual(isSorted([1, 2, 3]), true);
    assert.deepEqual(isSorted([6, 6, 0, 6]), false);
  });
});
