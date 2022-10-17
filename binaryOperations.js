function binOr(b1, b2){
  let result = "";
  let max = Math.max(b1.length, b2.length);
  for(let i = 0; i < max; i++){
    result = result + (b1[i] | b2[i]);
  }
  return result;
}

let bin1 = "01010101";
let bin2 = "10101010";
console.log(binOr(bin1, bin2));