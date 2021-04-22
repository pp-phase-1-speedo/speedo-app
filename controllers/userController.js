"use strict";
const e = require("express");
const {
  User,
  Shipment,
  Destination,
  ShipmentDestination,
} = require("../models");

class Controller {
  static profilUser(req, res) {
    User.findAll({
      where: {
        username: req.query.username,
      },
    })
      .then((data) => {
        res.render("halamanUser", { data });
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static register(req, res) {
    res.render("add-user");
  }
  static registerHandler(req, res) {
    let dataRegister = {
      username: req.body.username,
      password: req.body.password,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      gender: req.body.gender,
      phone_number: req.body.phone_number,
      address: req.body.address,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    User.create(dataRegister)
      .then((data) => {
        res.redirect("/login");
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static edit(req, res) {
    User.findByPk(+req.params.id)
      .then((data) => {
        res.render("edit-user", { data });
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static editHandler(req, res) {
    User.findByPk(+req.params.id)
      .then((data) => {
        data.username = req.body.username;
        data.password = req.body.password;
        data.first_name = req.body.first_name;
        data.last_name = req.body.last_name;
        data.email = req.body.email;
        data.gender = req.body.gender;
        data.phone_number = req.body.phone_number;
        data.address = req.body.address;
        return data.save();
      })
      .then((datas) => {
        res.redirect(`/users?username=${req.body.username}`);
      })
      .catch((err) => {
        let text = [];
        err.errors.forEach((e) => {
          text.push(e.message);
        });
        console.log(text);
        res.send(text);
      });
  }

  static delete(req, res) {}
}

module.exports = Controller;
