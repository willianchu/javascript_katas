function palindromeIndex(s) {
  let string = s;
  if (string === contraire(string)) return -1;

  for (let i = 0; i < s.length; i++) {
    string = s.slice(0, i) + s.slice(i + 1);
    if (string === contraire(string)) return i;
  }
  return -1; // if no palindrome found
}

function contraire(word) {
  return word.split("").reverse().join("");
}



console.log(palindromeIndex('fvyqxqxynewuebtcuqdwyetyqisappmunmnldmkttkmdlnmnumppasiqyteywdquctbeuwenyxqxqyvf'))
console.log(palindromeIndex('mmbiefhflbeckaecprwfgmqlydfroxrblulpasumubqhbvlqpixvvxipqlvbhqbumusaplulbrxorfdylqmgfwrpceakceblfhfeibmm'))

