const { Router } = require('express');

/* MAIN ROUTER */
const router = Router();

router.use('/profile', require('./profile.route'));

module.exports = router;
