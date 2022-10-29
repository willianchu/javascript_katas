
/*
 * Complete the 'acmTeam' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY topic as parameter.
 */


function bin2dec(bin){
  return parseInt(bin,2).toString(10);
}

function acmTeam(topic) {
  const arraySize = topic.length-1;
  let currentCombination = 0;
  let maxAnswers = 0;
  let count = 0;
  for(let i=0; i < arraySize; i++){
    for(let j=i+1; j <= arraySize; j++){
      currentCombination = bin2dec(topic[i]) | bin2dec(topic[j]);
      if ( currentCombination > maxAnswers ){
        maxAnswers = currentCombination;
        count = 1; 
      } else if ( currentCombination === maxAnswers ){
        count++;
      }
    }
  }
  const howManyOnes = ( maxAnswers.toString(2).split('1').length-1 );
  return [howManyOnes, count];
}

const topic = [
"1001101111101011011100101100100110111011111011000100111100111110111101011011011100111001100011111010",
"1111010101101010011101101101011101111111111011110010001001100111000111011111101110010111110111110010",
"0011111011111010111101111110101101111001111111100011111101101100100011010011111011111110110011111000",
"0011111001001100111111011110011110100111111100010100111111101011111010101111111011111010111001111111",
"1101011101110010011001110111111100101100011001000111111111110010100111111101110100010001011110111111",
"1111111000011111111111110111010001001011111011110101101111110001111111101100010111100100010101101100",
"1111001110101010101010110111001111111101111111110111101101011100110101111010100111111111111100010110",
"0110111111010101111101111111111100110101110111111110011111011011111010111100111000010001110101110010",
"1111010001101111111001101111011001110100111101100001011110111011101111111011111000111100000111111000",
"1001100111111110010110111111111100110011110110110010111111101100011111110101011011101010100100110110",
"0001111100111110100111111001100011101010111011111111001110011111010011011111101111111110000101110111",
"1101101111010111111111111111000100001001110110011110010100100101101100011010011111111101111101110001",
"1011111110111101110011000101111111111010101111001101100011111111110010111101011101110111100010110011",
"1110010101101110010000011011010101101110001111101011111111001111010100101011111111011111101110110101",
"1001111001111111101010111111111101111111111010110110110111110001111000011101010100101111111100111110",
"1110011110111111111010111111001111011010000111111111110011010111000001101011010110010101011111101111",
"1100101010101110111011111101101110111111011011110111101111111111000000111011011101010111011010011111",
"1011010110011101111011111010000100001111110100111111110011110111001111111011100011101101110110100001",
"1111011111110001010111001111101111010111111111111011110011111011001111001010111111011010100111110111",
"0101111111000010101111011101001010010000111110110111110110011111101101101110100101100000001111001111",
"1110011010100101110011011111101101001110011111101111111111111111101001001111001111010110110111001100",
"0101111001111101110111101111110001000111010000111110011100100111010110111111011001110111011110010101",
"1001111111010111111011011111111111111001011111110011111001001010111101001111110011110101010110111101",
"1110100101011110111110111010110111000111110011111111000101011100111101011111011010110011110110110110",
"0001011001010111111011001101101101111111110111111001111101001110111111111111001111110110111110000110",
"1110110111101011011111000100101101111111000101100010111011101110110111001110011111111100101111111110",
"1011111101101111111011100111110101001011011011101110001111010101111101111100000100011010111101111001",
"1010001011110110101111010111011111110110011110111011110101110011011111000111011101111001110101010110",
"0010111101100111011101111111110110011011110101011100111101001001101111011111100100010011011100101010",
"0111111001011111001110011101110011101011110111001011111010111111110101011001011111111011110101111001",
"0111110110111000110111111111110111100100100010101111101111110111011110111111010101101110010001010111",
"1001101101110111011111101111101111101111010001101101011001111001011111111100111101111111011110011110",
"0011110100011010100010010010111001010011001101010111100001100111101111101101110000101100101010011100",
"1101011101111100011111001011111011001100011111101011011010110110110100001011111110111011100011011110",
"1000111101111100110111100110111010111110010100111111111111000101101111110100000010010110101111010001",
"0001111100111110110111100000111010101011000111010100100111111011011111011110111011100011010101111111",
"0110111101000011011101111001101111111110011011101100111111100101111111011100101111001011001101101100",
"1111011111111001010101110011011001111000000011010010011000111111011011111011101010011100111111011011",
"1111011011111010110010101110111111011011110111101011100111101110010111110100110101011011010101000011",
"1101111110111011011001101010111010111110010110001111100100111101111111100101101001100111101101110001",
"1110010110111110110110101011101101010011110001000000111110110110100001111110111101110111011111011010",
"1011001110101111101100101111000010011011111111011110110001101101001111011101101110111111101101111101",
"0010110010011110100101000101011110110101110011011111110110011111111011011010011110100000111001111011",
"1101011010010000110101010011111111111101110111111001100111010010011111010111000010111100100110010111",
"1111100110111101001100011111101110110101111110110111111111101000000111111001111001010100111101101011",
"1111100111010010101111001110101011110111110110111010111010011111111111101111010011110101100101111101",
"1000110111001101100011110111100111110110001101111010001001100001110111111001110010011110101101100011",
"1110011110101010101101111001101101111011010110001011110100101011101001101110011011101010101111111111",
"0001111111100110011010101111101111110110011010110110111000100100010111110111101111100001011000100111",
"0011010101100111110001110101110111101101101101111110111101010111011110111001011110011100110010110001",
"0111010011010011111001111111110101000111100010011111111010111111011101000011110111110100111101101101",
"0010101101110111100011001011100110010010011111111010010001110111000101101010000000101000101111111011",
"0100101111111100101110111101101101010101110111101111000110110110010111110011101110111111110101111110",
"1111011100011010001011001010110111001011011001110111111110101100111111111111110100101111101000111110",
"0111011111101011111000111101100011111011110011000110111111011111101110111011111100100100100110011011",
"0111111011111111110111111101100011110011111101110010111001000011110101110010110011001111101110111000",
"1101000011010100111001001111101111100001111111110110111011100100110110100000010001110110110110110110",
"0010110011010101110010111011111101011101111110001100111111101011011000111110001001101101110110011110",
"0111011101101011010011111111111101111011111111001001111001010011001011011101011000111101110101010100",
"0111110111010111000101111010101110101111111011000110001010111100110101101011011110011111111101011111",
"1101011010111110101010110111110111101011111111000110011010101001011111011011010111010010010011011011",
"1111110101100111111011111010111101011011111110010111101110111000110101111111101111111111111111001010",
"1111000010111111110011111010011111010111101000110101010000011111100001011001011110111111100011110100",
"1110100011111110111100111111110001110101000111001000111110101011111110111110111011111100110010111111",
"0110010101110100111110101111101101111110111001110101000111110000101101111010110001001001001111001001",
"1100111101011010101010110111111110000001010001000110101111011000011110010010111001010100111111111111",
"1010111001100010110110101001010100011101001111001011110000111010110111110100001110010000110011111101",
"1101101110011011011001110111001101001111110101011111010001111111111110011111101001100001100110110100",
"1010111111110100111000001101011110110110110101110111110111001011111111011111001111010011100101110111",
"1011101101110010110110111000111111100111011001001001101100110010111101010101101011110000110110111001",
"1110011110011011111111010101011111011111101101110101111010101000110010111110101101110001111110100111",
"0110010101011101011111100001111000001101110111100111111111110101111010111111011101111111101010100110",
"1111001111011110111101010000110100111110111010011010111111011110000100110001011110111100011101100101",
"0101001011011111111111111011111000100011110101011001100011110101110001101111011111101110110110111011",
"1111011111111110011111011101011101110110101110101110011000010010101000110100100111011100010001111101",
"0111101101110110110011111011111111110010111011111011001110010111100010110110111011111110111010100111",
"0011110111010111101111110111001111100110100011010111011001111101010111101111111100110010110010111100",
"1111101110111111010001010100110011011001011110101100010001101101101101111101011111110010110100111111",
"1010010011100111110010011111010111011011101101111111100110110111101011110111011111011011001011111100",
"1111101111000010110010011001101111111110011010111010101100011011010101011110101111010010010011101001",
"1110110011100011001111100111001111110001000110101100011011101100111010110111110011010101011011000101",
"0101100011111111100010011111110100010111101111100010111101110111011110111100111001111110111001110001",
"0110010111110001011010001001101111001011110110001111101000110010011100110011100010110100010000110111",
"1111100001010111111111110011100111110111010111101101101111011010110101101001010001001111000111011011",
"1101100110110011111110111110011101011010001101101010111011011011111101111110110110111101110011111011",
"1101111100111110110100011111001111111111001100101011111111101110101011011101101011111011000011111101",
"1111010101011010111101010010111000101101111110011111110111101011111101010010101001111001111100111100",
"0111111101101011110111000011111111101011110011111110001011111111011101101111110101111110011110101011",
"1111010101010011111010101101001111110101000111101101011111011000101001001101011011111111011011100101",
"1001111111111101111111111100111110111110111100000110111110111111110010111101001001111010101010111110",
"1111100011110011111101010101011111100111101011110001111100110011111111110111110011111101110111001010",
"0101101000111110111111011101101011111010000011001110010101110010001000111010011111111100110101110101",
"0110011010001101111000001000111011110111001101100110111000111110111011011011001011101000101000111011",
"0000011100100110110010111111110110000111100111111111110111101110111011001101001101100111101111101001",
"0111010110011011110101101111110000001111010111110111000100111111000010011010101111001011111110000101",
"0010101001101111001101111101000111101111011110111111111110110111101001110001101110111101110101011010",
"0101101111101111111000111101111011010010101010111010110011011011111100100010111011010101111101101101",
"1101011101100100011010001011011111101111010101111101110101111011110111010110001101110011100100000110",
"0011101111110010001011110000110111111111100000100110010011010110101001100100000100101001110001100001",
"1110011111110101111011111010111010011111111011010011100001100101011111101110001111111101111101001000",
];

const result = acmTeam(topic);

console.log(result);



// function acmTeam(topic) {
//   let max = 0;
//   let count = 0;
//   for (let i = 0; i < topic.length; i++) {
//       for (let j = i + 1; j < topic.length; j++) {
//           let temp = 0;
//           for (let k = 0; k < topic[i].length; k++) {
//               if (topic[i][k] == '1' || topic[j][k] == '1') {
//                   temp++;
//               }
//           }
//           if (temp > max) {
//               max = temp;
//               count = 1;
//           } else if (temp == max) {
//               count++;
//           }
//       }
//   }
//   return [max, count];
// }