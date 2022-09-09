// first version
const numbers = [0, 3, 6];
const doubled = numbers
  .filter(n => n !== 0)
  .map(n => n * 2);
console.log(doubled); // logs [6, 12]

// with flatMap
 numbers = [0, 3, 6];
 doubled = numbers.flatMap(number => {
  return number === 0 ? [] : [2 * number];
});
console.log(doubled); // logs [6, 12]


// inserting values to array
 numbers = [1, 4];
const trippled = numbers.flatMap(number => {
  return [number, 2 * number, 3 * number];
});
console.log(trippled);
// logs [1, 2, 3, 4, 8, 12]


// FLATTING an array
const arrays = [[2, 4], [6]];
const flatten = arrays.flatMap(item => item);

console.log(flatten); // logs [2, 4, 6]


