const findSpace = function(text) {
  let answer = "";
  for(let i = 0 ; i < text.length-2 ; i++){
    if((text[i]+text[i+1]+text[i+2]) == "%20"){
      answer += " ";
      i += 2;   
    } else {
      answer += text[i];
    }
  }
  answer += text[text.length-2]+text[text.length-1];
  return answer;
};
const urlDecode = function(text) {
  let urlText = findSpace(text) + "&";
  let keys = {};
  let prop = "";
  let value = "";
  for(let i = 0 ; i < urlText.length ; i++){
    switch(urlText[i]){
      case "=":
        prop = value; // loads property name
        value = "";
        break;
      case "&":       // Create a property 
        keys[prop] = value;
        value = "";
        break;
      default:
      value += urlText[i];
    }
  };
  return keys;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

/*
{duck: "rubber"}
{bootcamp: "Lighthouse Labs"}
{city: "Vancouver", weather: "lots of rain"}
"lots of rain"
*/