function countingValleys(steps, path) {
  let seaLevel = 0;
  let count = 0;
  path.split("").forEach( (step) => {
    seaLevel += step === 'D' ? -1 : 1;
    count += step === 'U' && seaLevel === 0 ? 1 : 0;
  })
  return count;
}

const steps = 8;
const path = "UDDDUDUU";

console.log(countingValleys(steps, path));;