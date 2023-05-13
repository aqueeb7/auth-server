const express = require('express');
const auth = require('./auth/auth.routes');
const users = require('./users/users.routes');

const router = express.Router();

router.use(express.json());

router.use('/auth', auth);
router.use('/users', users);

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});


module.exports = router;
