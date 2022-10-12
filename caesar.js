function caesarCipher(s, k) {
  let dislocation = k
  while(dislocation > 25){
    dislocation -= 25
  }
  let newMessage = ""
  for(let i=0; i < s.length; i++){
    console.log(s.charCodeAt(i));
  }
  return newMessage;
}

let message = "ABCThis is a secret message!";
let caesar = 2;

console.log(caesarCipher(message, caesar));