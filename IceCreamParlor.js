function icecreamParlor(m, arr) {
    let maxTotal = 0;
    let answer = [];
    let size = arr.length;
    for(let i = 0; i < size - 1 ; i++){
      for(let j = i; j < size; j++){
        if((arr[i]+arr[j]) <= m && (arr[i]+arr[j]) > maxTotal){
          maxTotal = arr[i]+arr[j];
          answer[0] = i+1;
          answer[1] = j+1;
        }
      }
    }
    return answer;
}

console.log(icecreamParlor(8, [1, 3, 4, 4, 6, 8]));