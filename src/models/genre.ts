import * as Sequelize from "sequelize";
import {sequelize} from "../server";

export const Genre = sequelize.define("genre", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: Sequelize.STRING,
});
