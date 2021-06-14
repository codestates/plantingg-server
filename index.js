const express = require("express");
require("dotenv").config();
require("./models");

const fs = require("fs");
const cors = require("cors");
const logger = require("morgan");

const port = process.env.PORT ?? 4000;

const app = express();

// express 미들웨어 설정
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "http://plantingg.s3-website.ap-northeast-2.amazonaws.com/",
    method: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.use(logger("dev"));

// express 라우팅
const userRouter = require("./routes/user");
const postRouter = require("./routes/post");
// const plantRouter = require("./routes/plant");

app.get("/", (req, res) => {
  res.send("GET request to the homepage");
});

app.use("/user", userRouter);
app.use("/post", postRouter);
// app.use("/plant", plantRouter);

const server = app.listen(port, () => {
  console.log(`server listening on ${port}`);
});

module.exports = server;
