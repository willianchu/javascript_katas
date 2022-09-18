function designerPdfViewer(h, word) {
  const wordLower = word.toLowerCase();
  const wordLength = word.length;
  let maxHeight = 0;
  let index = 0;
  for(let i = 0; i < wordLength; i++){
    index = wordLower.charCodeAt(i) - 97;
    if(maxHeight < h[index]){
      maxHeight = h[index];
    }
  }
  return maxHeight * wordLength;
}

const h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7];
const word = "zaba";

console.log(designerPdfViewer(h, word));