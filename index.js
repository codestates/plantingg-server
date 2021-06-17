const express = require("express");
require("dotenv").config();
require("./models");

const fs = require("fs");
const cors = require("cors");
const logger = require("morgan");

const port = process.env.PORT ?? 4000;

const app = express();

// express 미들웨어 설정
app.use(
  express.json({
    limit: "50mb",
  })
);
app.use(
  express.urlencoded({
    limit: "50mb",
    extended: false,
  })
);
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.use(logger("dev"));

// express 라우팅
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const postRouter = require("./routes/post");

app.get("/", (req, res) => {
  return res.send("GET request to the homepage");
});

app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/post", postRouter);

const server = app.listen(port, () => {
  console.log(`server listening on ${port}`);
});

module.exports = server;
