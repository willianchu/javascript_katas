// function findIndex(V, arr) {
//   return arr.findIndex(v => v === V);
  
// }

function sortInsertionLast (n, arr){
  const zeroIndexLength = n;
  const putItInOrder = arr[zeroIndexLength];
  let lastIndex = 0;
  for(let i=zeroIndexLength-1; i >= 0; i--){
    if(putItInOrder < arr[i]){
      arr[i+1] = arr[i];
    } else {
      lastIndex = i+1;
      break;
    }
  }
  arr[lastIndex] = putItInOrder;
}

function insertionSort2(n, arr) {
  for(let i = 1; i < n; i++){
    sortInsertionLast(i,arr);
    console.log(...arr);
  }
}


let arr = [ 3,4,7,5,6,2,1 ];

let n = 7;

grow2Sort(n,arr);