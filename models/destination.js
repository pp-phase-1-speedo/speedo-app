"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Destination extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Destination.belongsToMany(models.Shipment, {
        through: models.ShipmentDestination,
      });
    }
  }
  Destination.init(
    {
      recipient_name: DataTypes.STRING,
      destination_latitude: DataTypes.STRING,
      destination_longitude: DataTypes.STRING,
      city_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Destination",
    }
  );
  return Destination;
};
