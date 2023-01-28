const express = require('express');
const pool=require('../connection');

const getFypGroups=(req, res) => {
    pool.query('SELECT * FROM FYP_GROUP',
    [],
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
            message:"No Fyp Groups Found!"
          });
    
      }
      return  res.json({
        success:1,
        data:result
      });

    }
      );
}

const getFypGroupById=(req, res) => {

    const id=req.params.id;

    pool.query('SELECT * FROM FYP_GROUP WHERE Group_ID=?',
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
            message:"Invalid Fyp Group Id!"
          });
    
      }
      return  res.json({
        success:1,
        data:result
      });

    }
      );
}





  module.exports={getFypGroups,getFypGroupById};