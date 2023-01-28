const express = require('express');
const app=express();
const pool=require('../connection');
const path=require('path');
const {s3Uploadv2}=require('../config/aws_s3_service');
const {sendMail}=require('../config/send_mail');
const {MY_MAIL, MY_MAIL_APP_PASSWORD}=require('../config/var');
const nodemailer=require('nodemailer');
const axios=require('axios');



const getFypProposal=(req,res)=>{
    pool.query('SELECT * FROM FYP_PROPOSAL',
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
        return res.json({
          success:0,
          message:"No Proposals Found!"
        });
  
      }
      return res.json({
        success:1,
        data:result
      });


    });
}

const viewFypProposal=async (req,res)=>{
  const id=req.params.id;
  console.log(id);
  try{
     await  res.redirect(`https://aws-s3-fet-fyp-connect-bucket.s3.ap-northeast-1.amazonaws.com/uploads/proposals/${id}`);
    }
  catch(err){
    console.log("catch");
      return res.json({success:0,message:err});  
    }
}


const viewThesis=async (req,res)=>{
  const id=req.params.id;
  console.log(id);
try{
await res.redirect(`https://aws-s3-fet-fyp-connect-bucket.s3.ap-northeast-1.amazonaws.com/uploads/thesis/${id}`);
}catch(err){
  return res.json({success:0,message:err});  
}

}

const getFypProposalById=(req,res)=>{
  const proposalId=req.params.id;
  pool.query('SELECT * FROM FYP_PROPOSAL WHERE Proposal_ID = ?',
  [proposalId],
  (error, result,fields)=>{
    if(error){
      console.log("error",error);
    return  res.json({
        success:0,
        message:'database connection error'
      });
    }

    if(result.length==0){
      return res.json({
        success:0,
        message:"No Proposals Found!"
      });

    }
    return  res.json({
      success:1,
      data:result[0]
    });
    }
    );
}


const testDocumentStorage=(req,res)=>{  
    res.sendFile(path.join(__dirname, '../public/html_files/sample.html'));    
  
  // res.sendFile(path.join(__dirname, '../public/proposals/1668602906522.pdf'));
}

const postFypProposal= async (req,res)=>{

  console.log("inside post---->",req.file);
  console.log("inside post---->",req.body);

  let date_ob = new Date(Date.now());
  const todayDate=date_ob.getFullYear()+"-"+(date_ob.getMonth() + 1)+"-"+date_ob.getDate();

if(req.file!=undefined) {
  proposalName=Date.now()+path.extname(req.file.originalname);
  const file=req.file;
    try{
  const result=await s3Uploadv2(proposalName,file);	  
  }
  catch(e){

    const ideaId=req.body.fypId;
    const groupId=req.body.groupId;
    const projectTitle=req.body.projectTitle;
    const isTeacherIdea=req.body.isTeacherIdea;

console.log(req.body)
console.log(!isNaN(ideaId))


    if(!isTeacherIdea){
        console.log("not undefined");

pool.query('DELETE FROM FYP_IDEA WHERE FYP_ID=?',
[groupId],
(error,result,fields)=>{
    if(error){
        console.log("error",error);
        return  res.json({
            success:0,
            message:'database connection error'
          });
    }
    console.log("update my result--->",result);
   
})

}else{
  
    pool.query('UPDATE FYP_IDEA SET Idea_Taken=?,FYP_ID=? WHERE Idea_ID=?',
    ['No',null,ideaId],
    (error,result,fields)=>{
        if(error){
            console.log("error",error);
            return  res.json({
                success:0,
                message:'database connection error'
              });
        }
    
})
    
}

 return  res.json({
      success:0,
      message:`Network Error`,
    });
	}
}


const projectTitle=req.body.projectTitle;

const proposalGroupId=req.body.proposalGroupId;
  const supervisorId=req.body.supervisorId;
  const coOrdinatorId=req.body.coOrdinatorId;
  const groupId=req.body.groupId;
const fypId=req.body.fypId;



  pool.query('INSERT INTO FYP_PROPOSAL(Coordinator_ID,Project_Status,Idea_ID,FYP_ID,FYP_Name,Teacher_ID,Group_ID,Proposal,Thesis) VALUES(?,?,?,?,?,?,?,?,?)',
  [coOrdinatorId,'Proposal Submitted to Supervisor',fypId,groupId,projectTitle,supervisorId,proposalGroupId,proposalName,null],
  async (error, result,fields)=>{
  if(error){
    console.log(error);
    return  res.json({
      success:0,
      message:'database connection error',
    });
  }

  pool.query('SELECT Proposal_ID FROM FYP_PROPOSAL WHERE FYP_ID=?',
  [groupId],
  (error, result,fields)=>{
    if(error){
      console.log(error);
      return  res.json({
        success:0,
        message:'database connection error',
      });
    }

const proposalID=result[0].Proposal_ID;

    pool.query('INSERT INTO FYP_ACTIVITY(Activity_Type,Activity_By,Activity_Date,Proposal_ID) VALUES(?,?,?,?)',
    ["Proposal Submitted to Supervisor","FYP Group",todayDate,proposalID],
    async (error, result,fields)=>{
    if(error){
      console.log(error);
      return  res.json({
        success:0,
        message:'database connection error',
      });    
    }
  
    console.log("here in fyp activity");
    res.json({
      success:1,
      message:"Proposal Submitted Successfully!",
      fyp_status:"Proposal Submitted to Supervisor",
      projectGroupId:proposalGroupId,
      proposalId:proposalID
    })
  
    
  
    });
  
    
  });
  
  


  });



}

