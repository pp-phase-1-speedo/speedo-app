const router = require('express').Router();
const Controller = require('../controllers/index');

router.get('/', Controller.testing)


module.exports = router