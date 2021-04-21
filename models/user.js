'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // User.hasMany(models.shipment, { foreignKey: 'UserId' })
      // User.hasOne(models.city, { foreignKey: 'CityId' })
    }
  };
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    // current_city: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};