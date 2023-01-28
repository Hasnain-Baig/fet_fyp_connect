const express = require('express');
const pool=require('../connection');

const getPendingFypProposalBySupervisorId=(req,res)=>{
    const id=req.params.id;
    pool.query('SELECT * FROM FYP_PROPOSAL WHERE Teacher_ID=? AND Project_Status=?',
    [id,'pending'],
    (error, result,fields)=>{
      if(error){
        console.log("error",error);
      return  res.json({
          success:0,
          message:'database connection error'
        });
      }

      if(result.length==0){
        return res.json({
          success:0,
          message:"No Pending Proposals Found!"
        });
  
      }
      return res.json({
        success:1,
        data:result
      });


    });
}

const updatePendingFypProposal=(req,res)=>{
const id=req.params.id;
const status=req.body.status;
    pool.query('UPDATE FYP_PROPOSAL SET Project_Status=? WHERE FYP_ID=?',
    [status,id],
    (error,result,field)=>{
      if(error){
        console.log("error",error);
      return  res.json({
          success:0,
          message:'database connection error'
        });
      }
if(result['affectedRows']==0){
return res.json({
  success:0,
  message:"No Record Found",
});
}
return res.json({
success:1,
message:"Project Status Updated Successfully!",
});

});

}

  module.exports={getPendingFypProposalBySupervisorId,updatePendingFypProposal};