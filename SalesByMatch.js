function sockMerchant(n, ar) {
  const inventory = {}
  ar.forEach( color => {
    inventory[color] = inventory[color] ? ++inventory[color] : 1;
  })
  
  return Object.keys(inventory).reduce( (total, key) =>{
    return total + Math.floor(inventory[key]/2);
  }, 0);
 
}


// array with the colors of socks
let arr = [1,2,1,2,1,3,2];
let n = arr.length;

console.log( sockMerchant(n, arr) );

let arr2 = [10, 20, 20, 10, 10, 30, 50, 10, 20];
n = arr2.length;

console.log( sockMerchant(n, arr2) );