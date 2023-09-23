function dislocateArrayLeft(arr, n) {
  let arr2 = arr;
  if (n < 0) {
    return arr2;
  }
  for (let i = 0; i < n; i++) {
    arr.push(arr2.shift());
    console.log(arr2);
  }
  return arr2;
}

function dislocateArrayLeftMathematically (arr, n) {
  if (n < 0) {
    return arr;
  }
  let len = arr.length;
  let arr2 = [];
  arr2 = arr.slice(0, len);
  console.log("first leg",n,len,arr2);
  return arr2;
}

let arr = ["a", "b", "c", "d", "e"];
console.log("common function");
console.log(dislocateArrayLeft(arr, 2));
console.log("mathematical function");
console.log(dislocateArrayLeftMathematically(arr, 2));