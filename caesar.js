function caesarCipher(s, k) {
  let dislocation = 0;
  let newMessage = "";
  let current = "";
  for(let i=0; i < s.length; i++){
    current = s.charCodeAt(i);
    
    if (current >=65 && current <= 90 ){
      dislocation = current + k;
      while(dislocation>90){
        dislocation -= 26;
      }
      newMessage += String.fromCharCode(dislocation);
    } else if (current >=97 && current <= 122 ){
      dislocation = current + k;
      while(dislocation>122){
        dislocation -= 26;
      }
      newMessage += String.fromCharCode(dislocation); 
    } else {
      newMessage += s[i];
    }
  }
  return newMessage;
}

let message = "ZABC This is a secret message!";
let caesar = 1;

console.log(caesarCipher(message, caesar));