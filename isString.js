function hackerrankInString(s) {
  const hackerrank = "hackerrank"
  const size = s.length
  let index = 0;
  for(let i = 0; i < size; i++){
    if(s[i]===hackerrank[index]){
      index++;
    }
  }
  return hackerrank.length === index ? "YES" : "NO";
}
