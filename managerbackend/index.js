const express = require("express");
const http = require("http");
const path = require("path");
const bodyParser = require("body-parser");
const multer = require("multer");
const cors = require('cors')
const app = express();
const Sequelize = require("sequelize");
const fs = require('fs');
const yaml = require('js-yaml');
const server = http.createServer(app);
const loginRoutes = require('./LoginRoutes')
const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "uploads");
  },
  filename: (req, file, callBack) => {
    callBack(null, `${file.originalname}`);
  },
});

const connection = new Sequelize("db", null, null, {
  host: "localhost",
  dialect: "sqlite",
  storage: "database.sqlite",
});

let upload = multer({ dest: "uploads/" });

const UserConfig = connection.define("UserConfig", {
  userName: Sequelize.STRING,
  workflowName: Sequelize.STRING,
  dataType: Sequelize.STRING,
  dataSource: Sequelize.STRING,
  workflowComponents: Sequelize.STRING,
});

// configure the app to use bodyParser()
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors())

app.post("/api/config/upload", upload.single("file"), (req, res, next) => {
  const file = req.file;
  console.log(file);
  if (!file) {
    console.log("hi");
    const error = new Error("No File");
    error.httpStatusCode = 400;
    return next(error);
  }
  const filename = file.filename;
  let fileContents = fs.readFileSync('./uploads/' + filename, 'utf8');
  let data = yaml.load(fileContents);
  console.log(data);
  let newUserConfig = {
              userName: data.userName,
              workflowName: data.workflowName,
              dataType: data.dataType,
              dataSource: data.dataSource,
              workflowComponents: data.workflowComponents
            };
  UserConfig.create(newUserConfig);
  res.send(file);
});

app.use('/api',loginRoutes )

connection
  .sync({
    logging: console.log,
  })
  .then(() => {
    console.log("Connection to database established successfully.");
  })
  .catch((err) => {
    console.log("Unable to connect to the database: ", err);
  });

server.listen(8000, function () {
  console.log("server is listening on port: 8000");
});
