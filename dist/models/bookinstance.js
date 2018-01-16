"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
var server_1 = require("../server");
exports.BookInstance = server_1.sequelize.define("bookinstance", {
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
