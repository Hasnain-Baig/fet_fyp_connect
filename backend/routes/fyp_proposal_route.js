const express = require('express')
const app=express();
const router = express.Router()
const pool=require("../connection");
const {viewThesis,postThesis,updateFypProposal,getFypProposalIdByGroupId,getFypProposal,postFypProposal,getFypProposalById,testDocumentStorage,viewFypProposal,getFypProposalBySupervisorId,getFypProposalByCoOrdinatorId}=require('../controllers/fyp_proposal_controller');
const { isCoOrdinatorExist }=require('../middlewares/co_ordinator_exist');
const { isSupervisorExist }=require('../middlewares/supervisor_exist');
const { findGroupDept }=require('../middlewares/find_group_dept');
const { findCoOrdiatorIdByDeptName }=require('../middlewares/find_co_ordinator_id');
const { generateProposalGroupId }=require('../middlewares/generate_proposal_group_id');
const {getGroupEmailByGroupId }=require('../middlewares/get_group_email_through_group_id');
const {insertIdeaTaken}=require('../middlewares/insert_idea_taken')
const {isIdeaAlreadyExists}=require('../middlewares/idea_already_exists')

const path = require('path');
const multer=require('multer');


// const storage=multer.diskStorage({
//   destination:(req,file,cb)=>{
//     cb(null,'./src/proposals');
//   },
//   filename:(req,file,cb)=>{

//     console.log(req.body);
//     proposalDBName=Date.now()+path.extname(file.originalname);
//     req.body.proposal=proposalDBName;
//     cb(null,proposalDBName);
//   },
// });

const storage=multer.memoryStorage();

const fileFilter=(req,file,cb)=>{

  console.log(file.mimetype.split('/')[1]==='pdf');
console.log("filter",file);
  console.log(file.mimetype.split('/')[1]);

  if(file.mimetype.split('/')[1]==='pdf'){
  cb(null,true);
  }else{
    console.log('error');
    cb(new multer.MulterError('LIMIT_UNEXPECTED_FILE'),false);
  }
  }
  
const upload=multer({
  storage:storage,
  fileFilter:fileFilter,
});

  


router.get('/sample', testDocumentStorage);
router.get('/', getFypProposal);
router.get('/:id', getFypProposalById);
router.get('/view/proposal/:id', viewFypProposal);
router.get('/view/thesis/:id', viewThesis);
router.get('/group/:id', getFypProposalIdByGroupId);
router.get('/supervisor/:id',isSupervisorExist, getFypProposalBySupervisorId);
router.get('/co-ordinator/:id',isCoOrdinatorExist, getFypProposalByCoOrdinatorId);
// router.post('/',upload.fields([{name:'proposalFile'},{name:'thesis'}]), findGroupDept,findCoOrdiatorIdByDeptName,generateProposalGroupId,postFypProposal);
router.post('/',upload.single('proposalFile'), findGroupDept,findCoOrdiatorIdByDeptName,generateProposalGroupId,isIdeaAlreadyExists,insertIdeaTaken,postFypProposal);
router.put('/upload-thesis/:id',upload.single('thesisFile'),postThesis);
router.put('/:id',upload.single('proposalFile'), getGroupEmailByGroupId,updateFypProposal);
// router.post('/status',getGroupEmailByGroupId,postCommentAndUpdateProposalStatus);

  
module.exports = router;