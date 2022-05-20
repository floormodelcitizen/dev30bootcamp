const ore = () => Math.floor(Math.random() * (90 - 65 + 1) + 65);
const fruit = () => Math.floor(Math.random() * (57 - 48 + 1) + 48);

const miningMax = 100;
const mining = Array.from(Array(miningMax)).map(ore);
console.log('mining :>> ', mining);

const harvestMax = 30;
const harvest = Array.from(Array(harvestMax)).map(fruit);
console.log('harvest :>> ', harvest);

const payload = [...mining, ...harvest];
console.log('payload :>> ', payload);

const particles = payload.map(x => String.fromCharCode(x));
console.log('particles :>> ', particles);

const materials = {
  carbon: ['C'],
  cellulose: [...'C6H10O5N'],
  chromium: [...'CR'],
  copper: [...'CU'],
  iron: [...'FE'],
  lead: [...'PB'],
  potassiumHydroxide: [...'KOH'],
  pyrolusite: [...'MNO2'],
  water: [...'H2O'],
  zinc: [...'ZN'],
};
console.log('materials :>> ', materials);

const inventory = {
  0: 0,
  1: 0,
  2: 0,
  5: 0,
  6: 0,
  B: 0,
  C: 0,
  E: 0,
  F: 0,
  H: 0,
  K: 0,
  N: 0,
  O: 0,
  P: 0,
  R: 0,
  U: 0,
  Z: 0,
};

const molecules = Object.keys(inventory);
const refine = (arr1, arr2) => {
  const refined = arr1.filter(el => arr2.indexOf(el) !== -1);
  return refined;
};

const resources = refine(particles, molecules);

console.log('resources :>> ', resources);
console.log('inventory :>> ', inventory);

refine(particles, molecules);
