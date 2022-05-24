function caesarCipher(s, k) {
  let answer = "";
  for (let i in s){
    // console.log(s[i]);
      answer += cypherLetter(s[i],k); 
  }
  return answer;
}

function cypherLetter(chr,d){
  while (d > 26){
    d -= 26;
  }
  let dis = d;
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  if (chr.toUpperCase() === chr){
    alphabet = alphabet.toUpperCase();
  }
  // if (isNaN(chr)){
  //   alphabet = "1234567890";
  // }
  let answer = "";
  let size = alphabet.length - 1;
  let dislocation = 0;
  let newPosition = 0;
  let found = false;
  for (let i in alphabet){
      if (alphabet[i] == chr) {
          dislocation = parseInt(i) + dis;
          if (dislocation > size && dislocation > 0){
          newPosition = dislocation <= size ? dislocation : (while (dislocation > size) { dislocation dislocation - size - 1); });
          } else {
          newPosition = dislocation <= size ? dislocation : (dislocation - size)
          }
          answer = alphabet[newPosition];
          found = true;
          break;
      }
  }
  return found ? answer : chr;
}

console.log(caesarCipher("xyz", 2));	// "zab"
console.log(caesarCipher("xyz", -2));	// "yza"
