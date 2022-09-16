function pickingNumbers(a) {
  let maxLength = 0;
  let currentCount = 0;
  a.sort((a,b)=>a-b);
  for(let i = 0; i < a.length; i++){
    currentCount = 1;
    for(let j = i + 1; j < a.length; j++){
      if(a[j]-a[i] <= 1){
        currentCount++;
      } else {
        break;
      }
    }
    maxLength = maxLength < currentCount ? currentCount : maxLength;
  }
  return maxLength;
}

let arr = [4,6,5,3,3,1];
console.log(pickingNumbers(arr));
arr = [1,2,2,3,1,2];
console.log(pickingNumbers(arr));
arr = [1,1,1,1,1,1];
console.log(pickingNumbers(arr));