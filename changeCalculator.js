const calculateChange = function(total, cash) {
  if (total > cash){ return false};
  let change = cash - total;
  let expected = {};
  let howManyTimes = 0;
    if(change > 2000){
      howManyTimes = Math.trunc(change / 2000);
      change -= 2000 * howManyTimes;
      expected['twentyDollar'] = howManyTimes;
    }
    if(change > 1000){
      howManyTimes = Math.trunc(change / 1000);
      change -= 1000 * howManyTimes;
      expected['tenDollar'] = howManyTimes;
    }
    if(change > 500){
      howManyTimes = Math.trunc(change / 500);
      change -= 500 * howManyTimes;
      expected['fiveDollar'] = howManyTimes;
    }
    if(change > 200){
      howManyTimes = Math.trunc(change / 200);
      change -= 200 * howManyTimes;
      expected['twoDollar'] = howManyTimes;
    }
    if(change > 100){
      howManyTimes = Math.trunc(change / 100);
      change -= 100 * howManyTimes;
      expected['oneDollar'] = howManyTimes;
    }
    if(change > 25){
      howManyTimes = Math.trunc(change / 25);
      change -= 25 * howManyTimes;
      expected['quarter'] = howManyTimes;
    }
    if(change > 10){
      howManyTimes = Math.trunc(change / 10);
      change -= 10 * howManyTimes;
      expected['dime'] = howManyTimes;
    }
    if(change > 5){
      howManyTimes = Math.trunc(change / 5);
      change -= 5 * howManyTimes;
      expected['nickel'] = howManyTimes;
    }
    if(change > 1){
      howManyTimes = Math.trunc(change / 1);
      change -= 1 * howManyTimes;
      expected['penny'] = howManyTimes;
    }
  return expected;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));