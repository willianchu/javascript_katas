function appendAndDelete(s, t, k) {
  let stringA = s;
  let stringB = t;
  for(let i in s){
    if(s[i]===t[i]){
      stringA = stringA.slice(1);
      stringB = stringB.slice(1);
    } else {
      break;
    }
  }
  let operationsLeft = k - (stringA.length + stringB.length);
  if(operationsLeft === 0) return "Yes"; // just add
  if(operationsLeft < 0) return "No"; // there is no sufficient moves to add
  if(s.length === stringA.length){
     operationsLeft = operationsLeft - 1; //move to set empty array
  }
  
  const maxAllowedOperations = ((s.length - stringA.length)*2) + 1;
  
  if (maxAllowedOperations === operationsLeft) return "Yes"; // Max chain movements

  return operationsLeft % 2 === 0 ? "Yes" : "No"
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

