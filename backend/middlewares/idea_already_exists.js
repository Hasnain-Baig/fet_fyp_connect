const pool=require('../connection');


const isIdeaAlreadyExists=(req,res,next)=>{
    console.log("body in idea exist--->",req.body)
    const projectTitle=req.body.projectTitle;
pool.query('SELECT * FROM FYP_IDEA WHERE Title=? AND Idea_Taken=?',
[projectTitle,'Yes'],
(error,result,fields)=>{
    if(error){
        console.log("error",error);
      return  res.json({
          success:0,
          message:'database connection error'
        });
      }
      console.log("res----->",result);
  if(result.length>0){
    return res.json({
      success:0,
      message:"Idea Already Taken!",
      });
}else{
    next();
}

})
}

module.exports={isIdeaAlreadyExists};