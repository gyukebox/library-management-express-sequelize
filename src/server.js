const express = require("express");
const bodyParser = require("body-parser");

const database = require("./models/database");

const index = require("./routes/index");
const author = require("./routes/author.route");
const book = require("./routes/book.route");
const bookInstance = require("./routes/bookinstance.route");
const genre = require("./routes/genre.route");

const app = express();

// database connection
database
  .authenticate()
  .then(() => {
    console.log("Connection successful!");
  })
  .catch((err) => {
    console.error("Failed to connect: ", err);
  });

app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// routing
app.use("/", index);
app.use("/authors", author);
app.use("/books", book);
app.use("/instances", bookInstance);
app.use("/genres", genre);

// listen to server
app.listen(app.get("port"), function () {
  console.log(`Server listening at port ${app.get("port")}`);
});
