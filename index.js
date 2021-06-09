const express = require("express");
require("./models");

const https = require("https");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser")
const session = require("express-session");
const logger = require("morgan");
const mainController = require("./controllers");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = 4000;

app.use(
    session({
        secret: "secret",
        resave: false,
        saveUninitialized: true,
        cookie: {
          domain: "localhost",
          path: "/",
          secure: true,
          httpOnly: true,
          sameSite: "none",
        },
    })
);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
    cors({
      origin: ["http://localhost:3000"],
      method: ["GET", "POST"],
      credentials: true,
    })
  );

  app.get("/user", mainController.user);
  app.post("/signin", mainController.signIn);
  app.post("/signup", mainController.signUp);
  app.post("/signout", mainController.signOut);
  
  const server = https
    .createServer(
      {
        key: fs.readFileSync(__dirname + '/key.pem', 'utf-8'),
        cert: fs.readFileSync(__dirname + '/cert.pem', 'utf-8'),
      },
      app
    )
    .listen(port, () => {
      console.log(`server listen in ${port}`);
    });
  
  module.exports = server;