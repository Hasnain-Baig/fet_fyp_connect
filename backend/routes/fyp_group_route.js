const express = require('express')
const router = express.Router()
const {getFypGroups,getFypGroupById}=require('../controllers/fyp_groups_controller');

router.get('/',getFypGroups );
router.get('/:id',getFypGroupById );

module.exports = router;
