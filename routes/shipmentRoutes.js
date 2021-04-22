const router = require("express").Router();
const ShipmentController = require("../controllers/shipmentController");

router.get("/add", (req, res) => {
  res.render("./add-shipment-to-user");
});

module.exports = router;
