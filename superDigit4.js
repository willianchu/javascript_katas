function superDigit(n, k) {
  let na = n.split('').map(Number).reduce((a,b) => a+b, 0)
  console.log(na);
  let m = (na*k)
  let p = m.toString()
 return p.length > 1 ? superDigit(p, 1) : p
}

console.log(superDigit('148', 2));
