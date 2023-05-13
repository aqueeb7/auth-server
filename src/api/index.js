const express = require('express');

const router = express.Router();

const auth = require('./auth/auth.routes');

router.use('/auth', auth);
router.use(express.json());

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});


module.exports = router;
