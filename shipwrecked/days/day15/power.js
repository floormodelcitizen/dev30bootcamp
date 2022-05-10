// Elements and Materials
const carbon = 'C'
const cellulose = '(C6H10O5)n'
const chromium = 'Cr'
const copper = 'Cu'
const iron = 'Fe'
const lead = 'Pb'
const potassiumHydroxide = 'KOH'
const pyrolusite = 'MnO_2'
const water = 'H2O'
const zinc = 'Zn'
let brass = [copper, zinc]
let steel = [iron, chromium, carbon]

// Battery Components
let container
let cathode = [carbon, pyrolusite]
let separator
let anode = [zinc]
let electrolyte = [potassiumHydroxide]
let collector = [copper, zinc]

// Battery Blueprint
const battery = [
  container = [
    steel =
      [
        iron,
        chromium,
        carbon
      ]
    ],
  cathode =
    [
      carbon,
      pyrolusite
    ],
  separator =
    [cellulose],
  anode =
    [zinc],
  electrolyte =
    [
      water,
      potassiumHydroxide
    ],
  collector =
    brass =
    [
      copper,
      zinc,
      lead
    ]
]

console.log(`Carbon: ${battery[0][0][2]}`);
console.log(`Cellulos: ${battery[2][0]}`);
console.log(`Chromium: ${battery[0][0][1]}`);
console.log(`Copper: ${battery[5][0]}`);
console.log(`Iron: ${battery[0][0][0]}`);
console.log(`Lead: ${battery[5][2]}`);
console.log(`Potassium Hydroxide: ${battery[4][1]}`);
console.log(`Pyrolusite: ${battery[1][0]}`);
console.log(`Water: ${battery[4][0]}`);
console.log(`Zinc I: ${battery[3][0]}`);
console.log(`Zinc II: ${battery[5][1]}`);

