function getMoneySpent(keyboards, drives, b) {
  let bestCombo = -1;
  let kitSum = 0;
  for(let keyboard of keyboards){
    for(let drive of drives){
      kitSum = keyboard + drive;
      if((kitSum > bestCombo)&&(kitSum <= b)){
        bestCombo = kitSum;
      }
    };
  };
  return bestCombo;

}


let b = 60;
let keyboards = [40,50,60];
let drives = [5,8,12];

console.log(getMoneySpent(keyboards, drives,  b));

b = 10;
keyboards = [3,1];
drives = [5,2,8];

console.log(getMoneySpent(keyboards, drives,  b));

