const Sequelize = require("sequelize");
const database = require("./database");

const bookInstance = database.define("bookinstance", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  imprint: Sequelize.STRING,
  status: {
    type: Sequelize.ENUM("available", "maintenance", "loadned", "reservered"),
    defaultValue: "maintenance",
  },
  due_back: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
});

module.exports = bookInstance;