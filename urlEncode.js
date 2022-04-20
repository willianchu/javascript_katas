function urlEncode(string) {
  let result = "";
  for (let i = string.length-1; i >= 0; i--) { // clear
    if (string[i] === " " && result =="") { // spaces at the end
      continue;
    } 
    result = string.slice(0,i+1);
    break; 
  }
  string = result;
  result = "";
  
  for (let i = 0; i < string.length; i++) { // clear
    if (string[i] === " " && result == "") { // spc beginning
      continue;
    } else if (string[i] === " ") { // spc 
      result += "%20";// change to %20 spaces at the middle
    } else {
      result += string[i];// add letters to result
    }
  }
  return result;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode("   Lighthouse Labs    "));
console.log(urlEncode("blue is greener than purple for sure"));