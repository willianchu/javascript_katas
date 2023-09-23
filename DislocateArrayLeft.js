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
  if (n > arr.length) {
    n = n % arr.length;
  }
  let len = arr.length;
  let arr2 = [];
  arr2 = arr.slice(0, len);
  console.log("first leg",n,len,arr2);
  return arr2;
}

let arr = ["a", "b", "c", "d", "e"];
console.log("common function");
console.log(dislocateArrayLeft(arr, 16));
console.log("mathematical function");
console.log(dislocateArrayLeftMathematically(arr, 16));

// dislocateArrayLeftMathematically function in python
// def dislocateArrayLeftMathematically(arr, n):
//   if n < 0:
//     return arr
//   if n > len(arr):
//     n = n % len(arr)
//   arr2 = []
//   arr2 = arr[n:len(arr)] + arr[0:n]
//   return arr2
  
// arr = ["a", "b", "c", "d", "e"]
// print(dislocateArrayLeftMathematically(arr, 16))

// DislocateArrayLeftMathematically function in C++
// #include <iostream>
// #include <vector>
// using namespace std;
// vector<char> dislocateArrayLeftMathematically(vector<char> arr, int n) {
//   if (n < 0) {
//     return arr;
//   }
//   if (n > arr.size()) {
//     n = n % arr.size();
//   }
//   vector<char> arr2;
//   arr2 = arr[n:arr.size()] + arr[0:n];
//   return arr2;
// }
// int main() {
//   vector<char> arr = {'a', 'b', 'c', 'd', 'e'};
//   vector<char> arr2 = dislocateArrayLeftMathematically(arr, 16);
//   for (int i = 0; i < arr2.size(); i++) {
//     cout << arr2[i] << " ";
//   }
//   return 0;
// }
  