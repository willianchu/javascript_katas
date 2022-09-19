const arr = [23, 4, 67, 32, 1, 7, 56, 5, 89];

const mergeSort = arr => {
   if (arr.length < 2){
      return arr;
   }
   const middle = Math.floor(arr.length / 2);
   const left = arr.slice(0, middle), right = arr.slice(middle, arr.length);
   return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
   const res = [];
   while (left.length && right.length) {
     console.log("both");
      if (left[0] <= right[0]){
         res.push(left.shift());
      }
      else{
         res.push(right.shift());
      };
   }
   while (left.length){
    console.log("left");
      res.push(left.shift());
   };
   while (right.length){
    console.log("right");
      res.push(right.shift());
   };
   console.log(res);
   return res;
};

console.log(mergeSort(arr));