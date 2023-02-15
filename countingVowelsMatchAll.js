function countVowels(str) {
  
  const vowelRegex = /[aeiou]/gi;
  
  // count the number of matches using the spread operator and length property
  const vowelCount = [...str.matchAll(vowelRegex)].length;
  
  return vowelCount;
}
