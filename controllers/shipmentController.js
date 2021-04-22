'use strict'
const { User, Shipment, Destination, ShipmentDestination } = require('../models')

class Controller {

  static list(req, res) {
    console.log(req.params.user_id)
    Shipment.findAll({ where: { UserId: req.params.user_id }, order: [['createdAt', 'DESC']] })
      // Shipment.findAll({  })
      .then(shipments => {
        // res.send(shipments)
        res.render('./list-shipment', { shipments })
      })
      .catch(err => {
        res.send(err)
      })
  }

  static getAdd(req, res) {
    res.render('add-shipment')
  }

  static postAdd(req, res) {
    let location = req.body.location.split(', ')
    let current_latitude = location[0]
    let current_longitude = location[1]
    let UserId = req.params.user_id
    // console.log({ current_latitude, current_longitude })
    Shipment.create({ current_latitude, current_longitude, UserId })
      .then(() => {
        res.redirect('/shipment/2/list')
      })
      .catch(err => {
        res.send(err)
      })
  }
}

module.exports = Controller