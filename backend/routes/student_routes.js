const express = require('express')
const router = express.Router()
const pool=require("../connection");
const {getStudents,getStudentsById}=require('../controllers/students_controller');

router.get('/', getStudents);
router.get('/:id', getStudentsById);

module.exports = router;
