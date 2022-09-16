function pageCount(n, p) {
  
  const pageFlipIndex = (page) => (page % 2) === 0 ? page / 2 : ( page - 1) / 2;
  const distFromEnd = Math.abs(pageFlipIndex(n)-pageFlipIndex(p));
  const distFromBegin = pageFlipIndex(p);
  return distFromBegin < distFromEnd ? distFromBegin : distFromEnd;

}

console.log( pageCount(6, 2));

function pageCount(n, p) {
  
  const pageFlipIndex = (page) => (page % 2) === 0 ? page / 2 : ( page - 1) / 2;
  const distFromEnd = Math.abs(pageFlipIndex(n)-pageFlipIndex(p));
  return n-p < p ? pageFlipIndex(p) : distFromEnd;

}