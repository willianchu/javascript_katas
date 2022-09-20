function jumpingOnClouds(c) {
  let index = 0;
  let steps = 0;
  while(index < c.length-1){
      if(c[index+2]===0){
          index+=2;
      } else if(c[index+1]===0){
          index+=1;
      }
      steps++;
      console.log(index);
  }
  return steps;
}

let clouds = [ 0, 0, 1, 0, 0, 1, 0];

console.log(jumpingOnClouds(clouds));