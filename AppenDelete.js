function appendAndDelete(s, t, k) {
  let s_copy = Array.from(s); 
  const t_copy = t; 
  let counter = 0;
  for (let i = 0 ; i< s.length; i++){
    console.log(s[i], t[i]);
    if(s[i] !== t[i])
    {
        while( i < s.length )
        {
            s_copy.pop();
            counter++;
            i++;
        }
        console.log(s_copy,counter);
    }
  }
  if(s.length === t.length && counter === 0){ // change all

    return (k > 1 && k%2 == 0 )|| k >= t.length *2  ? 'Yes' : 'No';
  }
  if(s_copy.length === t.length){ // 
    return k > counter ? 'Yes' : 'No';
  }
  if(t.length > s_copy.length)
  {
    let charRequired = t.length - s_copy.length;
    if(counter === 0){
      return k >=  2 + charRequired && k % charRequired ==0 ? 'Yes' : 'No';
    }

  return k >=  counter + charRequired ? 'Yes' : 'No';
  }
}


let stringA = "aba";
let stringB = "aba";
let moves = 7;

console.log(appendAndDelete(stringA, stringB, moves),"Yes"); // Yes



stringA = "abcd";
stringB = "abcdert";
moves = 10;

console.log(appendAndDelete(stringA, stringB, moves),"No"); // No

stringA = "y";
stringB = "yu";
moves = 2;

console.log(appendAndDelete(stringA, stringB, moves),"No"); // No

stringA = "ashley";
stringB = "ash";
moves = 2;

console.log(appendAndDelete(stringA, stringB, moves),"No"); // No

stringA = "hackerhappy";
stringB = "hackerrank";
moves = 9;

console.log(appendAndDelete(stringA, stringB, moves),"Yes"); // Yes

stringA = "abcdef";
stringB = "fedcba";
moves = 15;

console.log(appendAndDelete(stringA, stringB, moves),"Yes"); // Yes