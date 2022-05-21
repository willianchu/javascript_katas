// return wich is bigger num in array

function max(array){
  let max = array[0];
  for (let i = 1; i < array.length; i++){
    if (array[i] > max){
      max = array[i];
    }
  }
  return max;
}

function rubix(matrix){
  const maxWidth = matrix.length;
  const halfHeight = Math.abs(maxWidth / 2);
  
  let maxSum = 0;
  for (let i=0; i < halfHeight; i++){
    for (let j=0; j < halfHeight; j++){
      maxSum += max([matrix[i][j], matrix[i][maxWidth - j - 1], matrix[maxWidth - i - 1][j], matrix[maxWidth - i - 1][maxWidth - j - 1]]);
    }
  }
  return maxSum;
}

const matrix = [
[107, 54, 128, 15],
[12, 75, 110, 138],
[100, 96, 34, 85],
[75, 15, 28, 112],
]

console.log(rubix(matrix));