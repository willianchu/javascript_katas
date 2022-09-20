function libraryFine(d1, m1, y1, d2, m2, y2) {
  if(y1>y2) return 10000;  // apply year fee
  if(m1>m2 && y1===y2) return 500 * (m1-m2); // apply monthly fee
  if(d1>d2 && m1===m2 && y1===y2) return 15 * (d1 - d2);
  return 0;
}

// return y1 < y2 ? // abort if earlier
//              0 : y1 > y2 ? // apply year fee
//                    10000 : m1 > m2 && y1 === y2 ? // apply monthly fee
//                                 (m1 - m2) * 500 : d1 > d2 && y1 === y2 && m1 === m2 ? // Apply daily
//                                                                      (d1 - d2) * 15 : 0;

console.log(libraryFine(1,1,2001,1,1,2000));