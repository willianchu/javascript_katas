function findDigits(n) {
  let string = n + "";
  let arr = string.split("");
  count = 0;
  arr.forEach(digit=>{
    let number = digit * 1;
    console.log(number);
    switch(number){
      case 0:
        break;
      case 1:
        count++;
        break;
      default:
        if(n % number === 0) count++;
    }
  })
  return count;
}

console.log(findDigits(1230));


