var Regex_Pattern = /__________/; //Do not delete '/'. Replace __________ with your regex.

// Task

// You have a test string S.
// Your task is to write a regex that will match S using the following conditions:

// S should begin with 2 or more digits.
// After that, S should have 0 or more lowercase letters.
// S should end with 0 or more uppercase letters

Regex_Pattern = /^\d\d+[a-z]*[A-Z]*$/; 