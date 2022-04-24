const camelCase = function(string){
  let camel = '';
  for(let i = 0 ; i < string.length ; i++){
    if(string[i]==' '){
      camel += string[++i].toUpperCase();
    } else {
      camel += string[i];
    }
  }
  return camel;
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));