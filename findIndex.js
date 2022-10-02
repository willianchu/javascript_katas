// function findIndex(V, arr) {
//   return arr.findIndex(v => v === V);
  
// }

function sortInsertion (n, arr){
  const zeroIndexLength = n - 1;
  const putItInOrder = arr[zeroIndexLength];
  let lastIndex = 0;
  for(let i=zeroIndexLength-1; i >= 0; i--){
    if(putItInOrder < arr[i]){
      arr[i+1] = arr[i];
      console.log(arr);
    } else {
      lastIndex = i+1;
      break;
    }
  }
  arr[lastIndex] = putItInOrder;
  console.log(arr);
}

let arr = [ 2,3,4,5,1 ];

let n = 5;

sortInsertion(n,arr);