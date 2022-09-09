const lot = [
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 1, 1, 0, 1],
  [1, 0, 1, 0, 9]
];

function distanceTraversed2(lot) {
  return lookFor9(lot, 0, 0);  
}

function lookFor9(lot, line, column) {
  if(lot[line][column] === 9) {
    console.log("9 found at: ", line, column);
    return 1;
  }
  lot[line][column] = 2; // visited
  let {up, left, right, down} = 0;

  // try up
  if(line - 1 >= 0 && lot[line - 1][column] === 1) {
    console.log("up");
  up = lookFor9(lot, line - 1, column);
  }
  // try left
  if (column - 1 >= 0 && lot[line][column - 1] === 1) {
    console.log("left");
  left = lookFor9(lot, line, column - 1);
  }
  // try right
  if(column + 1 < lot[0].length && lot[line][column + 1] === 1) {
    console.log("right");
  right = lookFor9(lot, line, column + 1);
  }
  // try down
  if(line + 1 < lot.length && lot[line + 1][column] === 1) {
    console.log("down");
  down = lookFor9(lot, line + 1, column);
  }

  if (up || left || right || down) {
    return 1 + up + left + right + down;
  } else {
    return 0;
  }


}

console.log(distanceTraversed2(lot));