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

function insertionSort(arr) {
  let  n = arr.length;
  for(let i = 1; i < n; i++){
    sortInsertionLast(i,arr);
    console.log(...arr);
  }
  return arr;
}
   
  var arr;
  //get input for ar
  arr = [5, 2, 4, 6, 1, 3];
  let sorted = insertionSort(arr);
  console.log(sorted);

  //print ar