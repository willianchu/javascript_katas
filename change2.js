const calculateChange = (total, cash) => {
  if (total > cash){ return false};
  let change = cash - total;
  change_obj = {};
  change_obj['twentyDollar'] = Math.trunc(change / 2000);
  change -= 2000 * change_obj['twentyDollar'];
  change_obj['tenDollar'] = Math.trunc(change / 1000);
  change -= 1000 * change_obj['tenDollar'];
  change_obj['fiveDollar'] = Math.trunc(change / 500);
  change -= 500 * change_obj['fiveDollar'];
  change_obj['twoDollar'] = Math.trunc(change / 200);
  change -= 200 * change_obj['twoDollar'];
  change_obj['oneDollar'] = Math.trunc(change / 100);
  change -= 100 * change_obj['oneDollar'];
  change_obj['quarter'] = Math.trunc(change / 25);
  change -= 25 * change_obj['quarter'];
  change_obj['dime'] = Math.trunc(change / 10);
  change -= 10 * change_obj['dime'];
  change_obj['nickel'] = Math.trunc(change / 5);
  change -= 5 * change_obj['nickel'];
  change_obj['penny'] = change;
  return ignore_empty_values(change_obj);
};

const ignore_empty_values = (change) => {
  newObj = {};
  for (let key in change) {
    if (change[key] > 0) {
      newObj[key] = change[key];
    }
  }
  return newObj;
};



console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));