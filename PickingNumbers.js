function pickingNumbers(a) {
  let answers = [];
  let j = 0;
  a
  .sort((a,b) => a-b)
  .forEach((element, index) => {
    answers[j] = 0;
    for(let i = index + 1; i < a.length; i++){
      answers[j]++;
      if(a[i] - element > 1) {
        break;
      }
      if(i == [a.length - 1]){
        answers[j]++;
      }
    }
    j++;
  });
  return answers.sort((a,b) => b-a)[0];

}

let arr = [4,6,5,3,3,1];
console.log(pickingNumbers(arr));
arr = [1,2,2,3,1,2];
console.log(pickingNumbers(arr));
arr = [1,1,1,1,1,1];
console.log(pickingNumbers(arr));