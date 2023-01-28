const pool=require('../connection');

const isEmailExistInFypGroup=(req,res,next)=>{

    if(req.params.token==undefined){
      const groupEmail=req.body.groupEmail;
  
      pool.query('SELECT * FROM FYP_GROUP WHERE Primary_Email=?',
      [groupEmail],
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
        message:"Group Email Already Exist",
        });
    
    }else{
    next();
    }
    
    
      });
    
    }else{
      const token=req.params.token;
      const decodedToken=JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());    
        const groupEmail=decodedToken.groupEmail;
  
      pool.query('SELECT * FROM FYP_GROUP WHERE Primary_Email=?',
      [groupEmail],
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
        message:"Group Email Already Exist",
        });
    
    }else{
    next();
    }
    
    
      });
    
    }
  
  }
  
  module.exports={isEmailExistInFypGroup};