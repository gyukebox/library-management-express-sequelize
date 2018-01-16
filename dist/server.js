"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var express = require("express");
var Sequelize = require("sequelize");
var index_1 = require("./routes/index");
var book_route_1 = require("./routes/book.route");
var author_route_1 = require("./routes/author.route");
var bookinstance_route_1 = require("./routes/bookinstance.route");
var genre_route_1 = require("./routes/genre.route");
var app = express();
exports.sequelize = new Sequelize("library_management_db", "root", "biss9541", {
  dialect: "mysql",
  host: "localhost",
});
exports.sequelize
  .authenticate()
  .then(function () {
    console.log("connection successful!");
  })
  .catch(function (err) {
    console.error("unable to connect to database: ", err);
  });
app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", index_1.index);
app.use("/books", book_route_1.bookRoute);
app.use("/authors", author_route_1.authorRoute);
app.use("/instances", bookinstance_route_1.instanceRoute);
app.use("/genres", genre_route_1.genreRoute);
app.listen(app.get("port"), function () {
  console.log("Server listening at port " + app.get("port"));
});
module.exports = app;
