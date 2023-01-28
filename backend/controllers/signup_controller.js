const express = require('express');
const pool=require('../connection');
const {genSaltSync,hashSync}=require('bcrypt');
const jwt=require('jsonwebtoken');
const nodemailer=require('nodemailer');
const {JWT_SECRET, MY_MAIL, MY_MAIL_APP_PASSWORD}=require('../config/var');
const {sendMail}=require('../config/send_mail');


const signup=async (req, res) => {

    const dept=req.body.dept;
    const groupMembers=req.body.groupMembers;

    const groupEmail=req.body.groupEmail;
    const password=req.body.password;
    const confpassword=req.body.confPassword;

    console.log(password);
    console.log(confpassword);

if(password==confpassword){
  const salt=genSaltSync(10);
  const encPassword=hashSync(password,salt);
console.log(encPassword);

const secret=JWT_SECRET;

  if(groupMembers==1){
    const std1RollNo=req.body.std1RollNo;

    const payload={
      dept:dept,
      groupMembers:groupMembers,
      std1RollNo:std1RollNo,
      groupEmail:groupEmail,
      encPassword:encPassword,    
    };
   
    
    const token=jwt.sign(payload,secret,{expiresIn:'30m'});
    const link=`http://localhost:4000/apis/auth/registration-link/${token}`;
    const subject='FET FYP CONNECT(Fyp Group Registration Link)';
    const successMsg=`Fyp Group Registration link Successfully sent to email : ${groupEmail}`;
    console.log(link);


try{
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
      text: link, // plain text body
    };
    
    // send mail with defined transport object
    let info = await transporter.sendMail(msg,
      (err, data)=> {
        if(err) {
            console.log('Error Occurs',err);
            return res.json({
              success:0,
              message:`${err}`
            });

          } else {
            console.log('Email sent successfully');
            return res.json({
              success:1,
              message:successMsg
            });

          }
    }
      );

}
  	  catch(e){
		 		  return  res.json({
      success:0,
      message:`Network Error`,
    });

		 }			  

      
 }else if(groupMembers==2){
    const std1RollNo=req.body.std1RollNo;
    const std2RollNo=req.body.std2RollNo;

    const payload={
      dept:dept,
      groupMembers:groupMembers,
      std1RollNo:std1RollNo,
      std2RollNo:std2RollNo,
      groupEmail:groupEmail,
      encPassword:encPassword,    
    };
   
    
    
    const token=jwt.sign(payload,secret,{expiresIn:'30m'});
    const link=`http://localhost:4000/apis/auth/registration-link/${token}`;
    const subject='FET FYP CONNECT(Fyp Group Registration Link)';
    const successMsg=`Fyp Group Registration link Successfully sent to email : ${groupEmail}`;
    console.log(link);


try{
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
      text: link, // plain text body
    };
    
    // send mail with defined transport object
    let info = await transporter.sendMail(msg,
      (err, data)=> {
        if(err) {
            console.log('Error Occurs',err);
            return res.json({
              success:0,
              message:`${err}`
            });

          } else {
            console.log('Email sent successfully');
            return res.json({
              success:1,
              message:successMsg
            });

          }
    }
      );


}    	  catch(e){
		 		  return  res.json({
      success:0,
      message:`Network Error`,
    });

		 }			  
  


  }else if(groupMembers==3){
    const std1RollNo=req.body.std1RollNo;
    const std2RollNo=req.body.std2RollNo;
    const std3RollNo=req.body.std3RollNo;

    const payload={
      dept:dept,
      groupMembers:groupMembers,
      std1RollNo:std1RollNo,
      std2RollNo:std2RollNo,
      std3RollNo:std3RollNo,
      groupEmail:groupEmail,
      encPassword:encPassword,    
    };
   
    
    
    const token=jwt.sign(payload,secret,{expiresIn:'30m'});
    const link=`http://localhost:4000/apis/auth/registration-link/${token}`;
    const subject='FET FYP CONNECT(Fyp Group Registration Link)';
    const successMsg=`Fyp Group Registration link Successfully sent to email : ${groupEmail}`;
    console.log(link);


  try{
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
      text: link, // plain text body
    };
    
    // send mail with defined transport object
    let info = await transporter.sendMail(msg,
      (err, data)=> {
        if(err) {
            console.log('Error Occurs',err);
            return res.json({
              success:0,
              message:`${err}`
            });

          } else {
            console.log('Email sent successfully');
            return res.json({
              success:1,
              message:successMsg
            });

          }
    }
      );

  }
   	  catch(e){
		 		  return  res.json({
      success:0,
      message:`Network Error`,
    });

		 }			  
  
        
  }else if(groupMembers==4){
    
    const std1RollNo=req.body.std1RollNo;
    const std2RollNo=req.body.std2RollNo;
    const std3RollNo=req.body.std3RollNo;
    const std4RollNo=req.body.std4RollNo;

    const payload={
      dept:dept,
      groupMembers:groupMembers,
      std1RollNo:std1RollNo,
      std2RollNo:std2RollNo,
      std3RollNo:std3RollNo,
      std4RollNo:std4RollNo,
      groupEmail:groupEmail,
      encPassword:encPassword,    
    };
   
    
    
    const token=jwt.sign(payload,secret,{expiresIn:'30m'});
    const link=`http://localhost:4000/apis/auth/registration-link/${token}`;
    const subject='FET FYP CONNECT(Fyp Group Registration Link)';
    const successMsg=`Fyp Group Registration link Successfully sent to email : ${groupEmail}`;
    console.log(link);



try{
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
      text: link, // plain text body
    };
    
    // send mail with defined transport object
    let info = await transporter.sendMail(msg,
      (err, data)=> {
        if(err) {
            console.log('Error Occurs',err);
            return res.json({
              success:0,
              message:`${err}`
            });

          } else {
            console.log('Email sent successfully');
            return res.json({
              success:1,
              message:successMsg
            });

          }
    }
      );

}
	  catch(e){
		 		  return  res.json({
      success:0,
      message:`Network Error`,
    });

		 }			  
    

  }

}else{
        return res.json({
          success:0,
          message:"Password and Confirm Passwords are Different"
        });
      }
  
    }


    const registrationLink=(req,res)=>{

      

      const token=req.params.token;
    
      const decodedToken=JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());    

      const groupMembers=decodedToken.groupMembers;
      const dept=decodedToken.dept;
      const groupEmail=decodedToken.groupEmail;
      const encPassword=decodedToken.encPassword;

    

