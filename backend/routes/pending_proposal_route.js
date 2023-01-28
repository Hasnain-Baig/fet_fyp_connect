const express = require('express')
const router = express.Router()
const pool=require("../connection");
const {getPendingFypProposalBySupervisorId,updatePendingFypProposal} =require('../controllers/pending_fyp_proposal_controller');

// router.get('/', getFypProposal);
router.get('/supervisor/:id', getPendingFypProposalBySupervisorId);
router.put('/:id', updatePendingFypProposal);

module.exports = router;
