function sumArrayWithoutLastElement(array) {
  var sum = 0;
  for (var i = 0; i < array.length - 1; i++) {
    sum += array[i];
  }
  return sum;
}

function sumArrayWithoutFirstElement(array) {
  var sum = 0;
  for (var i = 1; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

const array = [1, 2, 3, 4, 5];

function MinMaxSum(array) {
  let sortedArray = array.sort((a, b) => a - b);
  let minSum = sumArrayWithoutFirstElement(sortedArray);
  let maxSum = sumArrayWithoutLastElement(sortedArray);
  return [minSum, maxSum];
};

console.log(MinMaxSum(array));