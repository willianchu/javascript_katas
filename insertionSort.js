function insertionSort (ar) {

  for(i = 1; i < ar.length; i++){
      var value = ar[i];
      var j = i - 1;
      while(ar[j] > value){
        ar[i] = ar[j];
        ar[j] = value;
      }
      ar[j + 1] = value;
    }
    return ar;
  }
   
  var ar;
  //get input for ar
  ar = [5, 2, 4, 6, 1, 3];
  let sorted = insertionSort(ar);
  console.log(sorted);

  //print ar