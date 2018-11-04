/*
index.js
The core controller for StretchCoach
Must not be renamed or will not compile

Created by Duncan Stothers in 2018 at Harvard University
Licensed by MIT License
*/

import clock from "clock";
import document from "document";
import { vibration } from "haptics";
import { display } from "display";

// Stop dispay turning off during use
display.autoOff = false;

// Get a handle on the <text> elements
const countLabel = document.getElementById("counter");
const intervalLabel = document.getElementById("interval");
const stretchLabel = document.getElementById("stretch");

// Init internal variables
let interval = 60;
let count = 60;
let stretches = [
  "r ham",
  "l ham",
  "r quad",
  "l quad",
  "groin",
  "r calf",
  "l calf"
];
let stretchcount = 0;
let maxstretchcount = 6;

// Init views
countLabel.text = parseSec(count);
intervalLabel.text = parseSec(interval);
stretchLabel.text = stretches[stretchcount];


// Obtain events every second
clock.granularity = "seconds";

// Parse seconds into minutes and seconds
function parseSec(seconds) {
  return `${Math.floor(seconds / 60)}:${seconds % 60}`
}

// Update the clocks every second
clock.ontick = (evt) => {
  console.log("update");
  count = count - 1;

  // Reset and buzz on zero
  if (count == 0){
    // Reset count
    count = interval;

    // Big buzz
    vibration.start("nudge-max");

    // Flash switch
    countLabel.text = `Switch`;

    // Update stretch
    if (stretchcount == maxstretchcount){
      stretchcount = 0;
    }
    if (stretchcount != maxstretchcount){
      stretchcount = stretchcount + 1;
    }
    stretchLabel.text = stretches[stretchcount];

  }
  else {
    countLabel.text = parseSec(count);
  }
}

// Update interval times on key presses
document.onkeypress = function(e) {
  switch (e.key) {
    case 'up':
      vibration.start("bump");
      interval = interval + 30;
      count = interval;
      countLabel.text = parseSec(count);
      intervalLabel.text = parseSec(interval);
      break;
    case 'down':
      if (interval == 30) {
        break;
      }
      vibration.start("bump");
      interval = interval - 30;
      count = interval;
      countLabel.text = parseSec(count);
      intervalLabel.text = parseSec(interval);
      break;
    default:
  }
}
