const story =
  'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

const overusedWords = ['really', 'very', 'basically'];

const unnecessaryWords = ['extremely', 'literally', 'actually'];

const storyWords = Array.from(story.split(' '));
console.log('storyWords :>> ', storyWords);

const betterWords = storyWords.filter(
  value => !unnecessaryWords.includes(value)
);
console.log('Word Count :>> ', betterWords.length);

const overusedWordsCount = storyWords
  .filter(value => overusedWords.includes(value), {})
  .reduce(
    (overusedWordsCount, value) => ({
      ...overusedWordsCount,
      [value]: (overusedWordsCount[value] ?? 0) + 1, //
    }),
    {}
  );

console.log('betterWords :>> ', betterWords);

// Step 4

// Step 5
const sentenceCount = storyWords.filter(
  v => v.includes('.') || v.includes('!')
);

console.log('Word Count:>> ', storyWords.length);
console.log('Sentence Count :>> ', sentenceCount.length);
console.log('Overused Word Count :>> ', overusedWordsCount);
console.log(`Overused Word Count :>>  ${overusedWordsCount}`);
console.log('Revised version :>> ', betterWords.toString().replace(/,/g, ' '));
