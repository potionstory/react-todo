const express = require('express');
const router = express.Router();
const member = require('./member');

router.get('/', member.find);
router.get('/:id', member.findOne);
router.post('/', member.create);
router.put('/:id', member.update);
router.delete('/:id', member.remove);

module.exports = router;