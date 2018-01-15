import * as Sequelize from "sequelize";
import {sequelize} from "../server";

import {Book} from "./book";

export interface IAuthorAddModel {
  first_name: string;
  last_name: string;
  date_of_birth?: string;
  date_of_death?: string;
}

export interface IAuthorModel extends Sequelize.Model<IAuthorModel, IAuthorAddModel> {
  id: number;
  first_name: string;
  last_name: string;
  date_of_birth?: string;
  date_of_death?: string;
}

export const Author = sequelize.define<IAuthorModel, IAuthorAddModel>("author", {
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

Author.belongsToMany(Book, {through: "bookAuthor"});
