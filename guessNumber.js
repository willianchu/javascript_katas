const guess = function(){
  let prompt = require("prompt-sync")();
  // generates a random number
  let random = (Math.floor(Math.random()*100)); 
  let answer = ""; // user answer
  let guesses = []; // log of user answers
  
  do{ // repeat until find the random number or 0
    do{ // repeat until get a valid number in answer
      answer = prompt("Guess a number: ");
      if(isNaN(answer)){ // if not NaN
        console.log("Not a number! Try again!");
      } else {
        for (let i = 0 ; i < guesses.length ; i++){ // look at log a repeated guess
          if(answer == guesses[i]){
            console.log("Already Guessed!");
            answer = "try"; // change to NaN to another entry
            break;  
          } 
        }  
        if (answer != "try"){ 
          guesses.push(answer)
        } // add to log a new try
        
      }
    }while(isNaN(answer));
      if (answer == 0){
      console.log("You've quit");
      break;
    }else if(answer == random){
      console.log("You got it! You took " + guesses.length + " attempts!");
      break;
    }else if(answer > random){
      console.log("Too High!");
    } else {
    console.log("Too Low!");
    }
  } while(answer > 0);
}


guess();