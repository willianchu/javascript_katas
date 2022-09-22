function repeatedString(s, n) {
  let qtA = (s.split("").filter(c=> c === 'a')).length;
  let segments = s.length;
  let answer = n/s*qtA;
  return answer;
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