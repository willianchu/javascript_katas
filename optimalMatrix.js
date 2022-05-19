const matrix = [
  [1,2,3,4],
  [5,6,7,8],
  [11,12,13,14],
  [25,26,7,8]
]

function biggerChunkFirst (arr) {
  const median = (Math.abs(arr.length / 2) - 1);
  let a = 0;
  let b = 0;
  for (let index in arr) {
    if (index<=median) {
      a += arr[index];
    } else {
      b += arr[index];
    }
  }
  return a > b ? arr : arr.reverse();
}

function reverseBigColumns (matrix) {
  let answer = [];
  for (let line of matrix){
    answer.push(biggerChunkFirst(line));
  }
  return answer;
} 

function rotateRight (matrix){
  const emptyLine = new Array(matrix.lenght).fill(0);
  const rotated = new Array(matrix[0].length).fill(1).map(()=> [...emptyLine]);
  console.log(rotated);
  for (let column = 0; column < matrix[0].length; column++){
    for (let line = 0; line < matrix.length; line++) {
      rotated[column][line] = matrix[line][column];
    }
  }
  return rotated;
}

function game(matrix){
  const answer1 = reverseBigColumns(matrix)
  const answer2 = rotateRight(answer1);
  const answer3 = reverseBigColumns(answer2);
  let total = 0;
  for (let c = 0; c < (answer3[0].length/2); c++){
    for (let l = 0; l < (answer3.length/2); l++){
      total += answer3[l][c];
    }
  }
  return total;
}

console.log(game(matrix));