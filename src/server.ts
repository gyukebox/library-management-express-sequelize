import * as bodyParser from "body-parser";
import * as express from "express";
import * as index from "./routes/index";

const app = express();

app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", index.index);

app.listen(app.get("port"), () => {
  console.log(`Server listening at port ${app.get("port")}`);
});

module.exports = app;
