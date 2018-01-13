import * as Sequelize from "sequelize";
import {sequelize} from "../server";

export const BookInstance = sequelize.define("bookinstance", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  // TODO define one-to-many relationships with book & bookinstance
  imprint: Sequelize.STRING,
  string: {
    type: Sequelize.STRING,
    // TODO define enum: [available, maintenance, loaned, reserved]
    // TODO definde default value to maintenance
  },
  due_back: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
});
