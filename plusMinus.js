// count how many numbers are positives, negatives and equal zero inside an array.
// make a proportion of each with 6 digit precision

const array = [ 3, -5, 0, 3, 4, -1];

const plusMinus(array){
    let positives = 0;
    let negatives = 0;
    let zeros = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] > 0){
            positives++;
        } else if (array[i] < 0){
            negatives++;
        } else {
            zeros++;
        }
    }
    let proportion = (positives / array.length).toFixed(6);
    let proportion2 = (negatives / array.length).toFixed(6);
    let proportion3 = (zeros / array.length).toFixed(6);
    console.log(proportion);
    console.log(proportion2);
    console.log(proportion3);
}