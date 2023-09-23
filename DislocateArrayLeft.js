function dislocateArrayLeft(arr, n) {
  if (n < 0) {
    return arr;
  }
  for (let i = 0; i < n; i++) {
    arr.push(arr.shift());
  }
  return arr;
}

let arr = ["a", "b", "c", "d", "e", "f", "g", "h"];
console.log(dislocateArrayLeft(arr, 2));