'use strict'
const { User, Shipment, Destination, ShipmentDestination } = require('../models')
const moneyFormatter = require('../helpers/moneyFormatter')

class Controller {
  static list(req, res) {
    Shipment.findOne({ where: { id: req.params.shipment_id }, include: { model: Destination } })
      .then(shipment => {
        let current_coordinate = { latitude: +shipment.current_latitude, longitude: +shipment.current_longitude }
        shipment.Destinations.forEach(destination => {
          let latitude = +destination.destination_latitude
          let longitude = +destination.destination_longitude
          let destination_coordinate = { latitude, longitude }
          destination.distance = Destination.calculateDistance(current_coordinate, destination_coordinate)
          destination.price = destination.getPrice(destination.distance)
        })
        res.render('list-destination', { destinations: shipment.Destinations, moneyFormatter })
      })
      .catch(err => {
        res.send(err)
      })
  }

  static getAdd(req, res) {
    Destination.findAll({ order: [['recipient_name', 'ASC']] })
      .then(destinations => {
        res.render('./add-destination', { shipment_id: req.params.shipment_id, destinations })
      })
      .catch(err => {
        res.send(err)
      })
  }

  static postAdd(req, res) {
    let ShipmentId = req.params.shipment_id
    if (req.body.radio === 'existing') {
      ShipmentDestination.create({ ShipmentId, DestinationId: req.body.destination_id })
      .then(() => {
        res.redirect(`/destinations/${ShipmentId}/list`)
      })
      .catch(err => {
        res.send(err)
      })
    } else if (req.body.radio === 'new') {
      let coordinate = req.body.coordinate.split(', ')
      let recipient_name = req.body.name
      let destination_latitude = coordinate[0]
      let destination_longitude = coordinate[1]
      Destination.create({ recipient_name, destination_latitude, destination_longitude })
        .then((result) => {
          let DestinationId = result.id
          return ShipmentDestination.create({ ShipmentId, DestinationId })
        })
        .then(() => {
          res.redirect(`/destinations/${ShipmentId}/list`)
        })
        .catch(err => {
          res.send(err)
        })
    }
  }
}

module.exports = Controller