const updateFypProposal= async (req,res)=>{

  const proposalId=req.params.id;
  const status=req.body.status;

  console.log(status);

  let date_ob = new Date(Date.now());
  const todayDate=date_ob.getFullYear()+"-"+(date_ob.getMonth() + 1)+"-"+date_ob.getDate();

if(status=="Proposal Approved by Supervisor"){
  const groupEmail=req.body.groupEmail;
  const supervisorName=req.body.supName;
  const subject=`Comments regarding your Fyp Proposal from your Supervisor : ${supervisorName}`;
  const comment=req.body.comment;
  
  const status=req.body.status;
  const activityBy='Supervisor';
  
  
	  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
     port: 465,
     secure: true,
    service:'gmail',
      auth: {
          user: MY_MAIL,
          pass: MY_MAIL_APP_PASSWORD
      }
  });
  
  const msg={
    from: `"FET FYP CONNECT (UNIVERSITY OF SINDH)"<${MY_MAIL}>`, // sender address
    to: groupEmail, // list of receivers
    subject: subject, // Subject line
    text: comment, // plain text body
  };
  
  //send mail with defined transport object
  let info = await transporter.sendMail(msg,
    async (err, data)=> {
      if(err) {
          console.log('Error Occurs',err);
          return res.json({
            success:0,
            message:`${err}`
          });
  
        } else {
  
          await pool.query('INSERT INTO FYP_ACTIVITY(Activity_Type,Activity_By,Activity_Date,Proposal_ID) VALUES(?,?,?,?)',
          [status,activityBy,todayDate,proposalId],
          (error,result,fields)=>{
          
            if(error){
              console.log(error);
              return  res.json({
                success:0,
                message:'database connection error',
              });
            }
          
            //   return res.json({
            //     success:1,
            //     data:result
            //  }); 
          
          })
          
          await pool.query('UPDATE FYP_PROPOSAL SET Project_Status=? WHERE Proposal_ID=?',
          [status,proposalId],
          (error,result,fields)=>{
          
            if(error){
              console.log(error);
              return  res.json({
                success:0,
                message:'database connection error',
              });
            }
          
              return res.json({
                success:1,
                message:"Your response have been sent successfully!",
                fyp_status:"Proposal Approved by Coordinator",
              }); 
          
          })
          
        }
  }
    );
  
    
  
}
  else if(status=="Proposal Submitted to Coordinator"){
  if(req.file!=undefined) {
    var proposalName=Date.now()+path.extname(req.file.originalname);
    const file=req.file;
	
	   try{
    const result=await s3Uploadv2(proposalName,file);
  }
  catch(e){
 return  res.json({
      success:0,
      message:`Network Error`,
    });
	}
  
    pool.query('UPDATE FYP_PROPOSAL SET Project_Status=? , Proposal=? WHERE Proposal_ID=?',
    [status,proposalName,proposalId],
    async (error, result,fields)=>{
    if(error){
      console.log(error);
      return  res.json({
        success:0,
        message:'database connection error',
      });
    }
  
    pool.query('INSERT INTO FYP_ACTIVITY(Activity_Type,Activity_By,Activity_Date,Proposal_ID) VALUES(?,?,?,?)',
    [status,"FYP Group",todayDate,proposalId],
    async (error, result,fields)=>{
    if(error){
      console.log(error);
      return  res.json({
        success:0,
        message:'database connection error',
      });    
    }
  
    console.log("here in fyp activity");
    res.json({
      success:1,
      message:"Proposal Submitted Successfully!",
      fyp_status:"Proposal Submitted to Coordinator",
    })
  
    
  
    });
  
    
  
  
    });
  
  }
  else{
    pool.query('UPDATE FYP_PROPOSAL SET Project_Status=? WHERE Proposal_ID=?',
    [status,proposalId],
    async (error, result,fields)=>{
    if(error){
      console.log(error);
      return  res.json({
        success:0,
        message:'database connection error',
      });
    }
  
    pool.query('INSERT INTO FYP_ACTIVITY(Activity_Type,Activity_By,Activity_Date,Proposal_ID) VALUES(?,?,?,?)',
    [status,"FYP Group",todayDate,proposalId],
    async (error, result,fields)=>{
    if(error){
      console.log(error);
      return  res.json({
        success:0,
        message:'database connection error',
      });    
    }
  
    console.log("here in fyp activity");
    res.json({
      success:1,
      message:"Proposal Submitted Successfully!",
      fyp_status:"Proposal Submitted to Coordinator",
    })
  
    
  
    });
  
    
  
  
    });
  
  }
  
}
else if(status=="Proposal Accepted by Coordinator"){
  pool.query('UPDATE FYP_PROPOSAL SET Project_Status=? WHERE Proposal_ID=?',
  [status,proposalId],
  async (error, result,fields)=>{
  if(error){
    console.log(error);
    return  res.json({
      success:0,
      message:'database connection error',
    });
  }

  pool.query('INSERT INTO FYP_ACTIVITY(Activity_Type,Activity_By,Activity_Date,Proposal_ID) VALUES(?,?,?,?)',
  [status,"Coordinator",todayDate,proposalId],
  async (error, result,fields)=>{
  if(error){
    console.log(error);
    return  res.json({
      success:0,
      message:'database connection error',
    });    
  }

  console.log("here in fyp activity");
  res.json({
    success:1,
    message:"Proposal Submitted Successfully!",
    fyp_status:"Proposal Accepted by Coordinator",
  })

  

  });

  


  });

}


}


