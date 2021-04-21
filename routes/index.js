const router = require('express').Router();
const Controller = require('../controllers/index');

router.get('/', Controller.profilUser)
router.get('/add', Controller.add)
router.post('/add', Controller.addHandler)
router.get('/edit/:id', Controller.edit)
router.post('/edit/:id', Controller.editHandler)
router.get('/delete/:id', Controller.delete)

module.exports = router