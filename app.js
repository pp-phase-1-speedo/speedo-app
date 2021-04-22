"use strict";
const express = require("express");
const app = express();
const port = 3000;
const session = require("express-session");
const { User } = require("./models/index.js");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

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

app.get("/", (req, res) => {
  if (req.session.isLoggedIn === true) {
    User.findAll({
      where: {
        username: req.session.username,
      },
    }).then((data) => {
      // res.render("halamanUser", {
      //   username: req.session.username,
      //   data,
      res.redirect("/users");
      // });
    });
  } else {
    res.redirect("/login");
  }
});
app.get("/login", (req, res) => {
  if (req.query.err) {
    res.render("login", {
      errorLogin: true,
    });
  } else {
    res.render("login", {
      errorLogin: false,
    });
  }
});
app.post("/login", (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
      password: req.body.password,
    },
  })
    .then((data) => {
      if (data === null) {
        res.redirect("/login?err=true");
      } else {
        req.session.isLoggedIn = true;
        req.session.username = data.username;

        res.redirect("/");
      }
    })
    .catch((err) => {
      res.send(err);
    });
});

app.use(router);

app.listen(port, () => {
  console.log(`Running port : ${port}`);
});
