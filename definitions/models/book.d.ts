/// <reference types="sequelize" />
import * as Sequelize from "sequelize";
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
export declare const Book: Sequelize.Model<IBookModel, IBookAddModel>;
