/// <reference types="sequelize" />
import * as Sequelize from "sequelize";
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
export declare const BookInstance: Sequelize.Model<IInstanceModel, IInstanceAddModel>;
