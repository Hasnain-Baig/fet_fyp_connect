const express = require('express');
const pool=require('../connection');
const {compareSync}=require('bcrypt');
const {sign}=require('jsonwebtoken');
const session=require('express-session');

const login=(req, res) => {
  
    console.log(req.body);
    const role=req.body.role;

    const email=req.body.email;
    const password=req.body.password;

    pool.query('SELECT * FROM TEACHER WHERE Teacher_Email=?',
    [email],
    (error, result,fields)=>{
      if(error){
        console.log("error",error);
      return res.json({
          success:0,
          message:'database connection error'
        });
      }

      if(result.length!=0){

        const comparePasswordResult=compareSync(password,result[0].Password);

        if(comparePasswordResult){
          // result[0].Password=undefined;
          // const jsonToken=sign({result:result[0]},"12345abc",{
          //   expiresIn:"1m"
          // });
          req.session.user=result[0];
          console.log(req.session);
          return res.json({
            success:1,
            role:"teacher",
            message:"logged in successfully...",
            // token:jsonToken,
            // sessionID:req.sessionID,
            data:result[0]
          });

        }
        return res.json({
          success:0,
          message:'Invalid Email or Password!'
        });
        }else{
          pool.query('SELECT * FROM FYP_GROUP WHERE Primary_Email=? ',
          [email],
              (error, result,fields)=>{
                if(error){
                  console.log("error",error);
                return res.json({
                    success:0,
                    message:'database connection error'
                  });
                }
          
                if(result.length!=0){
          
                  const comparePasswordResult=compareSync(password,result[0].Password);
          
                  if(!comparePasswordResult){
                    return res.json({
                        success:0,
                        message:'Invalid Email or Password!'
                      });
                  }
                  req.session.user=result[0];
      
                  return res.json({
                    success:1,
                    role:"fyp group",
                    message:"logged in successfully...",
                    // token:jsonToken,
                    // sessionID:req.sessionID,
                    data:result[0],
                  });
                }else{
                  return res.json({
                    success:0,
                    message:'Invalid Email or Password!'
                  });
                  }
              
            });
      
        }
    });    

  
}

  module.exports={login};