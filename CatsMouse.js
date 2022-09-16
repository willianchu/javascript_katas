function catAndMouse(x, y, z) {
  let distanceA = Math.abs(x-z);
  let distanceB = Math.abs(y-z);
  if(distanceA === distanceB) return "Mouse C";
  return distanceA < distanceB ? "Cat A" : "Cat B";
}

console.log(catAndMouse(1,2,3)); // cat b
console.log(catAndMouse(1,3,2)); // mouse c