const Sequelize = require("sequelize");
const database = require("./database");

const genre = database.define("genre", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: Sequelize.STRING,
});

module.exports = genre;