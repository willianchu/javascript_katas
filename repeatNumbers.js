const repeatNumbers = function(data) {
  let repeated = [];
  for(let piece of data){
    repeated += (repeated.length == 0 ? "" : ", ") + cloning(piece);
  }
  return repeated;
};

function cloning (array){
  if (array.length !== 2){return 0} // abort
  let result = '';
  for(let i = 0 ; i < array[1] ; i++){
    result += array[0]
  }
  return result;
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));