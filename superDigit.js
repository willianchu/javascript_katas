// if x has only one digit then super digit is x
// else super digit is sum of all digits of x

const superDigit = (n, k) => {
  
  const numbers = concatenating (n, k).split('');
  console.log(numbers);
  let answer = 0;
  for (let number of numbers) {
    answer += parseInt(number);
  }
  return answer.toString().length === 1 ? answer : superDigit(answer.toString(), 1);
}

function concatenating (string, number) {
  let answer = '';
  for (let i = 0; i < number; i++) {
    answer += string;
  }
  return answer;
} 


console.log(superDigit('333453', 0));