const express = require('express')
const router = express.Router()
const pool=require("../connection");
const {getTeachers,getTeacherById}=require('../controllers/teachers_controller');

router.get('/', getTeachers);
router.get('/:id', getTeacherById);

module.exports = router;
