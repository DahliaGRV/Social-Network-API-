const connection = require('../config/connection');
const {Thought, User } = require('../models');
const { getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await Thought.deleteMany({});
  await User.deleteMany({});
  const users = [
    {
        username: 'catlovinJoe',
        email: `tph380p@hungta2.com`,
  },{
      username: 'stardew_fan',
      email: `bvdhvb@soccerfit.com`,
},{
  username: 'definitelynotdahlia',
  email: `almo63@cashbackr.com`,
},{
  username: 'plant_mom',
  email: `960555@ebarg.net`,
},
]

  const thoughts = getRandomThoughts(10);

  await Thought.collection.insertMany(thoughts);
  await User.collection.insertMany(users);

  // loop through the saved thoughts, for each thought we need to generate a thought reaction and insert the thought reactions
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});