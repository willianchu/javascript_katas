function caesarCipher(message,k){
  
  let answer = "";
  for (let i in message){
    answer += cypherLetter(message[i],valid(k)); 
  }
  return answer;
}

function valid(k){
  while (k > 26){
    k -= 26;
  }
  return k;
}

function cypherLetter(chr,d){
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  if (chr.toUpperCase() === chr){
    alphabet = alphabet.toUpperCase();
  }
  let answer = "";
  let size = alphabet.length - 1;
  let dislocation = 0;
  let newPosition = 0;
  let found = false;
  for (let i in alphabet){
      if (alphabet[i] == chr) {
          dislocation = parseInt(i) + d;
          newPosition = dislocation <= size ? dislocation : (dislocation - size - 1);
          newPosition = newPosition < 0 ? newPosition + size : newPosition;
          answer = alphabet[newPosition];
          found = true;
          break;
      }
  }
  return found ? answer : chr;
}

console.log(caesarCipher("xyz", 2));	// "zab"
console.log(caesarCipher("ABC", -2));	