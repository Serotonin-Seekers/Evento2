// The start of the models with sequelize
// Creates the tables for their relationships to one another (no relationship because the User login has nothing to with events)
// User table
// Event table

const User = require("./User");
const Event = require("./Event");

Event.belongsTo(User)

User.hasMany(Event)

// User can have many events - THEY ARE LINKED THAT ALLOWS USERS TO VIEW THEIR EVENTS THEN DELETE!
// There is an association with the tables - Need to get the authentication to work to allow delete feature to exist


module.exports = { User, Event };
