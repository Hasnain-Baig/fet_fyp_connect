const express = require('express');
const pool=require('../connection');

const getCoOrdiantors=(req, res) => {
    pool.query('SELECT * FROM COORDINATOR',
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
            message:"No Co-ordinators Found!"
          });
    
      }
      return  res.json({
        success:1,
        data:result
      });

    }
      );
}

const getCoOrdiantorById=(req, res) => {

    const id=req.params.id;

    pool.query('SELECT * FROM COORDINATOR WHERE Department_Name=?',
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
            message:"Invalid co-ordinator id!"
          });
    
      }
      return  res.json({
        success:1,
        data:result
      });

    }
      );
}


const getCoOrdiantorByDeptName=(req, res) => {

    const dept=req.params.dept;

    pool.query('SELECT * FROM COORDINATOR WHERE Department_Name=?',
    [dept],
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
            message:"No Co-ordinator Found!"
          });
    
      }
      return  res.json({
        success:1,
        data:result
      });

    }
      );
}



  module.exports={getCoOrdiantors,getCoOrdiantorById,getCoOrdiantorByDeptName};