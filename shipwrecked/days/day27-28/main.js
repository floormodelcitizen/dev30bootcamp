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
  zinc: [...'ZN'],
  brass: [...'ZNCUPB'],
  steel: [...'CRCFE'],
  water: [...'H2O'],
  battery: [this.brass, this.steel, this.cellulose],
};

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
  carbon: this.C,
  cellulose: 0,
  chromium: 0,
  copper: 0,
  iron: 0,
  lead: 0,
  potassiumHydroxide: 0,
  pyrolusite: 0,
  zinc: 0,
  brass: 0,
  steel: 0,
  water: 0,
  battery: 0,
};

const inventoryList = [
  {
    name: 'Nickel',
    id: 'Ni',
    quantity: [],
  },
  {
    name: 'Cellulose',
    id: 'C6H10O5N',
    quantity: [],
  },
];

const currentInventory = [
  {
    name: inventoryList[name],
    id: inventoryList.id,
    symForm: [...inventoryList.id],
    quantity: inventoryList.id.length,
  },
];

function convertInv() {
  const invObj = Object.keys(inventoryList);
  console.log('currentInventory :>> ', invObj);
  // inventoryList.forEach(i => {
  //   return inventoryList;
  // });
}

convertInv();

const molecules = Object.keys(inventory);
const refine = (arr1, arr2) => {
  const refined = arr1.filter(el => arr2.indexOf(el) !== -1);
  return refined;
};

const resources = refine(particles, molecules);

const intoInventory = resources.forEach(res => {
  inventory[res] += 1;
  return inventory;
});

const buildQueue = [materials.steel, materials.brass];

function preProd() {
  buildQueue.forEach(item => {
    const buildItem = item.sort();
    console.log('buildItem.sort :>> ', buildItem);
    return buildItem;
  });
}

function fabricate(buildItem) {
  const pickList = [];
  let pickResult = pickList.length === buildItem.length;
  console.log('pickResult (pre) :>> ', pickResult);
  console.log('mat :>> ', buildItem);

  const pick = function () {
    console.log(`Commencing pick...`);
    buildItem.forEach(i => {
      if (inventory[i] > 0) {
        pickList.push(i);
        console.log('mat :>> ', pickList);
      } else {
        return console.warn(`ISF !${i}`);
      }
      return pickList;
    });
    pickResult = pickList.length === buildItem.length;
    console.log(`pickResult inPick: ${pickResult}`);
    return pickList;
  };

  function make() {
    console.log(`pickResult pre-mk ${pickResult}`);
    if (pickResult === true) {
      console.log(`Commencing make...`);
      // console.log('mat :>> ', buildItem);
      pickList.forEach(i => {
        console.log('inventory[i] :>> ', inventory[i]);
        inventory[i] -= 1;
      });
      // console.log('mat :>> ', buildItem);
    } else {
      console.log('ISF: Back to the mines!');
      mining();
    }
    return buildItem;
  }

  pick();
  make();

  console.log('pL===mat :>> ', pickList.length === buildQueue.length);
  console.log('pickResult :>> ', pickResult);
}

preProd();

// const displayInventory = Object.entries(inventory).forEach(i => {
//   console.log('inv :>> ', i);
// });
console.log('queue ofn:>> ', buildQueue);
console.log('mat out :>> ', materials.brass.toString());
console.log(
  'mat out :>> ',
  materials.brass.toString() === ['Z', 'N', 'C', 'U', 'P', 'B'].toString()
);
