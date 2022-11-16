var Regex_Pattern = /__________/; //Do not delete '/'. Replace __________ with your regex.

// Task

// You have a test string S.
// Your task is to write a regex that will match  using the following conditions:

// S should begin with 1 or 2 digits.
// After that,  should have S or 3 more letters (both lowercase and uppercase).
// Then S should end with up to 3 . symbol(s). You can end with  to  . symbol(s), inclusively.

Regex_Pattern = /^\d{1,2}[a-zA-Z]{3,}\.{0,3}$/; 