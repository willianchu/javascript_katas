function countVowels(str) {
  // convert the string to lowercase to simplify counting
  str = str.toLowerCase();
  
  // define the vowels we want to count
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  
  // initialize a variable to keep track of the count
  let count = 0;
  
  // loop through each character of the string
  for (let i = 0; i < str.length; i++) {
    // if the character is a vowel, increment the count
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  
  // return the final count
  return count;
}
