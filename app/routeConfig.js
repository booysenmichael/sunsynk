const express = require('express')
const router = express.Router();
const dashboard = require('../dashboard/routes')
const landing = require('../landing/routes')

router.use('/',landing);
router.use('/dashboard',dashboard);

module.exports = router

