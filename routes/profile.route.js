const { Router } = require('express');
const Profile = require('../models/Profile');

const router = Router();

router.get('/', async (req, res) => {
  const profile = await Profile.find({});

  return res.json(...profile);
});

module.exports = router;
