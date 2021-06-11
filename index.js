const express = require("express");
require("dotenv").config();
require("./models");

const https = require("https");
const fs = require("fs");
const cors = require("cors");
const logger = require("morgan");
const checkToken = require("./middlewares/checkToken");

const port = 4000;

const app = express();

// express 미들웨어 설정
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "https://localhost:3000",
    method: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.use(checkToken);

app.use(logger("dev"));

// express 라우팅
const userRouter = require("./routes/user");
// const postRouter = require("./routes/post");
// const plantRouter = require("./routes/plant");

app.get("/", (req, res) => {
  res.send("GET request to the homepage");
});
app.use("/user", userRouter);
app.use("/signin", userRouter);
app.use("/signup", userRouter);

// app.use("/post", postRouter);
// app.use("/plant", plantRouter);

// https 프로토콜 사용
const server = https
  .createServer(
    {
      key: fs.readFileSync(__dirname + "/key.pem", "utf-8"),
      cert: fs.readFileSync(__dirname + "/cert.pem", "utf-8"),
    },
    app
  )
  .listen(port, () => {
    console.log(`server listening on ${port}`);
  });

module.exports = server;
