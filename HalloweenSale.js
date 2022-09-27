// p price
// d discount
// m margin = 
// s 

function howManyGames(p, d, m, s) {
  let units = 0;
  let salePrice = p;
  let budget = s;
  while(true){
    budget -= salePrice;
    salePrice = (salePrice - d) < m ? m : salePrice - d;
    if(budget < 0) break;
    units++;
    console.log(budget, salePrice, units);
  }
  return units;
}

console.log(howManyGames(20,3,6,70));