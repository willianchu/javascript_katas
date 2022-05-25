function getServedBuildings(buildingCount, routerLocation, routerRange) {
  let position = 0;
  let range = 0;
  const RouterCount = new Array(buildingCount.length).fill(0);
  
  // Mount Router Count
  for (let IdxRouter in routerLocation){
      position = (routerLocation[IdxRouter]-1); //ok
      RouterCount[position] = RouterCount[position] === 0 ? 1 : RouterCount[position] + 1;
      range = routerRange[IdxRouter];      
      for (let signal = 0; signal <= range; signal++){
        // for right
        if (position + signal < RouterCount.length && signal != 0) {
          RouterCount[position+signal] = RouterCount[position+signal] === 0 ? 
            1 : RouterCount[position+signal] + 1 ;
        }
        // for left
        if (position - signal >= 0 && signal != 0) {
          RouterCount[position - signal] = RouterCount[position - signal] === 0 ? 
            1 : RouterCount[position - signal] + 1 ;
        }
      }  
  }
  // Count Served Buildings
  let served = 0;
  for (let idx in buildingCount) {
    console.log(buildingCount[idx], RouterCount[idx]);
      if (buildingCount[idx] <= RouterCount[idx]) served++;
  }
  console.log(RouterCount);
  return served;
  
}

const buildingCount = [
  4, 6, 2, 5,
  6, 2, 3
] ;
const routerLocation = [
  2, 3, 7, 1, 3,
  7, 4, 6, 1
];
const routerRange = [
  7, 0, 0, 2, 5,
  2, 6, 1, 3
];


console.log(getServedBuildings(buildingCount, routerLocation, routerRange)
);