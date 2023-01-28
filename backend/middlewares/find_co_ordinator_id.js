const pool=require('../connection');


const findCoOrdiatorIdByDeptName=(req,res,next)=>{
console.log("find co id",req.body);
    const deptName=req.body.deptName;

      pool.query('SELECT Coordinator_ID FROM COORDINATOR WHERE Department_Name LIKE ?',
    [`%${deptName.split(' ')[0]}%`],
    (error,result,fields)=>{
  if(error){
    return  res.json({
      success:0,
      message:'database connection error'
    });
  }
  
  console.log('result',result);
//   console.log("result------->",result);
req.body.coOrdinatorId=result[0].Coordinator_ID;  

next();
});


}

module.exports={findCoOrdiatorIdByDeptName};