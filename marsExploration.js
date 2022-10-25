function marsExploration(s) {
    let count = 0;
    for(let i = 0; i < s.length; i++){
        // console.log('s[i]:', s[i],"SOS[i % 3]:", "SOS"[i % 3], i,[i % 3]);
        if(s[i] !== "SOS"[i % 3]) count++;
    }
    return count;    

}

marsExploration("SOSSPSSQSSOR");

