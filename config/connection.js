// Need to get JAWSdb Working to allow Heroku to deploy - https://coding-boot-camp.github.io/full-stack/heroku/deploy-with-heroku-and-mysql

const Sequelize = require('sequelize');
require('dotenv').config();


if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
  
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    }
  );
  
}

module.exports = sequelize;

// Need to install JAWSdb to enable databases to work with Heroku
