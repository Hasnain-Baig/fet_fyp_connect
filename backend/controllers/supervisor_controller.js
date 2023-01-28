const pool=require('../connection');

const getSupervisors=(req,res)=>{

  pool.query('SELECT DISTINCT TEACHER.Teacher_ID,Teacher_FName,Teacher_LName,Teacher_Email FROM TEACHER INNER JOIN FYP_PROPOSAL ON TEACHER.Teacher_ID=FYP_Proposal.Teacher_ID',
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
          message:"No Supervisors Found!"
        });
  
    }
    return  res.json({
      success:1,
      data:result
    });

  }
    );


}
  

  module.exports={getSupervisors};