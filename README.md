# Practicing tests
Tests written as a part of the curriculum for [The Odin Project](https://www.theodinproject.com/).

#### Write tests for the following:
1. A `capitalize` function that takes a string and returns it with the first character capitalized.
2. A `reverseString` function that takes a string and returns it reversed.
3. A `calculator` object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.
4. A `caesarCipher` function that takes a string and returns it with each character “shifted”.
5. An `analyzeArray` function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.

### Sample Code
```
function analyzeArray(arr) {
  let result = {};
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  
  result.average = sum / arr.length;
  result.min = Math.min(...arr);
  result.max = Math.max(...arr);
  result.length = arr.length;
  return result;
}
```

### Sample Test
```
test("returns average, min, max, and length of array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
```
