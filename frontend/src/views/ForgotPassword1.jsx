import React from 'react';
import {useState} from 'react';
import ForgotPasswordImg from '../images/forget_password.png';
import axios, { formToJSON } from 'axios';
import { json } from 'react-router-dom';
import HomeNavbar from '../components/Home_Navbar'

export default function ForgotPassword1() {
const [email, setEmail] = useState('')
const [errorObj, setErrorObj] = useState({success:1,message:''});
const submitPasswordUpdateLink=()=>{
console.log(email)

if(email==""){
  setErrorObj({success:0,message:"Email Field is empty!"});
}else{
  axios.post(`http://localhost:4000/apis/auth/forgot-password`,
{email:email}
)
.then((res)=>{  
console.log("----------->",res);
setErrorObj({success:res.data.success,message:res.data.message});
})
.catch((e)=>{
setErrorObj({success:0,message:e});

})
}


}

  return (
    <>
    <HomeNavbar/>
    <div className=" loginBackgorund d-flex container-fluid position-relative " id="student_login">
    <div className=" container  " >
      <div
        className="form container d-flex flex-column   
        my-3 rounded-5  col-lg-6 col-md-8 col-sm-12"
        id="forgotPassword1_form"
      >
         <div className="row p-3 " >
            <div className="col-lg-2 text-white "></div>
            <div className="col-lg-8 col-md-12 col-sm-12  ">
            <div className="d-flex  justify-content-center">
          <img src={ForgotPasswordImg} alt="img" height="40%" width="50%" />
        </div>
          <h3 className="text-white my-3 text-center ">FORGOT PASSWORD?</h3>
          <p className='text-white text-center'>Provide your account's email to reset your password</p>
         
         
          <div id="form" className=" ">

          <div className="my-3 ">
          <label htmlFor="exampleFormControlInput1" className="form-label text-white">
            Email address
          </label>
          <input
          onChange={(e)=>{setEmail(e.target.value)}}
            type="email"
            value={email}
            className="form-control form-control-lg rounded-4"
            id="exampleFormControlInput1"
            placeholder="Enter Email" 
          />
        </div>

        <div>
           {errorObj.success==1?
                  <p className='text-success text-center'>{errorObj.message}</p>
           :
           <p className='text-danger text-center'>{errorObj.message}</p>
          }</div>


        <div className="mt-3">
          <button className="btn btn-success btn-lg btn-block w-100 rounded-4" onClick={submitPasswordUpdateLink} type='button'>SEND </button>
        </div>

          </div >
          
           
          </div>
          <div className="col-lg-2 "></div>
          </div>
        
       
      </div>
    </div>
  </div>
  </>)
}
