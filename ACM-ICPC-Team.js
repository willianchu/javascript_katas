
/*
 * Complete the 'acmTeam' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY topic as parameter.
 */

function acmTeam(topic) {
    let arr = [];
    let members = topic.length;
    for(let i = 0; i < members-1; i++){
        arr[i]=[];
        for(let j = i+1; j < members; j++){
            let sizeTopic = topic[j].length;
            for(let item in sizeTopic){
                console.log(topic[i][item]);
                if(topic[i][item]==='1' || topic[j][item]==='1'){
                    arr[i].push(item+1);
                }
            }
        }
        
    }
    console.log(arr);
    return arr;
}

const topic = ["10101", "11100", "11010", "00101"];

const result = acmTeam(topic);

console.log(result);

