function appendAndDelete(s, t, k) {
  let stringA = s;
  let stringB = t;
  let stringRoot = "";
  for(let i in s){
    if(s[i]===t[i]){
      stringA = stringA.slice(1);
      stringB = stringB.slice(1);
      stringRoot += s[i];
    } else {
      break;
    }
  }
  let sizeA = stringA.length;
  let sizeB = stringB.length;
  let sizeRoot = stringRoot.length;
  // console.log("root: ",stringRoot," A: ", stringA," B: ",stringB);
  let movementsLeft = k - (sizeA + sizeB);
  // Case 1 - Modify only the difference
  if(movementsLeft === 0) return "Yes"; // Perfect Small Curse
  if(movementsLeft < 0) return "No"; // Insufficient Moves Small Course
  
  // Case 2 - Modify all the string
  if(movementsLeft === sizeRoot * 2 + 1 ) return "Yes"; // A Perfect Whole Curse
  if(movementsLeft > ((sizeRoot * 2 )+ 1) ) {
    let oneStep = k - ((movementsLeft - ((sizeRoot * 2 )+ 1))); // How many perfect Whole Curse fits in "k"
    return k - (Math.floor(k/oneStep) * oneStep) % 2 === 0 ? "False" : "True";
  }
  
  // Case 3 - Modify the difference + spend movements to complete de task
  if(movementsLeft % 2 === 0){ // if movements left can delete and replace a letter
    return "even Yes";
  } else {
    return "odd No";
  }

}


let stringA = "aba";
let stringB = "aba";
let moves = 7;

console.log(appendAndDelete(stringA, stringB, moves),"Yes"); // Yes

stringA = "querty";
stringB = "zxcvbn";
moves = 100;

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