const Sequelize = require("sequelize");
const database = require("./database");

const Book =  database.define("book", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: Sequelize.STRING,
  summary: Sequelize.TEXT,
  isbn: Sequelize.STRING,
});

process.nextTick(() => {
  const author = require("./author");
  const bookInstance = require("./bookinstance");
  const genre = require("./genre");

  Book.belongsToMany(author, {
    as: "writtenBy",
    through: "book-author",
  });
  Book.hasMany(bookInstance, {as: "instances"});
  Book.hasMany(genre, {as: "genres"});
});

module.exports = Book;