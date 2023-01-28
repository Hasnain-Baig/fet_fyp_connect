const express = require('express')
const router = express.Router()
const pool=require("../connection");
const path=require('path');
const {getFypIdeas,getFypIdeaById,postFypIdeas,isFypIdeaExist}=require('../controllers/fyp_ideas_controller');

router.get('/',getFypIdeas );
router.get('/:id',getFypIdeaById );
router.post('/', isFypIdeaExist,postFypIdeas);

module.exports = router;
