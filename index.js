// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  return Math.abs(distance - 42);
}
function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end) * 264;
}
function distanceFromHqInFeet(distance) {
  return Math.abs(distance - 42) * 264;
}
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  let fare = 0;
  if (distance <= 400) {
    return fare;
  } else if (distance < 2000 && distance > 400) {
    fare = (distance - 400) * 0.02;
    return fare;
  } else if (distance > 2000 && distance < 2500) {
    fare = 25;
    return fare;
  } else {
    return "cannot travel that far";
  }
}
