function sumLargestNumbers(array) {
  var sortedArray = bubbleSort(array);
  var sum = 0;
  for (var i = (sortedArray.length-2); i < sortedArray.length; i++) { // takes the 2 last
    sum += sortedArray[i];
  }
  return sum;
}

function bubbleSort (mainArray) { // sort array
  for (var i = 0; i < mainArray.length; i++) {
    for (var j = 0; j < mainArray.length - i - 1; j++) {
      if (mainArray[j] > mainArray[j + 1]) {
        var temp = mainArray[j];
        mainArray[j] = mainArray[j + 1];
        mainArray[j + 1] = temp;
      }
    }
  } 
return mainArray;
}


console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));