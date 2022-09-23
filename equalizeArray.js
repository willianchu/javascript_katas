function equalizeArray(arr) {
  let obj = {};
  for(let element of arr){
      if(obj[element]){
          obj[element]++;
      } else {
          obj[element]=1;
      }
  }
  let values = Object.values(obj);
  if(values.length === 1) return 0;
  values.sort((a,b)=>a-b);
  values.splice(-1);
  return values.reduce((a, b) => a + b);
}

const arr =[51, 51, 51, 51, 51 ,51, 51 ,51 ,51 ,51 ,51 ,51, 51 ,51 ,51 ,51 ,51 ,51, 51, 51, 51, 51];