const squareCode = function(message) {
  let cleanMessage = killBlanks(message); // without spaces
  let realSize = (cleanMessage.length); // size of the message
  let square = Math.sqrt(realSize);
  let columns = (Math.ceil(square));
  // let rows = (Math.floor(square));
  let element = ""; // will catch the result
  for(let c = 0 ; c < columns ; c++){ // number of "blocks"
    for(let r = c ; r < realSize ; r += columns){
      if (r<=realSize){ // only possible values in the array
        element += cleanMessage[r];
      }
    }
    element += " ";
  }
  return element;
};

const killBlanks = function(text){
  let answer = "";
  for(let i = 0 ; i < text.length ; i++){
    if(text[i]!==" "){
      answer += text[i];
    }
  }
  return answer;
}



console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
/*
clu hlt io  
fto ehg ee dd
hae and via ecy
imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau

*/