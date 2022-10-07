function flatlandSpaceStations(n, c) {
  let max = 0;
  let min = 0;
  let distance = 0;
  for (let i = 0; i < n; i++){
    min = n;
    for (let element of c){
      distance = Math.abs(i-element);
      if(distance<min) {
        min = distance;
      }
    }
    if(min>max) {
      max = min;
    }
  }
  return max;
}

console.log(flatlandSpaceStations(5,[0,4]));