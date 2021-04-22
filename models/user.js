"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Shipment);
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "username tidak boleh kosong",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "password tidak boleh kosong",
          },
        },
      },
      first_name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "First Name tidak boleh kosong",
          },
        },
      },
      last_name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Email tidak boleh kosong",
          },
        },
      },
      gender: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Gender tidak boleh kosong",
          },
        },
      },
      phone_number: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Nomor Telfon tidak boleh kosong",
          },
        },
      },
      address: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Alamat tidak boleh kosong",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
      hooks: {
        beforeCreate: (instance, options) => {
          if (!instance.last_name.length) {
            instance.last_name = instance.first_name;
          }
        },
      },
    }
  );
  return User;
};
