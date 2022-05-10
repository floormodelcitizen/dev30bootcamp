const iron = 'Fe'
const copper = 'Cu'
const potassiumHydroxide = 'KOH'
const chromium = 'Cr'
const pyrolusite = 'MnO_2'
const carbon = 'C'
const cellulos = '(C6H10O5)n'
const water = 'H2O'
const zinc = 'Zn'


let container;

let steel = [ iron, chromium, carbon ]

let cathode = [ carbon, pyrolusite ]

let separator;

let anode = [ zinc ]

let electrolyte = [potassiumHydroxide]

let collector = [ copper, zinc ]

const battery = [
  container,
  cathode,
  separator,
  anode,
  electrolyte,
  collector = [ copper, zinc ]
]

console.log(battery[5][0])
