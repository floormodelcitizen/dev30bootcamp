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
console.log('materials :>> ', materials.cellulose);

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
  water: 0,
  zinc: 0,
};

console.log('inventory.C :>> ', inventory.C);
console.log('inventory.carbon :>> ', inventory.carbon);

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

function makeWater() {
  console.log('inventory.H :>> ', inventory.H);
  console.log('inventory.O :>> ', inventory.O);
  // if (inventory.H > 0 && inventory.O > 1) {
  //   inventory.H -= 1;
  //   inventory.O -= 2;
  //   inventory.water += 1;
  //   console.log('water :>> ', inventory.water);
  // } else {
  //   console.warn('ISF !water');
  // }
}

function make(material) {
  material.forEach(i => {
    console.log('i :>> ', i);
    if (inventory[i] > 0) {
      console.log('inventory[i]:>> ', inventory[i]);
      inventory[i] -= 1;
    } else {
      return console.warn(`ISF !${i}`);
    }
    return make;
  });
}

refine(particles, molecules);
makeWater();
make(materials.cellulose);
console.log('Current Inventory :>> ', inventory);
