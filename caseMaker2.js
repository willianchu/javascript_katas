const substitute = function(search, change, string){ // auxiliary 
  let answer = '';                             // search and
  for(let i = 0 ; i < string.length ; i++){    // change values
    if(string[i]==search){
      answer += change;
    } else {
      answer += string[i];
    }
  }
  return answer;
}
const isVowel = function(char){ // auxiliary verifies if is vowel
  switch(char){
    case 'a' || 'A':
      return true;
    case 'e' || 'E':
      return true;
    case 'i' || 'I':
      return true;
    case 'o' || 'O':
      return true;   
    case 'u' || 'U':
      return true;
    default:
      return false;  
  }
}
const upper = function(string){ // to Upper
  let answer = '';
  for(let i = 0 ; i < string.length ; i++){
    if((string[i] >= 'a') && (string[i] <= 'z')){
      answer += String.fromCharCode((string.charCodeAt(i) - 32));
    } else {
      answer += string[i];
    }
  }
  return answer;
}
const lower = function(string){ // to lower !!!!!! <<<<<<< here !
  let answer = '';
  for(let i = 0 ; i < string.length ; i++){
    if((string[i] >= 'A') && (string[i] <= 'Z')){
      answer += String.fromCharCode((string.charCodeAt(i) + 32));
    } else {
      answer += string[i];
    }
  }
  return answer;
}
const removeFirstLetter = function(string){ // auxiliary to subst
  let answer = '';                      // substring function
  for (let i = 1 ; i < string.length ; i++){
      answer += string[i];
  }
  return answer;
}
const afterSpaceUp = function(string){ // change to upper after space
  let answer = string[0];                   // auxiliary
  for(let i = 1 ; i < string.length ; i++){
    if (string[i-1]==' '){
      answer += upper(string[i]);
    }else{
      answer += string[i];
    }
  }
  return answer;
}
const killBlankSpaces = function(string){
  let answer = '';
  for(let i = 0 ; i < string.length ; i++){
    if(string[i]!==' '){
      answer += string[i];
    }
  }
  return answer;
}
const vowelOrConsonant2Up = function(whichToUp, string){ // aux vowel or consonant to upper case
  let selector = '';
  if(whichToUp == 'vowel'){ 
    selector = true;
  } else if(whichToUp == 'consonant'){
    selector = false;
  } else {
    return false;
  }
  let answer = '';
  for(let i = 0 ; i < string.length ; i++){
    if (isVowel(string[i]) == selector){
      answer += upper(string[i]);
    } else {
      answer += string[i];
    }
  }
  return answer;
}
const camelCase = function(string){
  return killBlankSpaces(afterSpaceUp(string));
}
const title = function(string){
  return upper(string[0]) + afterSpaceUp(removeFirstLetter(string));
}
const pascal = function(string){
  return upper(string[0]) + camelCase(removeFirstLetter(string));
}
const snake = function(string){
  return substitute(' ', '_', string);
}
const kebab = function(string){
  return substitute(' ', '-', string);
}
const vowel = function(string){
  return vowelOrConsonant2Up('vowel', string);
}
const consonant = function(string){
  return vowelOrConsonant2Up('consonant', string);
}
 
const makeCase = function(input, task) {
  let loop = (Array.isArray(task)) ? task.length : 1; //HowManyLoops
  var string = input;
  for(let i = 0 ; i < loop ; i++){ 
    switch(loop == 1 ? task : task[i]){
      case "camel":
        string = camelCase(string);
        break;
      case "pascal":
        string = pascal(string);
        break;
      case "snake":
        string = snake(string);
        break;
      case "kebab":
        string = kebab(string);
        break;
      case "title":
        string = title(string);
        break;
      case "vowel":
        string = vowel(string);
        break;
      case "consonant":
        string = consonant(string);
        break;
      case "upper":
        string = upper(string);
        break;
      case "lower":
        string = lower(string);
        break;
      default:
        return false;
    }
  }
  return string;
}
console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"])); // works with infinite combinations