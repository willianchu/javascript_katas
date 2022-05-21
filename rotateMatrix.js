// Rotate a 2d array 90 degrees clockwise

function rotate90(matrix){
  const SIZE = matrix.length;
  var result = new Array(SIZE).fill(0).map(() => new Array(SIZE).fill(0));
  for (var i = 0; i < SIZE; i++) {
    for (var j = 0; j < SIZE; j++) {
      result[j][SIZE - i -1] = matrix[i][j];
    }
  }
  return result;
}


Matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

console.log(rotate90(rotate90( Matrix)));