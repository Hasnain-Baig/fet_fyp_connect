const pool=require('../connection');

const getGroupEmailByGroupId=(req,res,next)=>{
  const groupId=req.body.groupId;
  console.log(groupId);

  if(groupId!=undefined){
    pool.query('SELECT Primary_Email FROM FYP_GROUP WHERE FYP_ID=?',
    [groupId],
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
            message:"No Group Exist!"
          });
    
      }else{
        req.body.groupEmail=result[0].Primary_Email;
        next();
      }
    }
      );

  }
else{
  next();

}

}

module.exports={getGroupEmailByGroupId};