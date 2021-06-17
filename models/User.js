// User table for logins
// Username, Password (Hashed) using bcrypt - Act 15-- 16 in Week 13

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
      //   password must be 8 characters in length
      // Needs to be hashed with bcrypt
    },

    isProducer: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: false,

      // if producer = true ... is a producer and has access to producer features (If not - is an atendee account)
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
