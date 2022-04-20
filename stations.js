const is_in_conformity = (conformity) => {
  if (conformity === "school" || conformity === "community centre") {
    return true;
  }
  return false;
}

const chooseStations = (stations) => {
  const optimalStations = [];
  stations.forEach((station) => {
    if ((station[1] > 19) && (is_in_conformity(station[2]))) {
      optimalStations.push(station[0]);
    }
  });
  return optimalStations;
}


const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre'],
  ['Panda Express', 30, 'restaurant'],
  ['CodeVille Epic Academy', 15, 'school'],
  ['Big Al Pizza', 50, 'restaurant']
]

let OfficialStations = chooseStations(stations);
console.log(OfficialStations);