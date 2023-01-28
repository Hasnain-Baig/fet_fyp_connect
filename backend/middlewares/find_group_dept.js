const pool=require('../connection');

const findGroupDept=(req,res,next)=>{

    const groupId=req.body.groupId;

pool.query('SELECT Dept_Name FROM FYP_GROUP WHERE FYP_ID=?',
[groupId],
(error,result,fields)=>{
  if(error){
    return  res.json({
      success:0,
      message:'database connection error'
    });
  }

  req.body.deptName=result[0].Dept_Name;

  console.log(result.length);
    next();


});

}

module.exports={findGroupDept};