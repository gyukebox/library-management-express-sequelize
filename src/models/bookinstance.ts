import * as Sequelize from "sequelize";
import {sequelize} from "../server";

export interface IInstanceAddModel {
  status: string;
  due_back: string;
}

export interface IInstanceModel extends Sequelize.Model<IInstanceModel, IInstanceAddModel> {
  id: number;
  imprint: string;
  status: string;
  due_back: string;
}

export const BookInstance = sequelize.define<IInstanceModel, IInstanceAddModel>("bookinstance", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  imprint: Sequelize.STRING,
  status: {
    type: Sequelize.ENUM("available", "maintenance", "loadned", "reservered"),
    defaultValue: "maintenance",
  },
  due_back: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
});
