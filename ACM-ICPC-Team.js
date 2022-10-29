
/*
 * Complete the 'acmTeam' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY topic as parameter.
 */

function acmTeam(topic) {
    let max = 0;
    let count = 0;
    for (let i = 0; i < topic.length; i++) {
        for (let j = i + 1; j < topic.length; j++) {
            let temp = 0;
            for (let k = 0; k < topic[i].length; k++) {
                if (topic[i][k] == '1' || topic[j][k] == '1') {
                    temp++;
                }
            }
            if (temp > max) {
                max = temp;
                count = 1;
            } else if (temp == max) {
                count++;
            }
        }
    }
    return [max, count];
}

const topic = ["10101", "11100", "11010", "00101"];

const result = acmTeam(topic);

console.log(result);

