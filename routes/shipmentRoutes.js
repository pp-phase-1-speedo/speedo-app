const router = require('express').Router();

router.get('/add', ((req, res) => {
  res.render('./add-shipment-to-user')
}))

module.exports = router