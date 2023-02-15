function countVowels(str) {
  
  const chars = str.toLowerCase().split('');

  // chars is an array of characters, e.g., ['h', 'e', 'l', 'l', 'o']
  
  // use map to create an array of 1s and 0s, where 1s represent vowels and 0s represent non-vowels
  const vowelIndicator = chars.map(char => /[aeiou]/i.test(char) ? 1 : 0);
  
  // use filter to select only the 1s (i.e., the vowels) and count the number of 1s
  const vowelCount = vowelIndicator.filter(indicator => indicator === 1).length;
  
  return vowelCount;
}
