function gameOfThrones(s) {
  let counter = {}
  for(let letter of s){
    counter[letter] = (counter[letter] || 0 ) + 1;  
  }
  let tolerance = 2;
  for(let key in counter){
    if(counter[key]%2 != 0){
      tolerance --;
      if(tolerance===0) return false;
    }
  }
  return true;
}    