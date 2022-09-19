function appendAndDelete(s, t, k) {
  let len_s = s.length;
  let len_t = t.length;
  let len_total = len_s + len_t;
  let idx = 0
  if (len_total % 2 != 0 && k % 2 == 0 && k < len_total){ //total length Odd && Even moves && moves < total lenght 
    return "No";
  }
  if (len_total % 2 == 0 && k % 2 != 0 && k < len_total){ //total length Even && Odd moves && moves < total lenght 
    return "No";
  }
  let min = len_s < len_t ? len_s : len_t;
  for(let i = 0 ; i < min; i++){
    if(s[i] != t[i]){
      break;
    }else{
      idx = i + 1;
    }
  }
  console.log(idx);
  let max = len_s > len_t ? len_s : len_t;
  if ((max - idx + min - idx) <= k){
    return "Yes";
  } else {
    return "No";
  }
}

let stringA = "aba"; 
let stringB = "aba";
let moves = 7;

console.log(appendAndDelete(stringA, stringB, moves),"Yes"); // Yes



stringA = "abcd";
stringB = "abcdert";
moves = 10;

console.log(appendAndDelete(stringA, stringB, moves),"No"); // No

stringA = "y";
stringB = "yu";
moves = 2;

console.log(appendAndDelete(stringA, stringB, moves),"No"); // No

stringA = "ashley";
stringB = "ash";
moves = 2;

console.log(appendAndDelete(stringA, stringB, moves),"No"); // No

stringA = "hackerhappy";
stringB = "hackerrank";
moves = 9;

console.log(appendAndDelete(stringA, stringB, moves),"Yes"); // Yes

stringA = "abcdef";
stringB = "fedcba";
moves = 15;

console.log(appendAndDelete(stringA, stringB, moves),"Yes"); // Yes

