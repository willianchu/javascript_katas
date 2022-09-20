function viralAdvertising(n) {
  let shared = 5;
  let liked = Math.floor(shared/2)
  let cumulative = liked;
  for(let i=2; i <= n ; i++){
    shared = liked * 3;
    liked = Math.floor(shared/2);
    cumulative += liked;
    console.log(i,shared,liked,cumulative);
  }
  return cumulative;
}
viralAdvertising(3);

// function viralAdvertising(n) {
//   let day = 1;
//   let shared = 5;
//   let liked = Math.floor(shared/2);
//   let cumulative = liked;
//   while(day < n){
//     shared = liked * 3;
//     liked = Math.floor(shared/2);
//     cumulative += liked
//     day++;
//   }
//   return cumulative;

// }
