const secretMessage = [
  'Learning',
  'is',
  'not',
  'about',
  'what',
  'you',
  'get',
  'easily',
  'the',
  'first',
  'time,',
  'it',
  'is',
  'about',
  'what',
  'you',
  'can',
  'figure',
  'out.',
  '-2015,',
  'Chris',
  'Pine,',
  'Learn',
  'JavaScript',
];

// Original state
console.log(secretMessage);
console.log(secretMessage.length);
console.log('\n');

// Step 1
console.log('Step 1:');
secretMessage.pop();
console.log(secretMessage);
console.log(secretMessage.length);
console.log('\n');

// Step 2
console.log('Step 2:');
console.log(secretMessage.length);
console.log(secretMessage);
console.log('\n');

// Step 3
console.log('Step 3:');
secretMessage.push('to', 'program');
console.log(secretMessage);
console.log('\n');

// Step 4
console.log('Step 4 (option a):');
const easilyIndex = secretMessage.indexOf('easily');
secretMessage.splice(easilyIndex, 1, 'right');
console.log(secretMessage);
console.log('\n');
// or
console.log('Step 4 (option b):');
secretMessage.splice(7, 1, 'right');
console.log(secretMessage);
console.log('\n');

// Step 5
console.log('Step 5:');
secretMessage.shift();
console.log(secretMessage);
console.log('\n');

// Step 6
console.log('Step 6:');
secretMessage.unshift('Programming');
console.log(secretMessage);
console.log('\n');

// Step 7
console.log('Step 7:');
secretMessage.splice(6, 5, 'know');
console.log(secretMessage);
console.log('\n');

// Step 8
console.log('Step 8:');
console.log(secretMessage.join(' '));
console.log('\n');
