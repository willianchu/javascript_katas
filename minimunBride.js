const line = [1, 2, 5, 3, 7, 8, 6, 4];

function minimumBride(q){
  let difference = 0;
  let temp = 0;
  let line = [...q];
  let count = 0;
  let order = [... q.sort((a, b) => b - a)];
  for(let number of order){
    
    for (let i = 0; i < line.length; i++){
      console.log(line[i],number);
      if(line[i] == number){
        // verify if it at correct place
        if (line[i] === i + 1){
          continue;
        } else {
          // if not, calculate the difference
          difference = (line[i] - 1) - i;
          // abort the loop if the difference is greater than 2
          if (difference > 2){
            console.log("Too chaotic");
            return;
          }
          // if the difference is less than 2, move the number to the correct place
          console.log("changed", line[i], line[i + difference]);
          temp = line[i];
          line[i] = line[i + difference];
          line[i + difference] = temp;
          console.log("changed", line[i], line[i + difference]);
          count += difference;
          break;
        }
      }
    }
  }
  console.log(line);
  console.log(count)
  if (count != 0) {console.log(count)};
}
minimumBride(line);