const express = require('express');
const router = express.Router();
const member = require('./member');

router.get('/', (req, res) => {
  res.send('<h1>FE-STAR API</h1>');
});

router.use('/member', member);

module.exports = router;