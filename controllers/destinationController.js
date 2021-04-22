'use strict'
const { User, Shipment, Destination, ShipmentDestination } = require('../models')

class Controller {
  static getAdd(req, res) {
    res.render('./add-destination')
  }
}

module.exports = Controller