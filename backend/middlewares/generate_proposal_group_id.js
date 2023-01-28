const pool=require('../connection');

const generateProposalGroupId=(req,res,next)=>{
    const deptFirstWord=req.body.deptName.split(' ')[0];
    console.log("body in genereate",req.body);
    console.log("body",deptFirstWord);
    var deptShortFrom;
    if(deptFirstWord=='Software'){
    deptShortFrom='SWEM';
    }else if(deptFirstWord=='Electronics'){
      deptShortFrom='ELEM';
    }else if(deptFirstWord=='Telecom'){
      deptShortFrom='TELM';
    }else{
      deptShortFrom='ITM';
    }
    
    console.log(deptShortFrom);
    
    pool.query('SELECT GROUP_ID FROM FYP_PROPOSAL WHERE GROUP_ID LIKE ? ORDER BY GROUP_ID',
    [`%${deptShortFrom}%`],
    (error,result,fields)=>{
    if(error){
      return  res.json({
        success:0,
        message:'database connection error'
      });
    }
    
    if(result.length!=0){
    
    const lastIntId=result[result.length-1].GROUP_ID.split('-')[result[result.length-1].GROUP_ID.split('-').length-1];
    console.log();
    const lastIntIdToInteger=parseInt(lastIntId);
    console.log(lastIntIdToInteger+1);

    req.body.proposalGroupId=new Date().getFullYear().toString()+'-'+deptShortFrom+'-'+(lastIntIdToInteger+1);

    }
    else{
    req.body.proposalGroupId=new Date().getFullYear()+'-'+deptShortFrom+'-'+1;
    }

    next();
    });
    
}

module.exports={generateProposalGroupId};