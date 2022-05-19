function median(arr) {
  const sorted = arr.sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return sorted[middle];
}

const array = [1, 2, 3, 4, 5];

console.log(median(array));
ls