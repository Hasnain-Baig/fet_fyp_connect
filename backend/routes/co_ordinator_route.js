const express = require('express');
const router = express.Router();
const {getCoOrdiantors,getCoOrdiantorByDeptName}=require('../controllers/co_ordinator_controller');


router.get('/', getCoOrdiantors);
router.get('/:dept', getCoOrdiantorByDeptName);

module.exports = router;
