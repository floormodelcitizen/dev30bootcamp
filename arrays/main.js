/* eslint-disable no-unused-expressions */
/* eslint no-unused-expressions: ["error", { "allowShortCircuit": true, "allowTernary": true }] */

// for -- good
arrayOfNumbers = [];
for (let value = 10; value <= 50; value += 10) {
  arrayOfNumbers.push(value);
  console.log('arrayOfNumbers :>> ', arrayOfNumbers);
}

// forIn index-based --- Object.keys,values, entries is immutible option
const numbers = [10, 20, 30, 40, 50];
for (const index in numbers) {
  if (Object.hasOwnProperty.call(numbers, index)) {
    const element = numbers[index];
    console.log('numbers[index] :>> ', element);
  }
}

// forOf value-based
for (const value of numbers) {
  if (value > 20) {
    break;
  }
  console.log('value :>> ', value);
}

// forEach -- does not return value - no break available & incompattible with async/await
numbers.forEach((value, index) => {
  console.log('value :>> ', value);
});

// Destructuring
const [first, second, third, ...rest] = numbers;
// eslint-disable-next-line no-unused-expressions
first;
second;
third;
rest;

const people = [{ nom: 'John' }, { nom: 'Jane' }];
people;
const copyOfPeople = [...people];
copyOfPeople[0].nom = 'Jack';
copyOfPeople;
people;

// find indexes: indexOf, lastIndexOf, findIndexOf is much slower that indexOf and lastIndex
const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
console.log('names.indexOf("Alice") :>> ', names.indexOf('Alice'));
console.log('names.indexOf("Alice", 1) :>> ', names.indexOf('Alice', 1));
console.log('names.indexOf("Sally", 1) :>> ', names.indexOf('Sally'));

// lastIndexOf
console.log('names.lastIndexOf("Alice") :>> ', names.lastIndexOf('Alice'));

// findIndex
console.log(
  'names.findIndex() :>> ',
  names.findIndex(name => name === 'Bruce')
);

// .find
const neighbors = [{ nom: 'John' }, { nom: 'Jane' }];
const neighbor = neighbors.find(n => n.nom === 'Jane');
neighbor;
neighbor.name = 'Sally';
neighbor;
neighbors;

// some and every
const moreNumbers = [10, -20, 30, -40, 50];
console.log('moreNunbers.some :>> ', moreNumbers.includes(10));
console.log(
  'positive :>> ',
  moreNumbers.some(num => num > 0)
);
console.log(
  'positive :>> ',
  moreNumbers.every(num => num > 0)
);

// filter and slice
const allPositive = moreNumbers.filter(v => v > 0);
allPositive;
const allNegative = moreNumbers.filter(v => v < 0);
allNegative;

// filter Objects
const teammates = [{ nom: 'John' }, { nom: 'Anne' }];

const aPeople = teammates.filter(t => t.nom.startsWith('A'));
aPeople;

const jPeople = teammates.filter(({ nom }) => nom.startsWith('J'));
jPeople;
jPeople[0].nom = 'Jack';
jPeople;
people; // 'John' was updsted to 'Jack' because Object references don't change

const evenMoreNumbers = [9, 10, 11, 13, 14, 15];
const hasNext = evenMoreNumbers.filter((v, _, a) => a.includes(v + 1));
hasNext;

// slice
const middleThree = numbers.slice(1, 4);
numbers.slice();
numbers.slice(1);
numbers.slice(-1);
numbers.slice(-2);

// map
const numbersTimes10 = numbers.map(v => v * 10);

const numbersTimes10Obj = numbers.map(v => ({ value: v * 10 }));
numbersTimes10Obj;

// map and filter
const numbersWithNegs = [-10, 20, 30, -40, -50];
const positiveBy10 = numbersWithNegs.filter(v => v > 0).map(v => v * 10);
positiveBy10;

// mapping over Obj
const siblings = [
  { firstName: 'Jane', lastName: 'Smith', address: { city: 'Oakland' } },
  { firstName: 'Sally', lastName: 'Joseph', address: { city: 'Watts' } },
];

