import * as Sequelize from "sequelize";
import {sequelize} from "../server";

export const Book = sequelize.define("book", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: Sequelize.STRING,
  // TODO define many-to-many relationship with book & author
  summary: Sequelize.TEXT,
  isbn: Sequelize.STRING,
  // TODO define many-to-many relationship with book & genre
});
