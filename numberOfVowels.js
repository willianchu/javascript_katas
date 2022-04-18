const numberOfVowels = function(string) {
  number = 0;
  for(let i = 0; i < string.length; i++) {
    if(isVowel(string[i])== true) {
      number ++;
    }
  }
  return number;
};
function isVowel(char) { // auxiliary function
  let character = (char.toLowerCase());
  if(character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
    return true;
  } else {
    return false;
  }
}
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));