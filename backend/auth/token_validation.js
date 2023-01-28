const {verify}=require('jsonwebtoken');

checkToken=(req,res,next)=>{
const token=req.get("authorization");
if(token){
    token=token.slice(7);
    verify(token,"12345abc",(err,decode)=>{
if(err){
res.json({
    success:0,
    message:"Invalid token"
})
}
else{
    next();
}
    });

}else{
    res.json({
        success:0,
        message:"Access denied! unauthorized user!"
    });
}

}

module.exports={checkToken};