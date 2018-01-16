"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
var server_1 = require("../server");
var book_1 = require("./book");
exports.Author = server_1.sequelize.define("author", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  date_of_birth: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  date_of_death: {
    type: Sequelize.DATE,
    allowNull: true,
  },
});
exports.Author.belongsToMany(book_1.Book, { through: "bookAuthor" });
