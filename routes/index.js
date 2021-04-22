const router = require("express").Router();

const userRouter = require("./userRoutes");
const shipmentRouter = require("./shipmentRoutes");
const destinationRouter = require("./destinationRoutes");
const { User } = require("../models/index");

router.get("/", (req, res) => {
  res.redirect("/users");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", (req, res) => {
  User.findAll({
    where: {
      username: req.body.username,
      password: req.body.password,
    },
  })
    .then((data) => {
      if (!data.length) {
        res.redirect("/login");
      } else {
        req.session.isLogin = true;
        res.redirect(`/users?username=${data[0].username}`);
      }
    })
    .catch((err) => {
      res.send(err);
    });
});

const isLogin = function (req, res, next) {
  if (req.session.isLogin === true) {
    next();
  } else {
    res.redirect("/login");
  }
};
router.use(isLogin);
router.use("/users", userRouter);
router.use("/shipments", shipmentRouter);
router.use("/destinations", destinationRouter);

module.exports = router;
