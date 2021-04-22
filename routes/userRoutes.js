const router = require("express").Router();
const UserController = require("../controllers/userController");

router.get("/", UserController.profilUser);
router.get("/edit/:id", UserController.edit);
router.post("/edit/:id", UserController.editHandler);
router.get("/delete/:id", UserController.delete);

module.exports = router;
