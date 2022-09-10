function bonAppetit(bill, k, b) {
  const AnnasTotal = bill.reduce (
      (total, value, index) => total += index === k ? 0 : value, 0
    );
  const difference = b - (AnnasTotal / 2);
  console.log(difference <= 0 ? "Bon Appetit" : difference);
  return true;
}
// n = number of items && k = index Anna did not eat
// bill [i]
// b = amount of money to paid
let n = 4;
let k = 1;
const bill = [3, 10, 2, 9];
let b = 12;

console.log(bonAppetit(bill, k, b));