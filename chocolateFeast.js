// n budget
// c price
// m each return got a brand new chocolate

function chocolateFeast(n, c, m) {
  let budget = n;
  let price = c;
  let qtForBonus = m;
  let chocolatesEaten = 0;
  let closedPackets = 0;
  let bonusBars = 0;
  let consumed = 0;

  closedPackets = Math.floor( budget / price );
  
  do{
    bonusBars = Math.floor(closedPackets / qtForBonus); 
    consumed  = qtForBonus * bonusBars; 
    closedPackets = closedPackets - consumed  + bonusBars;
    chocolatesEaten += consumed ;
  }while(closedPackets >= qtForBonus);
  
  return chocolatesEaten + closedPackets;
}

console.log(chocolateFeast(10,2,5));
console.log(chocolateFeast(12,4,4));
console.log(chocolateFeast(6,2,2));