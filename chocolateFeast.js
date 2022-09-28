// n budget
// c price
// m each return got a brand new chocolate

function chocolateFeast(n, c, m) {
  let budget = n;
  let price = c;
  let returnedPack = m;
  let chocolatesEaten = 0;
  let newChocolates = 0;
  let bonus = 0;


  newChocolates = Math.floor( budget / price ); // bought chocolates
  console.log(newChocolates);
  do{
  console.log("###############");
  bonus = Math.floor(newChocolates / returnedPack); // how many extra chocolates
  console.log( "bonus", bonus);
  chocolatesEaten = Math.floor( newChocolates % returnedPack );
  console.log("eaten",chocolatesEaten);
  newChocolates = newChocolates - chocolatesEaten 
  console.log( "new", newChocolates );
  }while(newChocolates >= returnedPack)

  
  return chocolatesEaten;
}

// console.log(chocolateFeast(10,2,5));
// console.log(chocolateFeast(12,4,4));
console.log(chocolateFeast(6,2,2));