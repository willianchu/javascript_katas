// You are given two sets.
// Set A = {1,2,3,4,5,6}
// Set B = {2,3,4,5,6,7,8}

// How many elements are present in A union B?

function unionOfSets(setA, setB) {
  let union = new Set(setA);
  for (let elem of setB) {
    union.add(elem);
  }
  return union.size;
}

const setA = new Set([1, 2, 3, 4, 5, 6]);
const setB = new Set([2, 3, 4, 5, 6, 7, 8]);

console.log(unionOfSets(setA, setB));
