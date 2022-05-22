// Whale Talk - translating text to whale language

let input = 'All I need is a red guitar, three chords, and the truth';
input = [...input];
const vowels = ['a', 'e', 'i', 'o', 'u'];

const resultArray = input.filter(([value]) => vowels.includes(value));
resultArray.forEach(v => {
  switch (v) {
    case 'e':
      resultArray.push(v);
      break;
    case 'u':
      resultArray.push(v);
      break;
    default:
      break;
  }
});
resultArray.toString().toUpperCase();

console.log('resultsArray :>> ', resultArray);
