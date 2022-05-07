const ore = Array.from(Array(1000)).map(x => Math.floor((Math.random() * 30) + 1))
let extractor = []
let resources = 0
const baseCamp = 0
const mineSite = 1
const chargingBay = 3

//Bender
let loc = 0
let payload = []
let pSize = payload.length
const pMax = 100
let  powerLevel = 100

const state = {
  loc: loc,
  powerLevel: powerLevel,
  payload: pSize,
  ore: ore.length,
  resources: resources
}

function stateUpdate() {
  state.loc = loc
  state.powerLevel = powerLevel
  state.ore = ore.length
  state.payload = payload.length
  state.resources = resources
  console.log(state)
}

// Self Scan
function whatsNext() {
  console.log(state.payload === pMax);
  console.log(`Commence Self Scan`)
  if (state.powerLevel < 13) {
    charging()
  } else if (state.payload === pMax) {
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
  stateUpdate()
  whatsNext()
}


// Offloading
function offloading() {
  console.log(`Commence Off-loading`)
  while (payload.length > 0) {
    extractor.push(payload.shift())
  }
  powerLevel -= 7
  stateUpdate()
  refining()
}

// Refining
function refining() {
  console.log(`Commence Refining`)
  for (let i = 0; 0 < extractor.length; i++) {
    extractor.shift()
    resources++
  }
  stateUpdate()
  whatsNext()
}

// Charging
function charging() {
  console.log(`Charging commence...Zzzzzz `)
}

whatsNext()
