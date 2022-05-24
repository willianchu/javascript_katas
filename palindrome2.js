function palindromeIndex(s) {
  function isPalindrome(s) {
      for(let i=0; i< Math.floor(s.length/2);i++) {
          if(s[i] !== s[s.length-1-i]) {
              return false;
          }
      }
      return true;
  }
  for(let i=0; i< Math.floor(s.length/2); i++) {
      if(s[i] !== s[s.length-1-i]) {
          if(isPalindrome(s.slice(i, s.length-i-1))) {
            return s.length-i-1;  
          } else if(isPalindrome(s.slice(i+1,s.length-i))) {
            return i;  
          } else {
              return -1;
          }
      }
  }
  return -1;
}
console.log(palindromeIndex('fvyqxqxynewuebtcuqdwyetyqisappmunmnldmkttkmdlnmnumppasiqyteywdquctbeuwenyxqxqyvf'))
console.log(palindromeIndex('mmbiefhflbeckaecprwfgmqlydfroxrblulpasumubqhbvlqpixvvxipqlvbhqbumusaplulbrxorfdylqmgfwrpceakceblfhfeibmm'))
