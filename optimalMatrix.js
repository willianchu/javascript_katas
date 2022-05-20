// const matrix = [
//   [ 119, 56, 43, 108 ],
//   [ 114, 101, 125, 83 ],
//   [ 98, 78, 56, 42 ],
//   [112, 49, 15, 62]
// ]


const matrix = [
  [ 112, 42, 83, 119 ],
  [ 56, 125, 56, 49 ],
  [ 15, 78, 101, 43 ],
  [62, 98, 114, 108]
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
  const answer1 = rotateRight((matrix));
  console.log(answer1);
  const answer2 = reverseBigColumns(answer1);
  console.log(answer2);
  const answer2a = rotateRight(answer2);
  const answer3 = reverseBigColumns(answer2a);
  let total = 0;
  for (let c = 0; c < (answer3[0].length/2); c++){
    for (let l = 0; l < (answer3.length/2); l++){
      total += answer3[l][c];
    }
  }
  console.log(answer3);
  return total;
}

console.log(game(matrix));