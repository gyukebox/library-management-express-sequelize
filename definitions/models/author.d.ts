/// <reference types="sequelize" />
import * as Sequelize from "sequelize";
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
export declare const Author: Sequelize.Model<IAuthorModel, IAuthorAddModel>;
