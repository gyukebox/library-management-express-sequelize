import * as bodyParser from "body-parser";
import * as express from "express";
import * as Sequelize from "sequelize";
import * as index from "./routes/index";

const app = express();

// Database connection
export const sequelize = new Sequelize("library_management_db", "root", "biss9541", {
  dialect: "mysql",
  host: "localhost",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connection successful!");
  })
  .catch((err) => {
    console.error("unable to connect to database: ", err);
  });

// Port and server configuration
app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routing
app.get("/", index.index);

// listening
app.listen(app.get("port"), () => {
  console.log(`Server listening at port ${app.get("port")}`);
});

module.exports = app;
