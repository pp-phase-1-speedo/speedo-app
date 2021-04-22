'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shipment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    getBranchOffice() {
      //   <option value="-6.176583196881574, 106.8306848835742, Gambir, Jakarta Pusat">Cabang Gambir, Jakarta Pusat</option>
      // <option value="-6.899923454407073, 107.61941800046168, Gasibu, Bandung">Cabang Gasibu, Bandung</option>
      // <option value="3.5747357751521562, 98.68805827064362, Masjid Raya, Medan">Cabang Masjid Raya, Medan</option>
      // <option value="-7.283037100911854, 112.79794010017899, ITS, Surabaya">Cabang ITS, Surabaya</option>
      if (this.current_latitude === '-6.176583196881574' && this.current_longitude === '106.8306848835742') {
        return 'Gambir, Jakarta'
      } else if (this.current_latitude === '-6.899923454407073' && this.current_longitude === '107.61941800046168') {
        return 'Gasibu, Bandung'
      } else if (this.current_latitude === '3.5747357751521562' && this.current_longitude === '98.68805827064362') {
        return 'Masjid Raya, Medan'
      } else if (this.current_latitude === '-7.283037100911854' && this.current_longitude === '112.79794010017899') {
        return 'ITS, Surabaya'
      }
    }

    static associate(models) {
      // define association here
      Shipment.belongsTo(models.User)
      Shipment.belongsToMany(models.Destination, { through: models.ShipmentDestination })
    }
  };
  Shipment.init({
    current_latitude: DataTypes.STRING,
    current_longitude: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Shipment',
  });
  return Shipment;
};