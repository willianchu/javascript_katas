const blocksAway = function(directions) {
  let result = {
    "east": 0,
    "north": 0
  }
  let position = [0,0];
  let last = [0,-1];
  let gps = "";
  let x = 0;
  let y = 0;
  for (let i = 0 ; i < directions.length ; i += 2){
    gps = (compass(position,last)); // heading reference
    x = position[0]; // ruins pointer effect
    y = position[1];
    last = [x,y];
    if(position[0] == 0 && (gps !== "W")){ // if column is a barrier
        switch(gps){
        case "N":    // heading North options
          switch (directions[i]){
            case "right":
              position[0] += directions[ i + 1 ];
              break;
            case "left":
              position[1] += directions[ i + 1 ];
              break;
            default:
              return false; // lost gps signal N
          }
          break;
        case "S":  // heading South options
          switch (directions[i]){
            case "right":
              position[1] -= directions[ i + 1 ];
              break;
            case "left":
              position[0] += directions[ i + 1 ];
              break;
            default:
              return false; // lost gps signal S
          }
          break;
        default:
          return false;
      }
    }else if(position[1]==0 && (gps !=="S")){ // Line is a barrier
      switch(gps){
        case "E": // if heading East
          switch (directions[i]){
            case "right":
              position[0] += directions[ i + 1 ];
              break;
            case "left":
              position[1] += directions[ i + 1 ];
              break;
            default:
              return false; // lost gps signal
          }
          break;
        case "W": // if heading West
          switch (directions[i]){
            case "right":
              position[1] += directions[ i + 1 ];
              break;
            case "left":
              position[0] -= directions[ i + 1 ];
              break;
            default:
              return false; // lost gps signal
          }
          break;
        default:
          return false; // lost gps signal S
      }
    } else {
      switch(gps){
        case "N" : 
          switch (directions[i]){
            case "right":
              position[0] += directions[ i + 1 ];
              break;
            case "left":
              position[0] -= directions[ i + 1 ];
              break;
            default:
              return false; // lost gps signal
          }
          break;
        case "S": 
          switch (directions[i]){
            case "right":
              position[0] -= directions[ i + 1 ];
              break;
            case "left":
              position[0] += directions[ i + 1 ];
              break;
            default:
              return false; // lost gps signal
          }
          break;
        case "E" : 
          switch (directions[i]){
            case "right":
              position[1] -= directions[ i + 1 ];
              break;
            case "left":
              position[1] += directions[ i + 1 ];
              break;
            default:
              return false; // lost gps signal
          }
          break;
        case "W": // if heading West
          switch (directions[i]){
            case "right":
              position[1] += directions[ i + 1 ];
              break;
            case "left":
              position[1] -= directions[ i + 1 ];
              break;
            default:
              return false; // lost gps signal
          }
          break;
        default:
          return false;
      }
    }
  }
  result.east = position[0];
  result.north = position[1]; 
  return result;
}

const compass = function(actual, last){
  let move = 0;
  if(actual == last){ return false;} // abort no movement
  if(actual[0] == last[0]){
    move = actual[1] - last[1];
    return move > 0 ? "N" : "S";
  }else {
    move = actual[0] - last[0];
    return move > 0 ? "E" : "W";
  }
}


console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

/*
{east: 1, north: 3}
{east: 3, north: 3}
{east: 0, north: 0}
*/
