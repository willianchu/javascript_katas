const blocksAway = function(directions) {
  const position = {
    "east": 0,
    "north": 0
  };
  const last = {
    "east": 0,
    "north": -1
  };
  let gps = "";
  
  for (let i = 0 ; i < directions.length ; i += 2){
    gps = (compass(position,last)); // heading reference
    last.east = position.east * 1; // remove pointer effect
    last.north = position.north * 1; // insert value not reference
    if(position.east == 0 && (gps !== "W")){ // if column is a barrier
        switch(gps){
        case "N":    // heading North options
          switch (directions[i]){
            case "right":
              position.east += directions[ i + 1 ];
              break;
            case "left":
              position.north += directions[ i + 1 ];
              break;
            default:
              return false; // lost gps signal N
          }
          break;
        case "S":  // heading South options
          switch (directions[i]){
            case "right":
              position.north -= directions[ i + 1 ];
              break;
            case "left":
              position.east += directions[ i + 1 ];
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
              position.east += directions[ i + 1 ];
              break;
            case "left":
              position.north += directions[ i + 1 ];
              break;
            default:
              return false; // lost gps signal
          }
          break;
        case "W": // if heading West
          switch (directions[i]){
            case "right":
              position.north += directions[ i + 1 ];
              break;
            case "left":
              position.east -= directions[ i + 1 ];
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
              position.east += directions[ i + 1 ];
              break;
            case "left":
              position.east -= directions[ i + 1 ];
              break;
            default:
              return false; // lost gps signal
          }
          break;
        case "S": 
          switch (directions[i]){
            case "right":
              position.east -= directions[ i + 1 ];
              break;
            case "left":
              position.east += directions[ i + 1 ];
              break;
            default:
              return false; // lost gps signal
          }
          break;
        case "E" : 
          switch (directions[i]){
            case "right":
              position.north -= directions[ i + 1 ];
              break;
            case "left":
              position.north += directions[ i + 1 ];
              break;
            default:
              return false; // lost gps signal
          }
          break;
        case "W": // if heading West
          switch (directions[i]){
            case "right":
              position.north += directions[ i + 1 ];
              break;
            case "left":
              position.north -= directions[ i + 1 ];
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
  return position;
}

const compass = function(actual, last){
  let move = 0;
  if(actual == last){ return false;} // abort no movement
  if(actual.east == last.east){
    move = actual.north - last.north;
    return move > 0 ? "N" : "S";
  }else {
    move = actual.east - last.east;
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
