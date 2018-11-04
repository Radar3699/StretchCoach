import clock from "clock";
import document from "document";
import { vibration } from "haptics";
import { display } from "display";

display.autoOff = false;

// Get a handle on the <text> elements
const countLabel = document.getElementById("counter");
const intervalLabel = document.getElementById("interval");
const stretchLabel = document.getElementById("stretch");

// Init variables
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
countLabel.text = parseSec(count);
intervalLabel.text = parseSec(interval);
stretchLabel.text = stretches[stretchcount];


// Update the clock every minute
clock.granularity = "seconds";

// Parse seconds into minutes and seconds
function parseSec(seconds) {
  return `${Math.floor(seconds / 60)}:${seconds % 60}`
}

// Update the <text> element every tick with the current time
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
