function toys(w) {
   let ordered = w.sort((a, b) => a - b);
   let containers = [];
   let i = 0;
   containers[i] = [];
   let cutLimit = ordered[i]+4; 
   for(let j = 0; j < ordered.length; j++) {
       if(ordered[j] <= cutLimit) {
           containers[i].push(ordered[j]);
       } else {
           i ++;
           cutLimit = ordered[j]+4;
           containers[i] = [];
           containers[i].push(ordered[j]);
       }
   }
   return containers;
}

console.log(toys([1, 2, 3, 21, 7, 12, 14, 21]));