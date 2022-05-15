//> Race number:
// Early adults receive a race number at or above 1000.
// All others receive a number below 1000.

//>  Start time:
// Early adults run at 9:30 am.
// Late adults run at 11:00 am.
// Youth registrants run at 12:30 pm (regardless of registration).
// 18 yo

let raceNumber;
let earlyReg;
let age;

function assignNumber(age, earlyReg = false) {
  raceNumber = Math.floor(Math.random() * 1000);
  if (age > 18 && earlyReg === true) {
    raceNumber = raceNumber + 1000;
  }
  startTimeNotification(age, earlyReg, raceNumber);
}

function startTimeNotification(age, earlyReg, raceNumber) {
  let startTime = "12:30 pm";
  if (age >= 18) {
    if (earlyReg === true) {
      startTime = "9:30 am";
    } else {
      startTime = "11:00 am";
    }
  }
  console.log(
    `Attention: Runner number ${raceNumber} your scheduled start time is ${startTime}.`
  );
}

assignNumber();
