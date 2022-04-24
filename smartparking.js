const whereCanIPark = function (spots, vehicle) {
  for (let y = 0 ; y< spots.length; y++) {
    for(let x = 0; x < spots[y].length; x++) {
      if (sizeCar(vehicle) <= sizeCar(spots[y][x])) {
        return [x,y];
      }
    }
  }
  return false;
};

function sizeCar(type) { // set business rules
switch(type) {  
  case "M":
    return 1;
  case "S":
    return 2;
  case "R":
    return 3;
  case "motorcycle":
    return 1;
  case "small":
    return 2;
  case "regular":
    return 3;
  default:
    return 0;
  }
}