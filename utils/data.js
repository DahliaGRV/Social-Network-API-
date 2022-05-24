const usernames = [
    'catlovinJoe',
    'stardew_fan',
    'definitelynotdahlia',
    'plant_mom',
  ];
  
  const thoughtBodies = [
    'How to disagree with someone',
    'iPhone review',
    'I just love every cat that I see',
    'Super excited to try pixel art!',
    'Did anyone catch the last season of You?',
    'Learn NextJS in five minutes (Not clickbate)',
    'Can anyone guess what dinner will be??',
    'Hello world',
    'Another possible solution to the algorithm',
    'We love you Johnny Depp!! ',
    'Ukraine is still under attack in case anyone is wondering..',
  ];
  
  const possibleReactions = [
    'I disagree!',
    'I tried your algorithm, here were the results',
    'This was awesome',
    'Thank you for the great content',
    'Please check out my thought reaction',
    'Like and subscribe to my channel please',
    'Reply: The side effects of in app purchases on digital marketplaces',
  ];
  

  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random username
const getRandomName = () =>
`${getRandomArrItem(usernames)}`;

  // Function to generate random thoughts that we can add to the database. Includes thought reactions.
  const getRandomThoughts = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtText: getRandomArrItem(thoughtBodies),
        username: getRandomName(),
        reactions: [...getThoughtReactions(3)],
      });
    }
    return results;
  };
  
  // Create the reactions that will be added to each thought
  const getThoughtReactions = (int) => {
    if (int === 1) {
      return getRandomArrItem(possibleReactions);
    }
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        reactionBody: getRandomArrItem(possibleReactions),
        username: getRandomName(),
      });
    }
    return results;
  };
  
  // Export the functions for use in seed.js
  module.exports = { getRandomThoughts, getRandomThoughts };