function utopianTree(n) {
  let heigth = 1;
  for(let i = 1; i <= n ; i++){
      heigth = i % 2 != 0 ? heigth * 2 : heigth + 1;
  }
  return heigth;

}