function camelcase(s) {
  let count = 1;
  for(let i =1; i<s.length; i++){
      if(s.charCodeAt(i)>=65 && s.charCodeAt(i)<=90){
          count++;
      }
  }
  return count;
}
