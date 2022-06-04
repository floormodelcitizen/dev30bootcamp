/* eslint-disable no-console */
let rawParticles = [];
const particles = {
  a: [],
  b: [],
  c: [],
  d: [],
  e: [],
  f: [],
  g: [],
  h: [],
  i: [],
  j: [],
  k: [],
  l: [],
  m: [],
  n: [],
  o: [],
  p: [],
  q: [],
  r: [],
  s: [],
  t: [],
  u: [],
  v: [],
  w: [],
  x: [],
  y: [],
  z: [],
};

const pArray = Object.entries(particles);
// console.log('pArray :>> ', pArray);

const molecules = {
  carbon: { id: 'C', composition: ['c'], quantity: particles.c.length },
  chromium: { id: 'Cr', composition: ['c', 'r'], quantity: [] },
  copper: { id: 'Cu', composition: ['c', 'u'], quantity: [] },
  hydrogen: { id: 'H', composition: ['h'], quantity: particles.h.length },
  iron: { id: 'Fe', composition: ['f', 'e'], quantity: [] },
  lead: { id: 'Pb', composition: ['p', 'b'], quantity: [] },
  manganese: { id: 'Mn', composition: ['m', 'n'], quantity: [] },
  nickel: { id: 'Ni', composition: ['n', 'i'], quantity: [] },
  oxygen: { id: 'O', composition: ['o'], quantity: particles.o.length },
  zinc: { id: 'Zn', composition: ['z', 'n'], quantity: [] },
  brass: {
    id: 'ZnCuPb',
    composition: ['z', 'n', 'c', 'u', 'p', 'b'],
    quantity: [],
  },
  cellulose: {
    id: 'C6H10O5N',
    composition: [
      'c',
      '6',
      'h',
      'h',
      'h',
      'h',
      'h',
      'h',
      'h',
      'h',
      'h',
      'h',
      '0',
      'o',
      'o',
      'o',
      'o',
      'o',
      'n',
    ],
    quantity: [],
  },
  potassiumHydroxide: { id: 'KOH', composition: ['k', 'o', 'h'], quantity: [] },
  pyrolusite: { id: 'MnO2', composition: ['m', 'n', 'o', 'o'], quantity: [] },
  steel: { id: 'CrFeC', composition: ['c', 'r', 'f', 'e', 'c'], quantity: [] },
  water: { id: 'H2O', composition: ['h', 'o', 'o'], quantity: [] },
};

const mArray = Object.entries(molecules);
// console.log('mArray :>> ', mArray);

const things = {
  battery: {
    id: 'brass, steel, cellulose',
    composition: ['brass', 'steel', 'cellulose'],
    quantity: [],
  },
};

function mining() {
  const ore = () => Math.floor(Math.random() * (122 - 97 + 1) + 97);
  // const ore = () => Math.floor(Math.random() * (90 - 65 + 1) + 65);
  const miningMax = 100;
  const harvestedOre = Array.from(Array(miningMax)).map(ore);
  return harvestedOre;
}
const miningResults = mining();
// console.log('miningResults :>> ', miningResults);

function harvest() {
  // const utf16 = [99, 104, 111];
  const fruit = () => Math.floor(Math.random() * (111 - 99 + 1) + 99);
  // const ore = () => Math.floor(Math.random() * (90 - 65 + 1) + 65);
  const harvestMax = 50;
  const harvestedFruit = Array.from(Array(harvestMax)).map(fruit);
  return harvestedFruit;
}
const harvestResults = harvest();
// console.log('harvestResults :>> ', harvestResults);

function refine(...args) {
  const payload = args;
  // console.log('payload :>> ', payload);
  rawParticles = payload.map(x => String.fromCharCode(x).toLowerCase()).sort();
  return rawParticles;
}
const refineResults = refine(...miningResults, ...harvestResults);
// console.log('refineResults :>> ', refineResults);

function storeParticles() {
  // rawParticles.forEach(x => (particles[x] = (particles[x] || 0) + x));
  rawParticles.forEach(x => {
    // console.log('particles :>> ', particles[x]);
    particles[x].push(x);
    return particles;
  });
}
const storeParticlesResults = storeParticles(rawParticles);
// console.log('storeParticleResults :>> ', storeParticleResults);

const toBuild = ['water'];
const buildInProcess = [];
const buildHistory = [];

function prepBuildForPick(args) {
  const buildList = args;
  let single = [];
  buildList.forEach(i => {
    single = Array.from(molecules[i].composition.sort());
  });
  return single;
}
// const buildResult = prepBuildForPick(toBuild);
const pickList = [];
// console.log('buildInProcess :>> ', prepBuildForPick(toBuild));
// pickItem
function pickItem(item) {
  console.log('item :>> ', item);
  item.forEach((v, i) => {
    console.log('Item [v] :>> ', v, i);
    console.log('partilces-pre:>> ', particles[v].length);
    if (particles[v].length >= 0)
      // return console.warn(`Shortage of ${v} halted ${item} build`);
      pickList.push(particles[v].shift());
    console.log('partilces-post:>> ', particles[v].length);
    console.log('pickList toString:>> ', pickList.toString());
    return pickList;
  });
  if (pickList.toString() !== molecules.water.composition.toString())
    console.log(
      'molecules.water.composition :>> ',
      molecules.water.composition
    );

  console.log('pickList post :>> ', pickList);
  console.log('item post:>> ', item);

  if (pickList.length === item.length) {
    // console.log('true :>> ', true);
  }
}
// const pickItemResults = pickItem(buildInProcess);
// const pickVsBuiltPartity = pickList.length === buildResult.length;

// Function Calls

mining();
harvest();
refine();
storeParticles();

prepBuildForPick(toBuild);
pickItem(buildInProcess);

// console.log('pickItem() :>> ', pickItem(buildInProcess));
console.log('mArray :>> ', mArray);
