function acmTeam(topic) {
  let arr = [];
  let members = topic.length;
  let combinations = 0;
  arr[combinations]=[];
  for(let i = 0; i < members-1; i++){
    for(let j = i+1; j < members - i; j++){
        for(let item in topic[j]){
            
          if(topic[i][item]==='1' || topic[j][item]==='1'){
              console.log(i,j,item*1+1,arr[combinations]);
              arr[combinations].push((item*1)+1);
          }
        }
      combinations++;
      arr[combinations]=[];
    }
      
  }

  let maxSize = (Math.max.apply(null, arr.flatMap(e=>  e.length)));
  console.log(" T=",arr.reduce(equalsMax,0));
  return maxSize;
  function (t,e)=> {
    if(e===maxSize){
      return t += 1;
    }
  }
}
let arr = [
  "10101",
  "11100",
  "11010",
  "00101"
]
console.log(acmTeam(arr));