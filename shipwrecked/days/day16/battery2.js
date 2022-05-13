let ore = Array.from(Array(100)).map(x => Math.floor((Math.random() * (90 - 65 + 1) + 65)))
console.log(ore)
let fruit = Array.from(Array(100)).map(x => Math.floor((Math.random() * (57 - 48 + 1) + 48)))
console.log(fruit)

let resources = []
let extractor = []
let payload = []
const payloadMax = 100

let carbon = ['C']
let cellulose = [...'C6H10O5N']
let chromium = [...'CR']
let copper = [...'CU']
let iron = [...'FE']
let lead = [...'PB']
let potassiumHydroxide = [...'KOH']
let pyrolusite = [...'MNO2']
let water = [...'H2O']
let zinc = [...'ZN']
let materials = [carbon, cellulose, chromium, copper, iron, lead, potassiumHydroxide, water, zinc]
let particles = [['0'], ['1'], ['2'], ['5'], ['6'], ['B'], ['C'], ['E'], ['F'], ['H'], ['K'], ['N'], ['O'], ['P'], ['R'], ['U'], ['Z']]

let discard = []

console.log(`iron: ${ iron }`)

function mining() {
  console.log(`Commencing mining`)
  while (payload.length < payloadMax) {
    payload.push(ore.shift())
  }
  console.log(`payload: ${ payload }`)
  offLoad()
}

function offLoad() {
  console.log(`Commencing off-load`)
  while (payload.length > 0) {
    extractor.push(payload.shift())
  }
  console.log(`extractor: ${ extractor }`)
  extraction()
}

function extraction() {
  console.log(`Commencing extraction`)
  extractor = extractor.map((x) => String.fromCharCode(x))
  for (let i = 0; 0 < extractor.length; i++) {
    let char = extractor.pop(i)
    resources.push(char)
  }
  console.log(`resources: ${ resources }`)
  console.log(resources.length)
  sorter()
}

function sorter() {
  resources.forEach((i, x) => {
    particles.forEach((p, d) => {
      if (particles[d][0].includes(i)) {
        particles[d].push(i)
      }
    })
  })
  this.particles = particles
}

mining()

console.log(particles)

// Todos:
function organicExtractor() {
  console.log('Coming soon to a planet near me')
}
function recombiner() {
  console.log('Coming soon to a planet near me')
}
function automatedBatteryProduction() {
  console.log('Triggers based on available materials levels');
}
function fabricator () {
  console.log('The things to build all the things.');
}
fam = 'Bender' + 'bots' * 4

console.log(25/27);