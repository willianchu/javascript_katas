function binOr(b1, b2){
  let result = 0;
  let max = Math.max(b1.length, b2.length);
  for(let i = 0; i < max; i++){
    if(b1[i] | b2[i]) result += 1;
  }
  return result;
}

let bin1 = "01010101";
let bin2 = "010101010";
console.log(binOr(bin1, bin2));