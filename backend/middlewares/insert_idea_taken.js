const { ForecastQueryService } = require('aws-sdk');
const pool=require('../connection');

const insertIdeaTaken=(req,res,next)=>{
    const ideaId=req.body.fypId;
    const groupId=req.body.groupId;
    const projectTitle=req.body.projectTitle;
console.log(req.body)
console.log(!isNaN(ideaId))


    if(!isNaN(ideaId)){
        console.log("not undefined");

pool.query('UPDATE FYP_IDEA SET Idea_Taken=?,FYP_ID=? WHERE Idea_ID=?',
['Yes',groupId,ideaId],
(error,result,fileds)=>{
    if(error){
        console.log("error",error);
        return  res.json({
            success:0,
            message:'database connection error'
          });
    }
    console.log("update my result--->",result);
    req.body.isTeacherIdea=true;
    next();
})

}else{
    pool.query('INSERT INTO FYP_IDEA(Title,Idea_Taken,FYP_ID) VALUES(?,?,?)',
    [projectTitle,'Yes',groupId],
    (error,result,fields)=>{
        if(error){
            console.log("error",error);
            return  res.json({
                success:0,
                message:'database connection error'
              });
        }
        
else{
    pool.query('SELECT * FROM FYP_IDEA WHERE Title=?',
    [projectTitle,],
    (error,result,fields)=>{
        if(error){
            console.log("error",error);
            return  res.json({
                success:0,
                message:'database connection error'
              });
        }
        console.log("insert my result--->",result);

        req.body.isTeacherIdea=false;
        req.body.fypId=result[0].Idea_ID
        next();
   
        
    })


}    


    
})
    
}
}

module.exports={insertIdeaTaken};