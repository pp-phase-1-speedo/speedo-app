'use strict'
const { User, Shipment, Destination, ShipmentDestination } = require('../models')

class Controller {
  static list(req, res) {
    // Destination.findAll({ where: { id: req.params.shipment_id }, include: { model: Shipment } })
    Shipment.findOne({ where: { id: req.params.shipment_id }, include: { model: Destination } })
      .then(shipments => {
        // console.log(shipments.Destinations)
        // res.send(shipments.Destinations)
        res.render('list-destination', { destinations: shipments.Destinations })
      })
      .catch(err => {
        res.send(err)
      })
  }

  static getAdd(req, res) {
    res.render('./add-destination', { shipment_id: req.params.shipment_id })
  }

  static postAdd(req, res) {
    let ShipmentId = req.params.shipment_id
    let recipient_name = req.body.name
    let coordinate = req.body.coordinate.split(', ')
    let destination_latitude = coordinate[0]
    let destination_longitude = coordinate[1]
    // console.log({recipient_name, destination_latitude, destination_longitude})
    Destination.create({ recipient_name, destination_latitude, destination_longitude })
      .then((result) => {
        let DestinationId = result.id
        return ShipmentDestination.create({ ShipmentId, DestinationId })
      })
      .then(() => {
        res.redirect(`/destinations/${ShipmentId}/list`)
        // res.send(`a`)
      })
      .catch(err => {
        res.send(err)
      })
  }
}

module.exports = Controller