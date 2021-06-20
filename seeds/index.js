const sequelize = require('../config/connection');
const seedEvents = require('./eventsData');
const seedUser = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedEvents();

  //await seedUser();

  process.exit(0);
};

seedAll();