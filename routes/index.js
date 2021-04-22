const router = require("express").Router();

const userRouter = require("./userRoutes");
const shipmentRouter = require("./shipmentRoutes");
const destinationRouter = require("./destinationRoutes");

router.use("/users", userRouter);
router.use("/shipment", shipmentRouter);
router.use("/destination", destinationRouter);

module.exports = router;
