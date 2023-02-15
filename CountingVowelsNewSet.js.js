function countVowels(str) {
  
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  
  let count = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (vowels.has(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
