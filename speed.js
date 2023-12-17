// for every 5kms above 70 speed limit = demerit point
// 80 km = 2 pnts
// 90 km = 4 pnts
// 100 km = 6 pnts
// 110 km = 8 pnts
// 120 km = 10 pnts
// 130 km = 12 pnts 
// Above 130 km = Licence Suspened

// promt user to enter the speed limit
let speed = 135;

// Define the speed limit and the demerit point threshold
let speedLimit = 70;
let demeritPointThreshold = 12;

// calculate the demerit point based on the car speed
let demeritPoints = 0;

if (speed < speedLimit) {
    console.log("Ok");
  } else {
    demeritPoints = Math.floor((speed - speedLimit) / 5);
  
    if (demeritPoints > demeritPointThreshold) {
      console.log("License suspended");
    } else {
      console.log("Points: " + demeritPoints);
    }
  }