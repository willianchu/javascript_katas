function appendAndDelete(s, t, k) {
  let stringA = s;
  let stringB = t;
  let stringShared = "";
  for(let i in s){
    if(s[i]===t[i]){
      stringA = stringA.slice(1);
      stringB = stringB.slice(1);
      stringShared += s[i];
    } else {
      break;
    }
  }
  let sizeShared = stringShared.length;
  let leftMovements = k - (stringA.length + stringB.length);
  let answer = "";
  if(leftMovements < 0) answer = "No"; // no sufficient movements for a basic change
  if(leftMovements % 2 === 0){
    answer = leftMovements < (sizeShared * 2) + 1 ? "Yes" : "aNo";
  } else {
    answer = leftMovements >= (sizeShared * 2) + 1 ? "Yes" : "No";
  }
 return answer;
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

