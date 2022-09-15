const express = require("express");
const http = require("http");
const bcrypt = require("bcrypt");
const path = require("path");
const bodyParser = require("body-parser");
const users = require("./data").userDB;
const Sequelize = require("sequelize");

const app = express();
const server = http.createServer(app);

const connection = new Sequelize("db", null, null, {
  host: "localhost",
  dialect: "sqlite",
  storage: "database.sqlite",
});

const User = connection.define("User", {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
});

// configure the app to use bodyParser()
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.post("/register", async (req, res) => {
  try {
    let foundUser = User.findOne({ where: { username: req.body.username } });
    if (!foundUser) {
      let hashPassword = await bcrypt.hash(req.body.password, 10);

      let newUser = {
        username: req.body.username,
        password: hashPassword,
      };

      User.create(newUser);

      res.status(200).send({ message: "user created" });
    } else {
      res.status(201).send({ message: "user already exists" });
    }
  } catch {
    res.status(400).json("404 - no user exists in db to update");
  }
});

app.post("/login", async (req, res) => {
  try {
    const foundUser = await User.findOne({
      where: { username: req.body.username },
    });
    if (foundUser) {
      let submittedPass = req.body.password;
      let storedPass = foundUser.password;

      const passwordMatch = await bcrypt.compare(submittedPass, storedPass);
      if (passwordMatch) {
        let usrname = foundUser.username;
      } else {
      }
    } else {
      res.send();
    }
  } catch {
    res.send("Internal server error");
  }
});

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
