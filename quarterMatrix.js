const matrix = [
  [ 112, 42, 83, 119 ],
  [ 56, 125, 56, 49 ],
  [ 15, 78, 101, 43 ],
  [62, 98, 114, 108]
]

const matrix = [
  [107, 54, 128, 15],
[12, 75, 110, 138],
[100, 96, 34, 85],
[75, 15, 28, 112],
]

// 488
// const matrix = [
//   [ 1, 2],
//   [ 3, 4]
// ]
function columnsToRows(matrix) {
  let width = matrix[0].length;
  let height = matrix.length;
  let array = new Array(width).fill(1).map(()=> new Array(height).fill(0));
  for (let collumn = 0; collumn < width; collumn++){
    for (let line = 0; line < height; line++) {
      array[collumn][line] = matrix[line][collumn]
    }
  }
  return array;
}

function flipHalf(matrix, position){
  const fullWidth = matrix[0].length;
  const halfWidth = Math.abs(position);
  const height = matrix.length;
  const flipped = []
  let i = 0;
  let a = 0;
  let b = 0;
  for (let index = 0; index < fullWidth; index++){
    i = 0;
    a = 0;
    b = 0;
    while ( i < (height - i -1) ){
      a += matrix[index][i];
      b += matrix[index][(height - i -1)];
      i++;
    }
    if ( index < halfWidth) {
      flipped.push(matrix[index])
    } else {
      flipped.push( a > b ? matrix[index] : matrix[index].reverse());
    }
  }
  return flipped;
}

function wholeThing(matrix){
  const answer1 = columnsToRows(matrix);
  const answer2 = flipHalf(answer1,(answer1.length/2));
  const answer3 = columnsToRows(answer2);
  const answer4 = flipHalf(answer3,0)
  let total = 0;
  const halfWide = Math.abs(matrix[0].length / 2);
  const halfHeight = Math.abs(matrix.length / 2);
  console.log("loop",halfHeight);
  for (let l = 0; l < halfHeight; l++ ){
    for (let c = 0; c < halfWide; c++ ){
      console.log("loop");
      total += answer4[l][c];
    }
  }
  return total;
}


console.log(wholeThing(matrix));
