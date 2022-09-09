function migratoryBirds(arr) {
  const birdsCount = {}
  arr.forEach( item => {
    if(birdsCount[item]){
      birdsCount[item] ++;
    } else {
      birdsCount[item] = 1;
    }
  })
  let winner = 0;
  let maxValue = 0;
  const keys = Object.keys(birdsCount);
  keys.forEach( key => {
    if (birdsCount[key] > maxValue){
      winner = key;
      maxValue = birdsCount[key];
    } else if (birdsCount[key] = maxValue){
      winner = key < winner ? key : winner;
      }
  }
  )
  return winner;
}

migratoryBirds([9,1,4,4,4,5,3]);