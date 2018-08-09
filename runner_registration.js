// runner_registration.js

let raceNumber = Math.floor(Math.random() * 1000);
let registerEarly = true;
runnerAge = 17;

if (runnerAge > 18 && registerEarly){
  raceNumber += 1000;
} 

if (runnerAge > 18 && registerEarly) {
  console.log(`Your race number is: ${raceNumber}. The race will start at 9:30AM`);
} else if (runnerAge > 18 && !registerEarly){
  console.log(`Your race number is: ${raceNumber}. The race will start at 11:00AM`);
} else if (runnerAge < 18) {
  console.log(`Your race number is: ${raceNumber}. The race will start at 12:30PM`);
} else {
  console.log("Please see the registration disk");
}


