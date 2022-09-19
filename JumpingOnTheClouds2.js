function jumpingOnClouds(c, k) {
let energy = 100;
let track = 0;
do{
  track = (track + k);
  track = track > c.length - 1 ? track - c.length  : track;
  energy = c[track] === 1 ? energy - 3 : energy - 1;
} while(track != 0)
return energy;
}

const c = [0,0,1,0]; // clouds
let k = 2; // step
console.log(jumpingOnClouds(c,k));
