const router = require("express").Router();
const UserController = require("../controllers/userController");

router.get("/add", (req, res) => {
  res.render("./add-user");
});

module.exports = router;
