// Given square array, rotate 90 degrees counter clockwise (left)

let array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
let answer = [
  [],
  [],
  []
];

function rotate(array, nTimes) {
  if(nTimes % 4 === 0) {
    return array;
  }
  if(nTimes % 2 === 0) {
    return upsideDown(array);
  }
  if((nTimes + 1) % 4 === 0) {
    return rotateRight(array);
  }
  if((nTimes + 1) % 2 === 0) {
    return rotateLeft(array);
  }
}

const rotateRight = (array) => {
  let lines = array.length;
  let columns = array[0].length;
  for(let c = 0; c < columns; c++) {
    for(let l = lines - 1; l >= 0; l--) {
      answer[c].push(array[l][c]);
    }
  }
  return answer;
}

const rotateLeft = (array) => {
  let lines = array.length;
  let columns = array[0].length - 1;
  for(let c = columns; c >= 0; c--) {
    for(let l = 0; l < lines; l++) {
      answer[c].push(array[l][columns - c]);
    }
  }
  return answer;
}
const upsideDown = (array) => {
  let lines = array.length - 1;
  let columns = array[0].length - 1;
  for(let l = lines; l >= 0; l--) {
    for(let c = columns; c >= 0; c--) {
      answer[l].push(array[lines - l][c]);
    }
  }
  return answer;
}

console.log(rotate(array, 2));
