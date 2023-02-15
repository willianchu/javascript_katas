function countVowels(str) {
 const vowelRegex = /[aeiou]/gi;
  // /gi means global and case-insensitive
  
  // count the number of matches
  const vowelCount = str.match(vowelRegex).length;
  
  return vowelCount;
}
