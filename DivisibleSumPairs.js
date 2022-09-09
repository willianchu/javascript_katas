function divisibleSumPairs(n, k, ar) {
    let count = 0;
    for(let i = 0; i < n - 1; i++){
        for(let j = i + 1; j < n; j++){
            let pair = ar[i] + ar [j];
            if ((pair % k) === 0){
                count ++;
            }
        }
    }
    return count;
}