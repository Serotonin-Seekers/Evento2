// The start of the models with sequelize
// Creates the tables for their relationships to one another (no relationship because the User login has nothing to with events)
// User table
// Event table

const User = require("./User");
const Event = require("./Event");


module.exports = { User, Event };
