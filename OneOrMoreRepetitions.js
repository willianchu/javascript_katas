var Regex_Pattern = /__________/; //Do not delete '/'. Replace __________ with your regex.

// Task

// You have a test string S .
// Your task is to write a regex that will match S using the following conditions:

// S should begin with 1 or more digits. ---> ^\d+
// After that, S should have 1 or more uppercase letters. ---> [A-Z]+
// S should end with 1 or more lowercase letters. ---> [a-z]+

Regex_Pattern = /^\d+[A-Z]+[a-z]+$/; 