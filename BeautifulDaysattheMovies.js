function beautifulDays(i, j, k) {
  let numberOfBeautifulDays = 0
  for(let index = i; index <= j; index++){
    if(isBeautiful(index,k)){
      numberOfBeautifulDays++;
    }
  }
  return numberOfBeautifulDays;
}

const isBeautiful = (number, k) =>{
  let difference = Math.abs(number - reverse(number));
  return difference % k === 0 ? true : false;
};

const reverse = (number) =>{
  let str = number + "";
  return (str.split("").reverse().join("")) * 1;
};

console.log(isBeautiful(45,3));