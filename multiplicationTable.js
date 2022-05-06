const multiplicationTable = function(maxValue) {
  let result = '';
  for(let y = 1 ; y <= maxValue; y++){
    for(let x = 1 ; x <= maxValue; x++){
      result += (y * x) + " ";
    }
    result += "\n";
  }
  return result;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));

