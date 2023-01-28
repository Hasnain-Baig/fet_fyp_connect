const express = require('express');
const pool=require('../connection');
const session=require('express-session');
const jwt=require('jsonwebtoken');
const nodemailer=require('nodemailer');
const {genSaltSync,hashSync}=require('bcrypt');
const {JWT_SECRET,MY_MAIL,MY_MAIL_APP_PASSWORD}=require('../config/var');


const forgotPassword= async(req, res)   => {
    const email=req.body.email;

    pool.query('SELECT * FROM FYP_GROUP WHERE Primary_Email=?',
    [email],
        async (error, result,fields)=>{
          if(error){
            console.log("error",error);
          return res.json({
              success:0,
              message:'database connection error'
            });
          }
    

          if(result.length!=0){
            const secret=JWT_SECRET;
            const payload={
              role:"Fyp Group",
              email:result[0].Primary_Email,
              id:result[0].FYP_ID
            };

            const token=jwt.sign(payload,secret,{expiresIn:'30m'});
            const link=`http://localhost:4000/apis/auth/forgot-password/${token}`;
            const subject='FET FYP CONNECT(Forgot Password Link)';
            const successMsg=`Forgot Password link Successfully sent to email : ${email}`;
            console.log(link);
    
        
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
              to: email, // list of receivers
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
                      // message:`${err}`
                      message:"Network Error"
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
        else{

          pool.query('SELECT * FROM TEACHER WHERE Teacher_Email=?',
          [email],
              async (error, result,fields)=>{
                if(error){
                  console.log("error",error);
                return res.json({
                    success:0,
                    message:'database connection error'
                  });
                }
          
                if(result.length!=0){
              

                  const secret=JWT_SECRET;
                  const payload={
                    role:"Teacher",
                    email:result[0].Teacher_Email,
                    id:result[0].Teacher_ID
                  };      
        
                  const token=jwt.sign(payload,secret,{expiresIn:'30m'});
                  const link=`http://localhost:4000/apis/auth/forgot-password/${token}`;
                  const subject='FET FYP CONNECT(Forgot Password Link)';
                  const successMsg=`Forgot Password link Successfully sent to email : ${email}`;
                  console.log(link);
            
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
                    to: email, // list of receivers
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
                            message:"Network Error"
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
              
              else{
                  return res.json({
                      success:0,
                      message:'No user with this Email!'
                    });
              }
              
            });
      
        }
        
      });
    
}

const resetPassword=async(req,res)=>{


  const token=req.params.token;


  const decodedToken=JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());    
  console.log(decodedToken);
  const id=decodedToken.id;
  const role=decodedToken.role;
  decodedToken.token=req.params.token;

  // res.json({
  //   success:1,
  //   data:decodedToken
  // })

res.render('update_password',
{
    success:1,
  data:decodedToken
}
);


}

const updateNewPassword=(req,res)=>{
  // console.log("=================");
  // console.log(req.body);
  // console("-------------------");
  // console.log(req.params);
    
  const token=req.params.token;
  // console.log(token);

  const decodedToken=JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());    
  const id=decodedToken.id;
  // console(decodedToken.id);
  const role=decodedToken.role;

//   console(role);

  const password=req.body.password;
  const salt=genSaltSync(10);
  const encPassword=hashSync(password,salt);

//   console(encPassword);

  if(role=="Teacher"){
    pool.query('UPDATE TEACHER SET Password=? WHERE Teacher_ID=?',
      [encPassword,id],
      (error,result,field)=>{
        if(error){
          console.log("error",error);
        return  res.json({
            success:0,
            message:'database connection error'
          });
        }
if(result['affectedRows']==0){
 return res.json({
    success:0,
    message:"No Record Found",
  });
}
return res.json({
  success:1,
  message:"Pasword Updated Successfully!",
});

});
  
  }
  else if(role=="Fyp Group"){
    pool.query('UPDATE FYP_GROUP SET Password=? WHERE FYP_ID=?',
    [encPassword,id],
    (error,result,field)=>{
      if(error){
        console.log("error",error);
      return  res.json({
          success:0,
          message:'database connection error'
        });
      }
      if(result['affectedRows']==0){
        return res.json({
           success:0,
           message:"No Record Found",
         });
       }
       return res.json({
         success:1,
         message:"Pasword Updated Successfully!",
       });
           });

  }

  else{
    return res.json({
      success:0,
      message:"undefined!"    
    });
    
  }

  
}



  module.exports={forgotPassword,resetPassword,updateNewPassword};