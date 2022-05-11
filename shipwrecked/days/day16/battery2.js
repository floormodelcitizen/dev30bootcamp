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
let materials = [ carbon, cellulose, chromium, copper, iron, lead, potassiumHydroxide, water, zinc ]

const useIteration = materials => {
  const map = [];
  for (let value of materials) {
    if (map.indexOf(value) === -1) {
      map.push(value);
    }
  }
  return map;
};

const result = useIteration(materials);
console.log(result);

let uniqueChar = ['C','6','H','1','0','O','5','N','R','U','F','E','P','B','K','H','2','Z']
useIteration()

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
}

function sorter() {
  for (let i = 0; i < resources.length; i++) {
    const element = array[i];

  }
}

mining()