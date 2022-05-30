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

// const tArray = Object.entries(particles);
// console.log('tArray :>> ', tArray);

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
// console.log('mining :>> ', mining());

function harvest() {
  // const utf16 = [99, 104, 111];
  const fruit = () => Math.floor(Math.random() * (111 - 99 + 1) + 99);
  // const ore = () => Math.floor(Math.random() * (90 - 65 + 1) + 65);
  const harvestMax = 50;
  const harvestedFruit = Array.from(Array(harvestMax)).map(fruit);
  return harvestedFruit;
}
// console.log('harvest :>> ', harvest());

function refine() {
  const payload = [...harvest(), ...mining()];
  // console.log('payload :>> ', payload);
  rawParticles = payload.map(x => String.fromCharCode(x).toLowerCase()).sort();
  return rawParticles;
}

const storeParticles = () => {
  rawParticles.forEach(x => {
    particles[x] = (particles[x] || 0) + x;
  });
};

// const moleculeBuildQueue = (...builds) => {
//   builds.forEach(i => {
//     let atom = molecules[i][1].composition;
//     atom = [...atom].sort();
//     console.log('atom :>> ', atom);
//     return atom;
//   });
// };

function build(...args) {
  const buildQueue = args;
  const buildItem = buildQueue.forEach(i =>
    Array.from(molecules[i].composition.sort())
  );
  return buildItem;
}
console.log('build :>> ', build('water'));

// makeItem
function makeItem(item) {
  buildItem = item;
  item.forEach((v, i) => {
    Object.getOwnPropertyDescriptor(particles, ['v']);
    console.log('particles[v] :>> ', particles[i]);
  });
}
console.log('buildItem.length :>> ', null);

makeItem(['h', 'o', 'o']);

// storeItem
const storeItem = (...args) => {
  console.log('args :>> ', args);
};

const cycle = () => {
  mining();
  harvest();
  refine();
  storeParticles();
  build('water', 'steel');
};
cycle();
console.log('particles:pre >> ', particles.a);
// console.log('particles:test >> ', particles.a);
function partUpdate(arr, i) {
  arr[i] = arr[i].slice(0, 1);
}
partUpdate(particles, 'a');
console.log('particles:post >> ', particles.a);
// moleculeBuildQueue('steel', 'water');
// makeItem(moleculeBuildQueue);

// // console.log('particles  postCall:>> ', particles);
// console.log(
//   'moleculeBuildQueue post :>>',
//   moleculeBuildQueue('steel', 'water')
// );
// console.log('pickList postCall:>> ', moleculeBuildQueue());

// const pickList = [];
// let buildItem = [];
// const buildQueue = [inventory.steel.id, inventory.water.id].sort();
// let pickResult = pickList.length === buildItem.length;

// console.log('pickResult (pre) :>> ', pickResult);

// function pick() {
//   console.log('quarks :>> ', quarks);
//   console.log('Commencing pick...', buildItem);
//   buildQueue.forEach(i => {
//     buildItem = i.toLowerCase().split('').sort();
//     return buildItem;
//   });

//   console.log('quaks :>> ', quarks);

//   pickResult = pickList.length === buildItem.length;
//   console.log(`pickResult inPick: ${pickResult}`);
//   return pickList;
// }

// function make() {
//   console.log(`pickResult pre-mk ${pickResult}`);
//   if (pickResult === true) {
//     console.log(`Commencing make...`);
//     // console.log('mat :>> ', buildItem);
//     pickList.forEach(i => {
//       console.log('quarks[i] :>> ', quarks[i]);
//       quarks[i] -= 1;
//     });
//     // console.log('mat :>> ', buildItem);
//   } else {
//     console.log('ISF: Back to the mines!');
//     mining;
//   }
//   return buildItem;
// }

// // buildQueue.forEach(item => {
// //   buildItem = [...item.toLowerCase()].sort();
// // });
// pick();
// make();

// console.log('pL===mat :>> ', pickList.length === buildItem.length);
// console.log('pickResult :>> ', pickResult);

// // console.log('queue ofn:>> ', buildQueue);
// // console.log('mat out :>> ', buildQueue);
// // console.log(
// //   'mat out :>> ',
// //   buildQueue === ['b', 'c', 'n', 'p', 'u', 'z'].toString()
// // );
