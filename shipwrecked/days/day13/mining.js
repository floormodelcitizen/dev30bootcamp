let ore = Array.from(Array(1000)).map(x => Math.floor((Math.random() * 30) + 1))
// refining
let extractor = []
let resources = 0
const baseCamp = 0
const mineSite = 1
const chargingBay = 3

//bender
let loc = 0
let payload = []
let pSize = payload.length
const pMax = 100
let powerLevel = 100

const stats = {
  loc: loc,
  powerLevel: powerLevel,
  payload: pSize,
  ore: ore.length
}

function statsUpdate() {
  stats.loc = loc
  stats.powerLevel = powerLevel
  stats.ore = ore.length
  stats.payload = payload.length
  console.log(stats)
}


// Self Scan
function whatsNext() {
  console.log(`Commence Self Scan`)
  if (stats.powerLevel < 13) {
    charging()
  } else if (stats.payload === pMax) {
    offloading()
  } else {
    mining()
  }
}

// Mining
function mining() {
  loc = 1
  console.log(`Commencing mining`)
  while (payload.length < pMax) {
    payload.push(ore.shift())
  }
  powerLevel -= 7
  return statsUpdate()

}


console.log(powerLevel)
console.log(pSize)
console.log(stats)
mining()
whatsNext()


// Offloading
function offloading() {
  console.log(`Commence Off-loading`)
}

// Refining
function refining() {
  console.log(`Commence Refining`)
}

// Charging
function charging() {
  console.log(`Charging commen...Zzzzzz `)
}