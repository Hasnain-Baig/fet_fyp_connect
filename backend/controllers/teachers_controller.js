const express = require('express');
const pool=require('../connection');

const getTeachers=(req,res)=>{
  // date:Date.UTC()


  pool.query('SELECT * FROM TEACHER',
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
            message:"No Teachers Found!"
          });
    
      }

      return  res.json({
        success:1,
        data:result
      });
      }
      );
}

const getTeacherById=(req,res)=>{
  const id=req.params.id;
  pool.query('SELECT * FROM TEACHER WHERE Teacher_ID = ?',
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
          message:"Invalid Teacher Id!"
        });
  
    }
    return  res.json({
      success:1,
      data:result[0]
    });
    }
    );
}

  module.exports={getTeachers,getTeacherById};