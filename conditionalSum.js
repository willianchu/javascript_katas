const conditionalSum = function(values, condition) {
  let sum = 0;
  condition == "even" ? condition = false : condition = true; // selector
  for (let i = 0; i < values.length; i++) {
    if ((Boolean(values[i] % 2) == condition)) {
      sum += values[i];
    };
  }
  return sum;
}; 


console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));