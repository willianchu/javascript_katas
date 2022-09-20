function squares(a, b) {
  let lastNumber = Math.floor(Math.sqrt(b));
  let firstNumber = Math.floor(Math.sqrt(a));
  if(firstNumber*firstNumber === a) lastNumber++;
  return lastNumber - firstNumber;
}

console.log(squares(100, 1000));