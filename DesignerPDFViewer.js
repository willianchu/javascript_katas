function designerPdfViewer(h, word) {
  const wordLower = word.toLowerCase();
  const wordLength = word.length;
  let maxHeight = 0;
  for(let i = 0; i < wordLength; i++){
    index = wordLower.charCodeAt(i);
    if(maxHeight < h[index]){
      maxHeight = h[index];
    }
  }
  return maxHeight * wordLength;
}

