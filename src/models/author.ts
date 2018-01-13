import * as Sequelize from "sequelize";
import {sequelize} from "../server";

export const Author = sequelize.define("author", {
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
