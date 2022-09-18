function bigSorting(unsorted) {
  unsorted.forEach(number => console.log(BigInt(number)));
  return  unsorted.sort((a,b)=>Number(BigInt(a)-BigInt(b)));


}

const unsorted = [
8,
1,
2,
100,
12303479849857341718340192371,
3084193741082938,
3084193741082937,
111,
200
];

console.log(bigSorting(unsorted));