if(groupMembers==1){
  const std1RollNo=decodedToken.std1RollNo;

  pool.query('INSERT INTO FYP_GROUP(Dept_Name,Primary_Email,Student_ID1,Password) VALUES(?,?,?,?)',
  [dept,groupEmail,std1RollNo,encPassword],
  async (error, result,fields)=>{
  if(error){
    return  res.json({
      success:0,
      message:'database connection error',
      error:error
    });
  }
  
res.render('signup_message',{
    success:1,
  message:"Group Registered Successfully!",
})


  });
  
}
else if(groupMembers==2){

  const std1RollNo=decodedToken.std1RollNo;
  const std2RollNo=decodedToken.std2RollNo;

  pool.query('INSERT INTO FYP_GROUP(Dept_Name,Primary_Email,Student_ID1,Student_ID2,Password) VALUES(?,?,?,?,?)',
  [dept,groupEmail,std1RollNo,std2RollNo,encPassword],
  async (error, result,fields)=>{
  if(error){
    return  res.json({
      success:0,
      message:'database connection error',
    });
  }
  
  res.render('signup_success',{
    success:1,
  message:"Group Registered Successfully!",
})
  
  
  });


}else if(groupMembers==3){

  
  const std1RollNo=decodedToken.std1RollNo;
  const std2RollNo=decodedToken.std2RollNo;
  const std3RollNo=decodedToken.std3RollNo;

  pool.query('INSERT INTO FYP_GROUP(Dept_Name,Primary_Email,Student_ID1,Student_ID2,Student_ID3,Password) VALUES(?,?,?,?,?,?)',
  [dept,groupEmail,std1RollNo,std2RollNo,std3RollNo,encPassword],
  async (error, result,fields)=>{
  if(error){
    return  res.json({
      success:0,
      message:'database connection error',
    });
  }
  
  res.render('signup_success',{
    success:1,
  message:"Group Registered Successfully!",
})

  
  });



}else if(groupMembers==4){

  const std1RollNo=decodedToken.std1RollNo;
  const std2RollNo=decodedToken.std2RollNo;
  const std3RollNo=decodedToken.std3RollNo;
  const std4RollNo=decodedToken.std4RollNo;

  pool.query('INSERT INTO FYP_GROUP(Dept_Name,Primary_Email,Student_ID1,Student_ID2,Student_ID3,Student_ID4,Password) VALUES(?,?,?,?,?,?,?)',
  [dept,groupEmail,std1RollNo,std2RollNo,std3RollNo,std4RollNo,encPassword],
  async (error, result,fields)=>{
  if(error){
    return  res.json({
      success:0,
      message:'database connection error',
    });
  }
  
  res.render('signup_success',{
    success:1,
  message:"Group Registered Successfully!",
})
  
  
  });


}



    }

    module.exports={signup,registrationLink};