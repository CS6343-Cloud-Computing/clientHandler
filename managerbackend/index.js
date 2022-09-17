const express = require("express");
const http = require("http");
const path = require("path");
const bodyParser = require("body-parser");
const multer = require("multer");
const cors = require('cors')
const app = express();
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

let upload = multer({ dest: "uploads/" });

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
  res.send(file);
});

app.use('/api',loginRoutes )

server.listen(8000, function () {
  console.log("server is listening on port: 8000");
});
