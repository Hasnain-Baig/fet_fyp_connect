const express = require('express');
const pool=require('../connection');

const getStudents=(req, res) => {
    pool.query('SELECT * FROM STUDENT',
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
            message:"No Students Found!"
          });
    
      }
      return  res.json({
        success:1,
        data:result
      });

    }
      );
}

const getStudentsById=(req, res) => {

    const id=req.params.id;

    pool.query('SELECT * FROM STUDENT WHERE Student_ID=?',
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
            message:"Invalid Student Id"
          });
    
      }
      return  res.json({
        success:1,
        data:result
      });

    }
      );
}




  module.exports={getStudents,getStudentsById};