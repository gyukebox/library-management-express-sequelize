const Sequelize = require("sequelize");

const database = require("./src/models/database");

const book = require("./src/models/book");
const author = require("./src/models/author");
const bookinstance = require("./src/models/bookinstance");
const genre = require("./src/models/genre");

database
  .authenticate()
  .then(() => {
    console.log("Connection successful!");
  })
  .catch((err) => {
    console.error("Failed to connect: ", err);
  });

// migrations


const author1 = author.create({
  firstname: "Edgar Allan",
  lastname: "Poe",
  birthdate: "1809-1-19",
  deathdate: "1849-10-7",
});

