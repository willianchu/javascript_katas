function hurdleRace(k, height) {
  height.sort((a,b)=>b-a);
  const doses = height[0] - k;
  return doses < 1 ? 0 : doses;

}

