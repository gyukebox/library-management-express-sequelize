const Sequelize = require("sequelize");
const database = require("./database");

const Author = database.define("author", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING,
  birthdate: {
    type: Sequelize.DATEONLY,
    allowNull: true,
  },
  deathdate: {
    type: Sequelize.DATEONLY,
    allowNull: true,
  },
});

process.nextTick(() => {
  const book = require("./book");
  Author.belongsToMany(book, {
    as: "wrote",
    through: "book-author",
  });
});

module.exports = Author;