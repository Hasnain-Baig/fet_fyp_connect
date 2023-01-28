const express = require('express');
const pool=require('../connection');

const getActivityByProposalId=(req,res)=>{
    const id=req.params.id;
    pool.query('SELECT * FROM FYP_ACTIVITY WHERE Proposal_ID=?',
    [id],
    (error, result,fields)=>{
      if(error){
        console.log("error",error);
      return  res.json({
          success:0,
          message:'database connection error'
        });
      }

      if(result.length==0){
        return  res.json({
            success:0,
            message:"No Proposal Activity!"
          });
    
      }
      return  res.json({
        success:1,
        data:result
      });

    }
      );

}