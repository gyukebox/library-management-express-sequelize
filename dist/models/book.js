"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
var server_1 = require("../server");
var author_1 = require("./author");
var bookinstance_1 = require("./bookinstance");
var genre_1 = require("./genre");
exports.Book = server_1.sequelize.define("book", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: Sequelize.STRING,
  summary: Sequelize.TEXT,
  isbn: Sequelize.STRING,
});
exports.Book.hasMany(bookinstance_1.BookInstance, { as: "instances" });
exports.Book.belongsToMany(author_1.Author, { through: "bookAuthor" });
exports.Book.hasMany(genre_1.Genre, { as: "genres" });
