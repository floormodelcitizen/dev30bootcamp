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
const numbersWithNeg = [10, -20, 30, -40, 50];
