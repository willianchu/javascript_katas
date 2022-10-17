function bin2dec(bin){
  return parseInt(bin, 2);
}

let bin1 = "01010101";
let bin2 = "10101010";
console.log((bin2dec(bin1) | bin2dec(bin2)).toString(2));