const express = require('express');
const pool=require('../connection');

const getFypIdeas=(req, res) => {
  
    pool.query('SELECT * FROM FYP_IDEA INNER JOIN TEACHER ON FYP_IDEA.Teacher_ID=TEACHER.Teacher_ID',
    [],
    (error, result,fields)=>{
      if(error){
        console.log("error",error);
      return  res.status(500).json({
          success:0,
          message:'database connection error'
        });
      }

if(result.length==0){
  return  res.json({
    success:0,
    message:"No Ideas Found!"
  });
  
}
else{
  return  res.json({
    success:1,
    data:result
  });
  }

    });
  }

  const getFypIdeaById=(req, res) => {

    const ideaId=req.params.id;
    pool.query('SELECT * FROM FYP_IDEA WHERE IDEA_ID=?',
    [ideaId],
    (error, result,fields)=>{
      if(error){
        console.log("error",error);
      return  res.status(500).json({
          success:0,
          message:'database connection error'
        });
      }

      if(result.length==0){
        return  res.json({
          success:0,
          message:"Invalid Fyp Idea Id!"
        });
  
      }
      return  res.json({
        success:1,
        data:result
      });

    }
      );
    }


const postFypIdeas=(req,res)=>{
            console.log(req.body);
            const teacherId=req.body.teacherId;
            const title=req.body.title;
            const tools=req.body.tools;
            const description=req.body.description;

            pool.query('INSERT INTO FYP_IDEA(Title,Tools,Description,Idea_Taken,Teacher_ID) VALUES(?,?,?,?,?)',
            [
                title,
                tools,
                description,
                "No",
                teacherId
            ],
            (error, inResult,fields)=>{
              if(error){
                console.log("error",error);
              return  res.json({
                  success:0,
                  message:'database connection error'
                });
              }
          
                return res.json({
                  success:1,
                  message:'Idea Submitted Succesfully!'
                  });
            
          
            });  
          
            
    }

const isFypIdeaExist=(req,res,next)=>{
  console.log(req.body);
  const title=req.body.title;

  pool.query('SELECT * FROM FYP_IDEA WHERE Title=?',
[title],
(error,result,field)=>{
  if(error){
    console.log("error",error);
  return res.json({
      success:0,
      message:'database connection error'
    });
  }

  console.log(result.length);
  if(result.length!=0){
    return res.json({
      success:0,
      message:'Idea Already Exists!',
    });
  
  }else{
console.log("not exist");
next();
}



});

}


  module.exports={getFypIdeas,getFypIdeaById,postFypIdeas,isFypIdeaExist};
