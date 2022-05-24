const grid = ['abc', 'eda', 'efg'];

function gridChallenge(grid) {
  const newGrid = new Array(grid.length);
  for (let i in grid) { // define newGrid
    newGrid[i] = [...(grid[i].split('').sort())];
  }
  
  for(let column = 0; column <newGrid[0].length; column++) { // check if columns are equal
    console.log(column);
    for(let row = 1; row < newGrid.length; row++) { // check if columns are sorted too
      
      console.log(newGrid[row][column] >= newGrid[row-1][column]);
      if(newGrid[row][column] >= newGrid[row-1][column]) {
        continue;
      } else {
        return "NO";
      }
    }
  }
  return "YES";
};

console.log(gridChallenge(grid))