const array = [15,25,50,100];
const element = 50;

const findElementIndex = (array, element) => {
  const answer = array.indexOf(element);
  return answer;
};

console.log(findElementIndex(array, element));

