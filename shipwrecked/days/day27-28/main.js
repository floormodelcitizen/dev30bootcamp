let rawParticles = [];
const particles = {
  0: [],
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
  7: [],
  8: [],
  9: [],
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
const atoms = {
  carbon: { id: 'C', quantity: [] },
  cellulose: { id: 'C6H10O5N', quantity: [] },
  chromium: { id: 'Cr', quantity: [] },
  copper: { id: 'Cu', quantity: [] },
  hydrogen: { id: 'H', quantity: [] },
  iron: { id: 'Fe', quantity: [] },
  lead: { id: 'Pb', quantity: [] },
  manganese: { id: 'Mn', quantity: [] },
  nickel: { id: 'Ni', quantity: [] },
  oxygen: { id: 'O', quantity: [] },
  zinc: { id: 'Zn', quantity: [] },
};
const compounds = {
  potassiumHydroxide: { id: 'KOH', quantity: [] },
  pyrolusite: { id: 'MnO2', quantity: [] },
  brass: { id: 'ZnCuPb', quantity: [] },
  steel: { id: 'CrFeC', quantity: [] },
  water: { id: 'H2O', quantity: [] },
};
const things = {
  battery: {
    id: 'brass, steel, cellulose',
    quantity: [],
  },
};

function mining() {
  const ore = () => Math.floor(Math.random() * (90 - 65 + 1) + 65);
  const miningMax = 100;
  const harvestedOre = Array.from(Array(miningMax)).map(ore);
  return harvestedOre;
}
// console.log('mining :>> ', mining());

function harvest() {
  const fruit = () => Math.floor(Math.random() * (57 - 48 + 1) + 48);
  const harvestMax = 30;
  const harvestedFruit = Array.from(Array(harvestMax)).map(fruit);
  return harvestedFruit;
}
// console.log('harvest :>> ', harvest());

function refine() {
  const payload = [...harvest(), ...mining()];
  // console.log('payload :>> ', payload);
  rawParticles = payload.map(x => String.fromCharCode(x).toLowerCase()).sort();
  console.log('rawParticles:>> ', typeof rawParticles);
  return rawParticles;
}

const store = () => {
  const counts = {};
  rawParticles.forEach(x => {
    counts[x] = (counts[x] || 0) + 1;
    particles[x] = (particles[x] || 0) + x;
    return counts;
  });
  console.log('counts :>> ', counts);
  console.log('particles :>> ', particles);
};

const cycle = () => {
  mining();
  harvest();
  refine();
  store();
};

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

//   buildItem.forEach((v, i) => {
//     console.log('buildItem (pre) :>> ', buildItem[i]);
//     if (quarks[i] > 0) {
//       console.log('pre-pick :>> ', quarks[i]);
//       pickList.push(buildItem[i]);
//       console.log('pickList :>> ', pickList);
//     } else {
//       return console.warn(`ISF !${i}`);
//     }
//     return pickList;
//   });
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
