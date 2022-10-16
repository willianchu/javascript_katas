function minimumDistances(a) {
  // Write your code here
  let min = a.length;
  let found = false;
  for(let i=0; i < a.length; i++){
    for(let j=i+1; j < a.length; j++){
      if(a[i] === a[j]){
        found = true;
        if(j-i < min){
          min = j-i;
        }
      }
    }

  }
  if(found){
    return min;
  } else {
    return -1;
  }
}