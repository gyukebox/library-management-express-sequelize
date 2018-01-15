import * as Sequelize from "sequelize";
import {sequelize} from "../server";

import {Author} from "./author";
import {BookInstance} from "./bookinstance";
import {Genre} from "./genre";

export interface IBookAddModel {
  title: string;
  summary: string;
}

export interface IBookModel extends Sequelize.Model<IBookModel, IBookAddModel> {
  id: number;
  title: string;
  summary: string;
  isbn: string;
}

export const Book = sequelize.define<IBookModel, IBookAddModel>("book", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: Sequelize.STRING,
  summary: Sequelize.TEXT,
  isbn: Sequelize.STRING,
});

Book.hasMany(BookInstance, {as: "instances"});
Book.belongsToMany(Author, {through: "bookAuthor"});
Book.hasMany(Genre, {as: "genres"});
