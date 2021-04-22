const router = require("express").Router();
const Controller = require("../controllers/index");

const userRouter = require("./userRoutes");
const shipmentRouter = require("./shipmentRoutes");
const destinationRouter = require("./destinationRoutes");

router.use("/users", userRouter);
router.use("/shipment", shipmentRouter);
router.use("/destination", destinationRouter);

// router.get("/", Controller.profilUser);
// router.get("/add", Controller.add);
// router.post("/add", Controller.addHandler);
// router.get("/edit/:id", Controller.edit);
// router.post("/edit/:id", Controller.editHandler);
// router.get("/delete/:id", Controller.delete);

module.exports = router;
