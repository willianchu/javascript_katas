const boardDesigner = function(size){
  let board = [];
  let row = [];
  for(let y = 0 ; y < size ; y++){
    for(let x = 0 ; x < size ; x++){ 
      row.push(0); 
    }
    board[y] = row;
    row = []; //recreate to avoid same memory reference
  }
  return board;
}
const generateBoard = function(white, black){
  let board = boardDesigner(8);
  board[white[0]][white[1]] = 1; // set pieces in the board
  board[black[0]][black[1]] = 1;
  return board;
}
const findOpponents = function(board){
  let size = 8;
  let pieces = [];
  let i = 0; // opponent found counter
    for(let y = 0 ; y < size ; y++){
      for(let x = 0 ; x < size ; x++){ 
        if (board[x][y] == 1){
          pieces[i] = [x,y];
          if(i == 1){
            return pieces
          } else {
            i++;}
        }
      }
    }
    return false;
}
const queenThreat = function(board){
  let opponents = findOpponents(board);
  if(opponents[1][1] == opponents[0][1]){ // the same line ?
    return true;
  }else if(opponents[1][0] == opponents[0][0]){ // the same column?
    return true;
  }else if(diagonal(opponents) == true){ // they're in a diagonal position?}
    return true;
  }else
  return false;
}
const diagonal = function(position){
  let Distance = position[1][0] - position[0][0]; 
   let rightHit = (position[1][1] + Distance) == position[0][1];
   let leftHit = (position[1][1] - Distance) == position[0][1];
  if(rightHit || leftHit){
    return true;
  }else {
    return false;
  }
}

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));