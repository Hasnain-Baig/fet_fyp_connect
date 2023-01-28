const pool=require('../connection');

const isSupervisorExist=(req,res,next)=>{
    const id=req.params.id;

    pool.query('SELECT * FROM FYP_PROPOSAL WHERE Teacher_ID=?',
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
            message:"No Supervisor Exist!"
          });
    
      }else{
        next();
      }
    }
      );


}

module.exports={isSupervisorExist};