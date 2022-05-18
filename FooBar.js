/*
 * Complete the 'FooBar' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function isMultiple(n, m) {
  return n % m === 0;
}

function FooBar(n) {
  // Write your code here
  let i = 1;
  while (i <= n) {
    if (isMultiple(i, 3) && isMultiple(i, 5)) {
      console.log("FooBar");
    } else if (isMultiple(i, 3)) {
      console.log("Foo");
    } else if (isMultiple(i, 5)) {
      console.log("Bar");
    } else {
      console.log(i);
    }
    i++;
  }
}

FooBar(15);





