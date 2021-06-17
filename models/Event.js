const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Event extends Model {}

Event.init(
  {
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    eventName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productionCompanyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
      //   Provide drop down box with Seeded Genre values already
    },

    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startingTime:{
      type: DataTypes.TIME,
      allowNull:false,
    },
    startingDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    eventSummary: {
      type: DataTypes.STRING(9999),
      //   might need to allow more characters to type as much as they want

      allowNull: false,
    },

    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    ticketUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: "event",
  }
);

module.exports = Event;