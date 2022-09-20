let n = 7; // number of prisoners
let m = 19; // treats
let s = 2; // starting seat

function saveThePrisoner(n,m,s){
let idxBegining = s - 1;
let candyDislocation = m + idxBegining;
let position = candyDislocation % n;
return position === 0 ? n : position;
}



//   function saveThePrisoner(prisoners, candies, start) {
    
//     return (start + candies - 2) % (prisoners) + 1;
// }


// function saveThePrisoner(n, m, s) {
//   let index = s; //start
//   let endOfLine = n;
//   let treats = m;
//   while(treats > 0){
//     if((endOfLine - index + 1) < treats && index != 1){ // initial 
//       treats -= endOfLine - index + 1;
//       index = 1;
//     } else if(index === 1 && treats > (endOfLine - index)){ //burn exceed of treats
//       while(treats > (endOfLine)){
//         treats -= (endOfLine);
//       }
//     } else if((endOfLine - index + 1) > treats){ // final
//       index += treats - 1;
//       treats = 0;
//     } 
  
//   }
//   return index;
// }

console.log(saveThePrisoner(n,m,s));


// let index = s; //start
// let endOfLine = n;
// let treats = m;
// while( treats != 0 ){
//   treats--;
//   index = index + 1 > endOfLine ? 1 : index + 1;
// }
// return index;