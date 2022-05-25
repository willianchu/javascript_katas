function distanceTraversed(lot) {
  // Write your code here
  let linePosition = 0;
  let columnPosition = 0;
  for(let row = 0; row < lot.length; row++){
      for(let column = 0; column < lot[0].length; column++){
          if (lot[row][column] === 9){
              linePosition = row;
              columnPosition = column;
              break;
          }
      }
  }
  let moves = 0;
  while (linePosition >0 && columnPosition > 0){
      // try left 
      if ((columnPosition - 1 > 0) && (lot[linePosition][columnPosition - 1] === 1)){
          moves ++;
          columnPosition--;
      }else if(linePosition > 0 && (lot[linePosition - 1][columnPosition] === 1)){ // try up
          moves ++;
          linePosition--;           
      }else { // undo go up
          while ((lot[linePosition - 1][columnPosition] != 1)) {
              moves --;
              columnPosition ++;    
          }
          linePosition --;
          moves++;
      } 
  }
  return moves;
}

const lot = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 9, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];


console.log(distanceTraversed(lot));