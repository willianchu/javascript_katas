const matrix = [
  [1,2,3,4],
  [5,6,7,8],
  [11,12,13,14],
  [25,26,7,8]
]

function biggerChunkFirst (arr) {
  const indexSize = arr.length - 1;
  let a = 0;
  let b = 0;
  let i = 0;
  while (i < (indexSize - i)) {
    a += arr[i];
    b += arr[indexSize - i];
    i++;
  }
  return a > b ? arr : arr.reverse();
}

function reverseBigColumns (matrix) {
  return matrix.map(line => {
    return (biggerChunkFirst(line));
  });
  
} 

function rotateRight (matrix){
  const rotated = new Array(matrix[0].length).fill(1).map(()=> Array(matrix.lenght).fill(0));
  for (let column in matrix[0]) {
    for (let line in matrix) {
      rotated[column][line] = matrix[line][column];
    }
  }
  return rotated;
}

function game(matrix){
  const answer3 = reverseBigColumns(rotateRight(reverseBigColumns(matrix)));
  let total = 0;
  for (let c = 0; c < (answer3[0].length/2); c++){
    for (let l = 0; l < (answer3.length/2); l++){
      total += answer3[l][c];
    }
  }
  return total;
}

console.log(game(matrix));