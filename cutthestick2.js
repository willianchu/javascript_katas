function cutTheSticks(arr) {
  let cuts = [];
  let round = 0;

  while(arr.length) {
    const min = Math.min(...arr);
    for(let i = arr.length - 1; i >= 0; i--) {
      if(arr[i] < min) continue;
      cuts[round] = cuts[round] ? cuts[round] + 1 : 1;
      if(arr[i] === min) arr.splice(i, 1); else arr[i] -= min;
    }
    round++;
  }
  
  return cuts;
}
