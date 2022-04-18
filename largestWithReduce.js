let arr = [5, 2, 67, 37, 85, 19, 10];

let largestNum = arr.reduce(function (accumulatedValue, currentValue) {
  return Math.max(accumulatedValue, currentValue);
});

console.log(`The largest number: ${largestNum}`);
// The largest number: 85