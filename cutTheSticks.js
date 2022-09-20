function cutTheSticks(arr) {
  let sticks = arr.sort((a,b)=>a-b);
  let results = [sticks.length];
  let cut = 0;
  while(sticks.length > 1){
    cut = sticks[0];
    sticks = sticks.map(stick=>stick-cut);
    sticks = sticks.filter(stick=>stick>0);
    results.push(sticks.length);
    console.log(sticks);
    }
  let unique = [...new Set(results.filter(stick=>stick>0))];
  return unique;
 }

 let arr = [8,8,14,10,3,5,14,12]; //3,2
 console.log(cutTheSticks(arr));
