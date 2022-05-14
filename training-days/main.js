// The scope of `random` is too loose

//! Variables 'name' and 'event' have been appended with '1' per deprication and reserved namespace issues.

const name1 = 'Nala'

const getRandEvent = () => {
  let random = Math.floor(Math.random() * 3)
  if (random === 0) {
    return 'Marathon'
  } else if (random === 1) {
    return 'Triathlon'
  } else if (random === 2) {
    return 'Pentathlon'
  }
}

// The scope of `days` is too tight
const getTrainingDays = event1 => {
  let days = 0
  if (event1 === 'Marathon') {
    days = 50
  } else if (event1 === 'Triathlon') {
    days = 100
  } else if (event1 === 'Pentathlon') {
    days = 200
  }

  return days
}
console.log(name)

// The scope of `name` is too tight
const logEvent = (name1, event1) => {

  console.log(`${ name1 }'s event is: ${ event1 }`)
}

const logTime = (name1, days) => {

  console.log(`${ name1 }'s time to train is: ${ days } days`)
}

const event1 = getRandEvent()
const days = getTrainingDays(event1)
console.log(event1)
console.log(days)
// Define a `name` variable. Use it as an argument after updating logEvent and logTime


logEvent(name1, event1)
logTime(name1, days)

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';

logEvent(name2, event2);
logTime(name2, days2);