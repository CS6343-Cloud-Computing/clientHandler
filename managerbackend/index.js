import express from "express";
import { createServer } from "http";
import pkg from "body-parser";
import cors from 'cors';
const app = express();
import connection from "./seqSetup.js";
const server = createServer(app);
import loginRoutes from './routes/LoginRoutes.js';

const {urlencoded, json} = pkg;

// configure the app to use bodyParser()
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());
app.use(cors())

app.use('/api', loginRoutes)

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
