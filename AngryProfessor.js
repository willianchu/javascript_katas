function angryProfessor(k, a) {
  let total = 0;
  a.forEach(student=>{
    if(student >= 0) total++;
  })
  console.log(total, k);
  return total >= k ? "NO" : "YES";
}

let a = [-2, -1, 0, 1, 2];
let k = 3;

console.log(angryProfessor(k,a), "No");

a = [-1,-3,4,2];
k = 3;

console.log(angryProfessor(k,a), "Yes");

a = [-1, 0, 2, 1, -3, -4, -5, -6];
k = 2;

console.log(angryProfessor(k,a), "No");



// return a.sort().findIndex(num => num > 0) >= k ? 'NO' : 'YES'