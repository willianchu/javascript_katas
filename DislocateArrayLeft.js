function dislocateArrayLeft(arr, n) {
  if (n < 0) {
    return arr;
  }
  for (let i = 0; i < n; i++) {
    arr.push(arr.shift());
    console.log(arr);
  }
  return arr;
}

function dislocateArrayLeftMathematically (arr, n) {
  if (n < 0) {
    return arr;
  }
  let len = arr.length;
  let arr2 = [];
  arr2 = arr.slice(n, len);
  arr2 = arr2.concat(arr.slice(0, n));
  return arr2;
}

let arr = ["a", "b", "c", "d", "e", "f", "g", "h"];
console.log("common function");
console.log(dislocateArrayLeft(arr, 2));
console.log("mathematical function");
console.log(dislocateArrayLeftMathematically(arr, 2));