// p price
// d discount
// m margin = 
// s 

function howManyGames(p, d, m, s) {
  let units = 0;
  let salePrice = p;
  let budget = s;
  while(salePrice > m){
    let trySale = budget - salePrice;
    if(trySale<0) break;
    salePrice -= d;
    units++;
  }
  return units;
}

console.log(howManyGames(20,3,6,70));