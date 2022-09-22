function repeatedString(s, n) {
  let qtA = (s.split("").filter(c=> c === 'a')).length;
  let segments = s.length;
  let mod = n % segments;
  let segmentsCount = Math.floor(n / segments) * qtA;
  for(let i = 0; i <= mod - 1; i++){
      if(s[i]==='a') segmentsCount++;
  }
  return segmentsCount;
}

let s = "aba";
let n = 10;

console.log(repeatedString(s,n));

// let repeatingA = 0;
// let index = 0;
// let size = s.length-1;
// for(let i = 0; i < n; i++){
//   if(s[index]==="a") repeatingA++;
//   index = index === size ? 0 : index + 1;
// }
// return repeatingA;