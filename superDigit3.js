const superDigit = (n, k) => {
 return findSum(n.repeat(k), 0);
}
const findSum = (num) => {
  if(num.length === 1) {
    return parseInt(num);
  }
  let sum = 0;
  for(let i = 0; i < num.length; i++) {
    sum += parseInt(num[i]);
  }
  return findSum(sum.toString());
}
 

console.log(superDigit('148', 1));