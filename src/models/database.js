const Sequelize = require("sequelize");

const database = new Sequelize("library_management_db", "root", "biss9541", {
  dialect: "mysql",
  host: "localhost"
});

module.exports = database;