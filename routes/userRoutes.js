const router = require('express').Router();

router.get('/add', ((req, res) => {
  res.render('./add-user')
}))

module.exports = router