const fullNames = siblings.map(p => ({
  ...p,
  fullName: `${p.first} ${p.last}`,
}));
fullNames;
fullNames[0].first = 'Penny';
fullNames[0].address.city = 'San Jose';
siblings;

// Array.from(); there is a map built-in to Array.from
numbers;

// cerates a shallow copy
Array.from(numbers);
Array.from(numbers, v => v * 10);

// .flat()
const arrayOfArrays1 = [
  [10, 20, 30],
  [10, 20, 30],
  [70, 80, 90],
];
arrayOfArrays1.flat();

const deepNumbers = [[[[10, 20, 30]]], [[[10, 20, 30]]], [[[70, 80, 90]]]];

deepNumbers.flat(1);
deepNumbers.flat(2);
deepNumbers.flat(Infinity);

// flatMap
const values = [10, 20, 30, 40, 50];

values.map((v, i) => [v, i]);
values.flatMap((v, i) => [v, i]);

// concat
const firstArr = [10, 20];
const secondArr = [30, 40, 50];

firstArr.concat(secondArr).map(v => v * 10);

[...firstArr, ...secondArr].map(v => v * 10);

// reduce
const numArr1 = [10, 20, 30, 40, 50];

// ole' skool
let sum = 0;
for (const value of numArr1) {
  sum += value;
}
sum;

// new skool
numArr1.reduce((s, v) => {
  s += v;
  return sum;
}, 0);

// refactored
numArr1.reduce((s, v) => s + v);

// average
numArr1.reduce((avg, value, _, arr) => avg + value / arr.length, 0);

//
const browsers = [
  'Samsung',
  'Chrome',
  'Firefox',
  'Safari',
  'Opera',
  'Edge',
  'Brave',
];

// long way around
browsers.reduce((str, name, index) => str + (index > 0 ? ', ' : '') + name, '');
// better way
browsers.join(', ');

numbers.reduce((arr, number) => [...arr, number], []);
numbers.reduceRight((arr, number) => [...arr, number], []);

// return an array for a different size than original
const groups = [
  [3, 2],
  [2, 5],
  [3, 7],
];

// [2,2,2,5,5,7,7,7]
groups.reduce(
  (arr, [count, value]) => [...arr, ...Array(count).fill(value)],
  []
);

// use reduce to create an object
let letters = 'the quick brown fox jumped over the lazy dog';
letters = [...letters].filter(v => v !== ' ');

const lookup = {};
for (const letter of letters) {
  lookup[letter] = (lookup[letter] ?? 0) + 1; // ?? nullish coalesing denotes if a value is undefined use a default
}
lookup;

// > '...lookup' contains all of the original values. Because '[value]: (lookup[value] ?? 0) + 1' comes later in sequence it overwrites the existing value; starting at 0, and incrementing by +1. Reduce returns the previous value (via the accumulator), e.g., a value occurring for the second time would already have a value of 1 and be incremented by +1 to now be 2.

letters.reduce(
  (lookup, value) => ({
    ...lookup,
    [value]: (lookup[value] ?? 0) + 1, //
  }),
  {}
);

numbers.reduce(
  ({ min, max }, value) => ({
    min: Math.min(min, value),
    max: Math.max(max, value),
  }),
  {
    min: Infinity,
    max: -Infinity,
  }
);

// Values, Keys, and Entries (can be used between objects and arrays)
// Entries returns an array of arrays wherein [index, value]
values.entries();
for (const value of values.entries()) {
  console.log('value :>> ', value);
}

// Keys returns an array of keys, (indexes)
values.keys();
for (const value of values.keys()) {
  console.log('value :>> ', value);
}

// Values returns an array of values
values.values();
for (const value of values.values()) {
  console.log('value :>> ', value);
}

// V's, K's, and E's can be used between objects and arrays
const customers = {
  Peter: 12,
  MJ: 15,
  Gwen: 18,
};

function sumOf(objORArray) {
  return Object.values(objORArray).reduce((sum, value) => sum + value, 0);
}
sumOf(values);
sumOf(customers);
