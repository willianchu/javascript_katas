const superDigit = (n, k) => {
  if(n < 10){
    return n;
  }
  let numbers = n.split('');
  let answer = 0;
  numbers.map(number => {
    answer += parseInt(number);
  });
  answer = answer * k;
  return answer.toString().length === 1 ? answer : superDigit(answer.toString(), 1);
}
 console.log(superDigit('123', 3));