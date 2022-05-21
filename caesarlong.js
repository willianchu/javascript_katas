function caesarCipher(s, k) {
  let answer = "";
  for (let i in s){
    // console.log(s[i]);
      answer += cypherLetter(s[i],k); 
  }
  return answer;
}

function cypherLetter(chr,dis){ 
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let answer = "";
  let size = alphabet.length - 1;
  let dislocation = 0;
  let newPosition = 0;
  let found = false;
  for (let i in alphabet){
      if (alphabet[i] == chr) {
          dislocation = parseInt(i) + dis;
          console.log(i,dis);
          newPosition = dislocation <= size ? dislocation : (dislocation - size - 1)
          console.log([newPosition]);
          answer = alphabet[newPosition];
          found = true;
          break;
      }
  }
  return found ? answer : chr;
}

console.log(caesarCipher("xyz", 2));	// "zab"