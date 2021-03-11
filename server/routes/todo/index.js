const express = require('express');
const router = express.Router();
const ctrl = require('./controller');

router.get('/', ctrl.find);
router.get('/:id', ctrl.findOne);
router.post('/', ctrl.create);
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.remove);

module.exports = router;