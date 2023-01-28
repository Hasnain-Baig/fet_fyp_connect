const pool=require('../connection');


const isStudentValid=(req,res,next)=>{

    const groupMembers=req.body.groupMembers;
  
    if(groupMembers==1){
  
      const std1RollNo=req.body.std1RollNo;
      const std1Name=req.body.std1Name;
      const std1Email=req.body.std1Email;
    
      console.log(std1Name);
    
      pool.query('SELECT * FROM STUDENT WHERE (STUDENT_ID IN (?)) AND (STUDENT_Name IN (?)) AND (STUDENT_Email IN (?))',
      [std1RollNo,std1Name,std1Email],
      (error, result,fields)=>{
        if(error){
          console.log("error",error);
        return  res.json({
            success:0,
            message:'database connection error'
          });
        }
    if(result.length<1){
    return res.json({
    success:0,
    message:"Invalid Student data!"
    });
    
    }
    else{
      next();
    }
    });
    }
    else if(groupMembers==2){
  
      const std1RollNo=req.body.std1RollNo;
      const std1Name=req.body.std1Name;
      const std1Email=req.body.std1Email;
  
      const std2RollNo=req.body.std2RollNo;
      const std2Name=req.body.std2Name;
      const std2Email=req.body.std2Email;
  
      pool.query('SELECT * FROM STUDENT WHERE (STUDENT_ID IN (?,?)) AND (STUDENT_Name IN (?,?)) AND (STUDENT_Email IN (?,?))',
      [std1RollNo,std2RollNo,std1Name,std2Name,std1Email,std2Email,],
      (error, result,fields)=>{
        if(error){
          console.log("error",error);
        return  res.json({
            success:0,
            message:'database connection error'
          });
        }
        console.log(result.length);
  if(result.length<2){
  return res.json({
  success:0,
  message:"Invalid Student Data!",
  });
  }else{
  
    next();
  }
      });
  
    }
    else if(groupMembers==3){
  
      const std1RollNo=req.body.std1RollNo;
      const std1Name=req.body.std1Name;
      const std1Email=req.body.std1Email;
  
      const std2RollNo=req.body.std2RollNo;
      const std2Name=req.body.std2Name;
      const std2Email=req.body.std2Email;
  
      const std3RollNo=req.body.std3RollNo;
      const std3Name=req.body.std3Name;
      const std3Email=req.body.std3Email;
  
  
      pool.query('SELECT * FROM STUDENT WHERE (STUDENT_ID IN (?,?,?)) AND (STUDENT_Name IN (?,?,?)) AND (STUDENT_Email IN (?,?,?))',
      [std1RollNo,std2RollNo,std3RollNo,std1Name,std2Name,std3Name,std1Email,std2Email,std3Email],
      (error, result,fields)=>{
        if(error){
          console.log("error",error);
        return  res.json({
            success:0,
            message:'database connection error'
          });
        }
        console.log(result.length);
  if(result.length<3){
  return res.json({
  success:0,
  message:"Invalid Student Data!",
  });
  }else{
  next();
  }
  });
  
  
    }
    else if(groupMembers==4){
  
      const std1RollNo=req.body.std1RollNo;
      const std1Name=req.body.std1Name;
      const std1Email=req.body.std1Email;
  
      const std2RollNo=req.body.std2RollNo;
      const std2Name=req.body.std2Name;
      const std2Email=req.body.std2Email;
  
      const std3RollNo=req.body.std3RollNo;
      const std3Name=req.body.std3Name;
      const std3Email=req.body.std3Email;
  
      const std4RollNo=req.body.std4RollNo;
      const std4Name=req.body.std4Name;
      const std4Email=req.body.std4Email;
  
  
      pool.query('SELECT * FROM STUDENT WHERE (STUDENT_ID IN (?,?,?,?)) AND (STUDENT_Name IN (?,?,?,?)) AND (STUDENT_Email IN (?,?,?,?))',
      [std1RollNo,std2RollNo,std3RollNo,std4RollNo,std1Name,std2Name,std3Name,std4Name,std1Email,std2Email,std3Email,std4Email],
      (error, result,fields)=>{
        if(error){
          console.log("error",error);
        return  res.json({
            success:0,
            message:'database connection error'
          });
        }
        console.log(result.length);
  if(result.length<4){
  return res.json({
  success:0,
  message:"Invalid Student Data!",
  });
  }else{
    next();
  }
      });
  
  
    }
  }
  
  module.exports={isStudentValid};