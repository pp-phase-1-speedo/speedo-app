const router = require('express').Router();
const Controller = require('../controllers/index');

router.get('/', Controller.profilUser)
router.get('/add', Controller.add)
router.post('/add', Controller.addHandler)
router.get('/:id/edit', Controller.edit)
router.post('/:id/edit', Controller.editHandler)
router.get('/:id/delete', Controller.delete)



module.exports = router