const express = require('express')
const router = express.Router()
const pool=require("../connection");
const {getSupervisors}=require('../controllers/supervisor_controller');

router.get('/', getSupervisors);

module.exports = router;
