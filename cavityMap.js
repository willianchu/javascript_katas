function cavityMap(grid) {
    let newMap = [];
    let xValue = 0;
    newMap[0] = grid[0];
    for(let line = 1; line < grid.length -1; line++){
      newMap[line] = grid[line][0];
      for(let column = 1; column <  grid[line].length-1; column++ ){
        xValue = grid[line][column];
        
        if(grid[line][column-1] < xValue 
          && grid[line][column+1] < xValue 
          && grid[line-1][column] < xValue 
          && grid[line+1][column] < xValue){
            newMap[line] += "X";
          } else {
            newMap[line] +=  xValue;
          }
        }
        newMap[line] += grid[line][grid.length-1];
    }
    newMap[grid.length-1] = grid[grid.length-1];
    return newMap;
}
let map = ["1112","1912","1892","1234"];
console.log(cavityMap(map));