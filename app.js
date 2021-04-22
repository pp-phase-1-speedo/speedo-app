"use strict";
const express = require("express");
const app = express();
const port = 3000;
const session = require("express-session");
const { User } = require("./models/index.js");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

const router = require("./routes/index");

app.use(
  session({
    secret: "fssoeifjof393823l2k4n12",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 120000,
    },
  })
);

app.use(router);

app.listen(port, () => {
  console.log(`Running port : ${port}`);
});
