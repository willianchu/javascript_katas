var Regex_Pattern = /__________/; //Do not delete '/'. Replace __________ with your regex.

// Task

// You have a test string S.
// Your task is to write a regex that will match S using the following conditions:

// S should begin with 2 or more digits. ---> ^\d{2,}
// After that, S should have 0 or more lowercase letters. ---> [a-z]*
// S should end with 0 or more uppercase letters ---> [A-Z]*$

Regex_Pattern = /^\d{2,}[a-z]*[A-Z]*$/; 