const getFypProposalBySupervisorId=(req,res)=>{
  const id=req.params.id;
console.log("id----->",id)


    pool.query(`SELECT * FROM FYP_PROPOSAL INNER JOIN FYP_ACTIVITY ON FYP_PROPOSAL.Proposal_ID=FYP_ACTIVITY.Proposal_ID WHERE FYP_PROPOSAL.Project_Status=FYP_ACTIVITY.ACTIVITY_TYPE  AND FYP_PROPOSAL.Teacher_ID=${id}`,
    [],
    async (error, result,fields)=>{
      console.log("res------->",result);

      if(error){
        console.log("error",error);
      return  res.json({
          success:0,
          message:'database connection error'
        });
      }
      console.log("res------->",result);

      if(result.length==0){
        return  res.json({
          success:1,
          data:result
            });
    
      }

      console.log("res------->",result);

      return  res.json({
        success:1,
        data:result
      });


    }
      );
}


const getFypProposalByCoOrdinatorId=(req,res)=>{

  console.log(req.body);
  console.log(req.params)
  const id=req.params.id;
  const statusAccepted='Proposal Accepted by Coordinator';
  const statusSubmitted='Proposal Submitted to Coordinator';

  pool.query('SELECT FYP_PROPOSAL.Proposal_ID,FYP_PROPOSAL.Project_Status,FYP_PROPOSAL.FYP_Name,FYP_PROPOSAL.Group_ID,FYP_PROPOSAL.Proposal,FYP_PROPOSAL.Thesis,FYP_Activity.Activity_Date FROM FET_FYP.FYP_PROPOSAL INNER JOIN FET_FYP.COORDINATOR ON FET_FYP.FYP_PROPOSAL.Coordinator_ID=FET_FYP.COORDINATOR.Coordinator_ID INNER JOIN FET_FYP.FYP_ACTIVITY ON FET_FYP.FYP_PROPOSAL.Proposal_ID=FET_FYP.FYP_ACTIVITY.Proposal_ID WHERE FYP_PROPOSAL.Project_Status=FYP_ACTIVITY.Activity_Type AND COORDINATOR.Teacher_ID=?',
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
          message:"No Co-ordinators Found!"
        });
  
    }
    return  res.json({
      success:1,
      data:result
    });

  }
    );



}

const getFypProposalIdByGroupId=(req,res)=>{
  const groupId=req.params.id;
  pool.query('SELECT * FROM FYP_PROPOSAL INNER JOIN TEACHER ON FYP_PROPOSAL.Teacher_ID=TEACHER.Teacher_ID WHERE FYP_ID=? ',
  [groupId],
  (error, result,fields)=>{
    if(error){
      console.log(error);
      return  res.json({
        success:0,
        message:'database connection error',
      });
    }

      return res.json({
        success:1,
        data:result
     }); 

  });
}

const postThesis=async (req,res)=>{

  console.log(req.body);
  console.log(req.file);
  console.log(req.params);
const proposalId=req.params.id;


if(req.file!=undefined) {
  thesisName=Date.now()+path.extname(req.file.originalname);
  const file=req.file;
  
      try{
  const result=await s3Uploadv2(thesisName,file);
  }
  catch(e){
 return  res.json({
      success:0,
      message:`Network Error`,
    });
	}
}


  pool.query('UPDATE FYP_PROPOSAL SET Thesis=? WHERE Proposal_ID=?',
[thesisName,proposalId],
  async (error, result,fields)=>{
  if(error){
    console.log(error);
    return  res.json({
      success:0,
      message:'database connection error',
    });
  }

  res.json({
    success:1,
    message:"Thesis Submitted Successfully!",
    thesisName:thesisName
  })



  });



}





  module.exports={getFypProposal,postFypProposal,getFypProposalById,testDocumentStorage,viewFypProposal,getFypProposalBySupervisorId,getFypProposalByCoOrdinatorId,getFypProposalIdByGroupId,postThesis,updateFypProposal,viewThesis};