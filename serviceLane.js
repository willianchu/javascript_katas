function serviceLane(n, cases, width) {
  let answer = [];
  for(let cas of cases){
      let min = width[cas[0]];
      for(let i = cas[0]; i <= cas[1]; i++){
          if(width[i]<min){
              min = width[i];
          }
      }
      answer.push(min);
  }
  return answer
}