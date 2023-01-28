const pool=require('../connection');


const isFypGroupExist=(req,res,next)=>{

console.log("group exist--->",req.params);

    if(req.params.token==undefined){

      const groupMembers=req.body.groupMembers;
    console.log('body');
    if(groupMembers==1){
        const std1RollNo=req.body.std1RollNo;
    
        pool.query('SELECT * FROM FYP_GROUP WHERE ((STUDENT_ID1 IN (?)) OR (STUDENT_ID2 IN (?)) OR (STUDENT_ID3 IN (?)))',
        [std1RollNo,std1RollNo,std1RollNo],
        async (error, result,fields)=>{
          if(error){
            console.log("error",error);
          return  res.json({
              success:0,
              message:'database connection error'
            });
          }
        if(result.length!=0){
        return res.json({
        success:0,
        message:"Members already registered!",
        });
        }
        else{
          next();
        }
          
      
        });
      }
      else if(groupMembers==2){
    
        const std1RollNo=req.body.std1RollNo;
        const std2RollNo=req.body.std2RollNo;
    
        
        pool.query('SELECT * FROM FYP_GROUP WHERE (STUDENT_ID1 IN (?,?)) OR (STUDENT_ID2 IN (?,?)) OR (STUDENT_ID3 IN(?,?))',
    [std1RollNo,std2RollNo,std1RollNo,std2RollNo,std1RollNo,std2RollNo],
    (error, result,fields)=>{
    if(error){
      console.log("error",error);
    return  res.json({
        success:0,
        message:'database connection error'
      });
    }
    if(result.length!=0){
    
    return res.json({
    success:0,
    message:"Members already registered!",
    data:result
    });
    }
    else{
      next();
    }
    
    
      });
    
    
     
    }
    else if(groupMembers==3){
      const std1RollNo=req.body.std1RollNo;
      const std2RollNo=req.body.std2RollNo;
      const std3RollNo=req.body.std3RollNo;
    
    
      pool.query('SELECT * FROM FYP_GROUP WHERE (STUDENT_ID1 IN (?,?,?)) OR (STUDENT_ID2 IN (?,?,?)) OR (STUDENT_ID3 IN(?,?,?))',
    [std1RollNo,std2RollNo,std3RollNo,std1RollNo,std2RollNo,std3RollNo,std1RollNo,std2RollNo,std3RollNo],
    (error, result,fields)=>{
    if(error){
      console.log("error",error);
    return  res.json({
        success:0,
        message:'database connection error'
      });
    }
    if(result.length!=0){
    
    return res.json({
    success:0,
    message:"Members already registered!",
    });
    }
    else{
      next();
    }
    });
    
    }
    else if(groupMembers==4){
    
      const std1RollNo=req.body.std1RollNo;
      const std2RollNo=req.body.std2RollNo;
      const std3RollNo=req.body.std3RollNo;
      const std4RollNo=req.body.std4RollNo;
    
      pool.query('SELECT * FROM FYP_GROUP WHERE ((STUDENT_ID1 IN (?,?,?,?) OR (STUDENT_ID2 IN (?,?,?,?) OR (STUDENT_ID3 IN(?,?,?,?) OR (STUDENT_ID4 IN (?,?,?,?))',
    [std1RollNo,std2RollNo,std3RollNo,,std4RollNo,std1RollNo,std2RollNo,std3RollNo,,std4RollNo,std1RollNo,std2RollNo,std3RollNo,std4RollNo,std1RollNo,std2RollNo,std3RollNo,std4RollNo],
    (error, result,fields)=>{
    if(error){
      console.log("error",error);
    return  res.json({
        success:0,
        message:'database connection error'
      });
    }
    if(result.length!=0){
    
    return res.json({
    success:0,
    message:"Members already registered!",
    });
    }
    else{
      next();
    }
    });
    
    
    
    }
    
    }else{
    
      console.log('ok')
      const token=req.params.token;
        
      const decodedToken=JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());    
    
      console.log(decodedToken)
      const groupMembers=decodedToken.groupMembers;
    
      if(groupMembers==1){
          const std1RollNo=decodedToken.std1RollNo;
      
          pool.query('SELECT * FROM FYP_GROUP WHERE ((STUDENT_ID1 IN (?)) OR (STUDENT_ID2 IN (?)) OR (STUDENT_ID3 IN (?)))',
          [std1RollNo,std1RollNo,std1RollNo],
          async (error, result,fields)=>{
            if(error){
              console.log("error",error);
            return  res.json({
                success:0,
                message:'database connection error'
              });
            }
          if(result.length!=0){
            // res.json({"ok":"already"});


            res.render('signup_message',{
              success:0,
            message:"Group Already Registered!",
          })

        }
          else{
            next();
          }
            
        
          });
        }
        else if(groupMembers==2){
      
          const std1RollNo=decodedToken.std1RollNo;
          const std2RollNo=decodedToken.std2RollNo;
      
          
          pool.query('SELECT * FROM FYP_GROUP WHERE (STUDENT_ID1 IN (?,?)) OR (STUDENT_ID2 IN (?,?)) OR (STUDENT_ID3 IN(?,?))',
      [std1RollNo,std2RollNo,std1RollNo,std2RollNo,std1RollNo,std2RollNo],
      (error, result,fields)=>{
      if(error){
        console.log("error",error);
      return  res.json({
          success:0,
          message:'database connection error'
        });
      }
      if(result.length!=0){
      
        res.render('signup_success',{
          success:0,
        message:"Group Already Registered!",
      })
  }
      else{
        next();
      }
      
      
        });
      
      
       
      }
      else if(groupMembers==3){
        const std1RollNo=decodedToken.std1RollNo;
        const std2RollNo=decodedToken.std2RollNo;
        const std3RollNo=decodedToken.std3RollNo;
      
      
        pool.query('SELECT * FROM FYP_GROUP WHERE (STUDENT_ID1 IN (?,?,?)) OR (STUDENT_ID2 IN (?,?,?)) OR (STUDENT_ID3 IN(?,?,?))',
      [std1RollNo,std2RollNo,std3RollNo,std1RollNo,std2RollNo,std3RollNo,std1RollNo,std2RollNo,std3RollNo],
      (error, result,fields)=>{
      if(error){
        console.log("error",error);
      return  res.json({
          success:0,
          message:'database connection error'
        });
      }
      if(result.length!=0){
      
        res.render('signup_message',{
          success:0,
        message:"Group Already Registered!",
      })
}
      else{
        next();
      }
      });
      
      }
      else if(groupMembers==4){
      
        const std1RollNo=decodedToken.std1RollNo;
        const std2RollNo=decodedToken.std2RollNo;
        const std3RollNo=decodedToken.std3RollNo;
        const std4RollNo=decodedToken.std4RollNo;
      
        pool.query('SELECT * FROM FYP_GROUP WHERE ((STUDENT_ID1 IN (?,?,?,?) OR (STUDENT_ID2 IN (?,?,?,?) OR (STUDENT_ID3 IN(?,?,?,?) OR (STUDENT_ID4 IN (?,?,?,?))',
      [std1RollNo,std2RollNo,std3RollNo,,std4RollNo,std1RollNo,std2RollNo,std3RollNo,,std4RollNo,std1RollNo,std2RollNo,std3RollNo,std4RollNo,std1RollNo,std2RollNo,std3RollNo,std4RollNo],
      (error, result,fields)=>{
      if(error){
        console.log("error",error);
      return  res.json({
          success:0,
          message:'database connection error'
        });
      }
      if(result.length!=0){
      
        res.render('signup_message',{
          success:0,
        message:"Group Already Registered!",
      })
}
      else{
        next();
      }
      });
      
      
      
      }
      
    
    }
    
    }
    
    module.exports={isFypGroupExist};