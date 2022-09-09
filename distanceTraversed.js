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
  console.log("9 position: ", linePosition, columnPosition);
  let moves = 0;
  while (lot[linePosition][columnPosition]!==2){
      // try left 
      if ((columnPosition - 1 > 0) && (lot[linePosition][columnPosition - 1] === 1)){
          console.log("left");
          moves ++;
          columnPosition--;
      }else if(linePosition > 0 && (lot[linePosition - 1][columnPosition] === 1)){ // try up
          console.log("up");
          moves ++;
          linePosition--;           
      }else { // undo go up
        while ((lot[linePosition - 1][columnPosition] != 1)) {
            console.log("right");
              moves --;
              columnPosition ++;    
          }
          console.log("up");
          linePosition --;
          moves++;
      } 
  }
  return moves;
}

const lot = [
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 9]
];


console.log(distanceTraversed(lot));