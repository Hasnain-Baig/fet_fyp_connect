import React from 'react'
import { useState,useEffect } from 'react';
import RegImg from '../images/group-registration-icon.png';
import axios from 'axios';
import HomeNavbar from '../components/Home_Navbar'


export default function Registration() {

  // const api=axios.create({
  //   baseUrl:`http://localhost:4000/apis/`,
  // });



  const [dept, setDept] = useState('');
  const [numOfMembers, setNumOfMembers] = useState(3);
  const [std1, setStd1] = useState({});
  const [std2, setStd2] = useState({});
  const [std3, setStd3] = useState({});
  const [std4, setStd4] = useState({});
  const [groupEmail, setgroupEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  // const [error, setError] = useState('');
  const [errorObj, setErrorObj] = useState({success:1,message:'',});
  // const [errorObj, setErrorObj] = useState({});


const signup=async ()=>{
if(numOfMembers==0){
  setErrorObj({success:0,message:'Select Number Of Members'});
}
else if(numOfMembers==1){
  if(dept=="" ||std1.rollNo==""||std1.name==""||std1.email==""||groupEmail==""||password==""||confPassword==""){
    setErrorObj({success:0,message:'Kindly Fill All the Fields!'});
    console.log(dept); 
    console.log(numOfMembers); 
    console.log(std1); 
    console.log(std2); 
    console.log(std3); 
    console.log(std4); 
    console.log(groupEmail); 
    console.log(password); 
    console.log(confPassword); 
   
  }
  else if(confPassword!=password){
    setErrorObj({success:0,message:'Password and Confirm Password are not same!'});
  }else{
    setErrorObj({success:1,message:''});

    console.log(dept); 
    console.log(numOfMembers); 
    console.log(std1); 
    console.log(std2); 
    console.log(std3); 
    console.log(std4); 
    console.log(groupEmail); 
    console.log(password); 
    console.log(confPassword); 
   
    console.log("1 name---------->",std1.name);

    axios.post(`/auth/signup`,{
      dept:dept,
      groupMembers:numOfMembers,
      groupEmail:groupEmail,
      password:password,
      confPassword:confPassword,
      std1RollNo:std1.rollNo,
      std1Name:std1.name,
      std1Email:std1.email

    },).then((res)=>{
      setErrorObj({success:1,message:''});
  
      if(res.data.success==1){
        setStd1({});
        setStd2({});
        setStd3({});
        setStd4({});
        setgroupEmail('');
        setPassword('');
        setConfPassword('');
      }
      setErrorObj({success:res.data.success,message:res.data.message});

      }).catch((err)=>{
        setErrorObj({success:0,message:err});
      })
    
  }
  }
  else if(numOfMembers==2){
    if(dept=="" ||std1.rollNo==""||std1.name==""||std1.email==""||std2.rollNo==""||std2.name==""||std2.email==""||groupEmail==""||password==""||confPassword==""){
  setErrorObj({success:0,message:'Kindly Fill All the Fields!'});
}
    else if(confPassword!=password){
      setErrorObj({success:0,message:'Password and Confirm Password are not same!'});
        }
    else{
      setErrorObj({success:1,message:''});
  

      axios.post(`/auth/signup`,{
        dept:dept,
        groupMembers:numOfMembers,
        groupEmail:groupEmail,
        password:password,
        confPassword:confPassword,
        std1RollNo:std1.rollNo,
        std1Name:std1.name,
        std1Email:std1.email,
        std2RollNo:std2.rollNo,
        std2Name:std2.name,
        std2Email:std2.email
  
      },).then((res)=>{
        console.log(res.data);
        setErrorObj({success:1,message:res.data.message});
        if(res.data.success==1){
          setDept('');
          setStd1({});
          setStd2({});
          setStd3({});
          setStd4({});
          setgroupEmail('');
          setPassword('');
          setConfPassword('');
        }
        setErrorObj({success:res.data.success,message:res.data.message});
  

        }).catch((err)=>{
          setErrorObj({success:0,message:err});
          })
      
      
    }
    
    }
    else if(numOfMembers==3){
      if(dept=="" ||std1.rollNo==""||std1.name==""||std1.email==""||std2.rollNo==""||std2.name==""||std2.email==""||std3.rollNo==""||std3.name==""||std3.email==""||groupEmail==""||password==""||confPassword==""){
        setErrorObj({success:0,message:'Kindly Fill All the Fields!'});
    }
      else if(confPassword!=password){
        setErrorObj({success:0,message:'Password and Confirm Password are not same!'});
      }
      else{
        setErrorObj({success:1,message:''});
    
        axios.post(`/auth/signup`,{
          dept:dept,
          groupMembers:numOfMembers,
          groupEmail:groupEmail,
          password:password,
          confPassword:confPassword,
          std1RollNo:std1.rollNo,
          std1Name:std1.name,
          std1Email:std1.email,
          std2RollNo:std2.rollNo,
          std2Name:std2.name,
          std2Email:std2.email,
          std3RollNo:std3.rollNo,
          std3Name:std3.name,
          std3Email:std3.email
    
        },).then((res)=>{
          console.log(res.data);
          setErrorObj({success:1,message:res.data.message});
            if(res.data.success==1){
            setDept('');
            setStd1({});
            setStd2({});
            setStd3({});
            setStd4({});
            setgroupEmail('');
            setPassword('');
            setConfPassword('');
          }
          setErrorObj({success:res.data.success,message:res.data.message});
    
       
        }).catch((err)=>{
          setErrorObj({success:0,message:err});
            })
        
      }
  
      }
      else if(numOfMembers==4){
        if(dept=="" ||std1.rollNo==""||std1.name==""||std1.email==""||std2.rollNo==""||std2.name==""||std2.email==""||std3.rollNo==""||std3.name==""||std3.email==""||std4.rollNo==""||std4.name==""||std4.email==""||groupEmail==""||password==""||confPassword==""){
          setErrorObj({success:0,message:'Kindly Fill All the Fields!'});
     }
        else if(confPassword!=password){
          setErrorObj({success:0,message:'Password and Confirm Password are not same!'});
          }      else{
            setErrorObj({success:1,message:''});
          
          axios.post(`/auth/signup`,{
            dept:dept,
            groupMembers:numOfMembers,
            groupEmail:groupEmail,
            password:password,
            confPassword:confPassword,
            std1RollNo:std1.rollNo,
            std1Name:std1.name,
            std1Email:std1.email,
            std2RollNo:std2.rollNo,
            std2Name:std2.name,
            std2Email:std2.email,
            std3RollNo:std3.rollNo,
            std3Name:std3.name,
            std3Email:std3.email,
            std4RollNo:std4.rollNo,
            std4Name:std4.name,
            std4Email:std4.email
      
          },).then((res)=>{
            console.log(res.data);
            setErrorObj({success:1,message:res.data.message});
                if(res.data.success==1){
              setDept('');
              setStd1({});
              setStd2({});
              setStd3({});
              setStd4({});
              setgroupEmail('');
              setPassword('');
              setConfPassword('');
            }
            setErrorObj({success:res.data.success,message:res.data.message});
      
            }).catch((err)=>{
              setErrorObj({success:0,message:err});
                  })
          
        }
  
        }
                      // if(dept=="" || numOfMembers==0 ||std1.rollNo==""||std1.name==""||std1.email==""||std2.rollNo==""||std2.name==""||std2.email==""||std1.rollNo==""||std1.name==""||std1.email==""||){

// }




}



  return (

    <>
<HomeNavbar/>
    <div className=" RegBackgorund container-fluid position-relative" >
    <div className=" container d-flex  justify-content-center ">
      <div
        className="registrationForm container d-flex flex-column justify-content-center 
        my-4 rounded-5 col-lg-9 col-sm-12"
        id="registration_form"
      >
        
        <div className="row  " >
          <div className="col-lg-1 text-white "></div>
          <div className="col-lg-10  ">
          <div className="d-flex  justify-content-center">
          <img src={RegImg} alt="img" width="30%" height="30%" />
          </div>
        <h1 className="text-white mb-3 mt-3 text-center ">REGISTRATION</h1>
        
        <form action="/">
       
       <div className="row text-white ">

        <div className="col-lg-2 ">
        
          <font>Department: </font>&nbsp;&nbsp;
        </div>

        <div className="col-lg-10 departments d-flex ">
        <div>
                 
                 <input className="form-check-input" value='Software Engineering' onChange={(e)=>{setDept(e.target.value)}} type="radio" name="department" id="SOFTWARE"/>
                 <label className="form-check-label ps-2 pe-4" htmlFor="SOFTWARE">
                  SOFTWARE 
                 </label>
                 </div>
                 <div>
                 
                 <input className="form-check-input" value='Electronics' onChange={(e)=>{setDept(e.target.value)}} type="radio" name="department" id="ELECTRONICS"/>
                 <label className="form-check-label ps-2 pe-4" htmlFor="ELECTRONICS">
                  ELECTRONICS 
                 </label>
                 </div>
                            <div>
      <input className="form-check-input" value='Information Technology' onChange={(e)=>{setDept(e.target.value)}} type="radio" name="department" id="IT"/>
      <label className="form-check-label ps-2 pe-4" htmlFor="IT">
       IT
      </label>
     
      <input className="form-check-input telecomMargin " value='Telecom' onChange={(e)=>{setDept(e.target.value)}} type="radio" name="department" id="TELECOM"/>
      <label className="form-check-label ps-2" htmlFor="TELECOM">
       TELECOM
      </label>
      </div>
        </div>

       </div>

       <div className="row text-white my-2">
        <div className="col-lg-4 col-md-6">
        <select onChange={(e)=>{setNumOfMembers(e.target.value)}}  className="form-select form-select-sm my-2 rounded-4" aria-label="Default select example" >
        <option value=''>Select No of Group Members</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option selected value="3">3</option>

        <option style={{display:dept=='Electronics'?'block':'none'}} value="4">4</option>
     </select>
        </div>
       </div>

  

<div className="row text-white"  >
         <div className="col-lg-4" style={{  display: numOfMembers==1 || numOfMembers==2 || numOfMembers==3 || numOfMembers==4 ? 'block' :'none' }}>
         <h5 className='text-white'>Member 1</h5>
         </div>
       </div>

       <div className="row" style={{  display: numOfMembers==1 || numOfMembers==2 || numOfMembers==3 || numOfMembers==4 ? 'revert-layer' :'none' }}>
        <div className="col-lg-4 col-md-6">
        
          <label htmlFor="exampleFormControlInput1" className="form-label text-white">
            Roll No <span style={{'opacity':'.2'}}>(2kxx-dept-123)</span>
          </label>
          <input
          onChange={(e)=>{setStd1({rollNo:e.target.value,name:std1.name,email:std1.email})}}
            type="text"
            className="form-control  rounded-4"
            id="exampleFormControlInput1"
            placeholder="Enter Roll No " 
          />
        </div>
        <div className="col-lg-4 col-md-6">
        <label htmlFor="exampleFormControlInput1" className="form-label text-white">
            Name
          </label>
          <input
          onChange={(e)=>{setStd1({rollNo:std1.rollNo,name:e.target.value,email:std1.email})}}
          type="text"
            className="form-control  rounded-4"
            id="exampleFormControlInput1"
            placeholder="Enter Name" 
          />
        </div>
        <div className="col-lg-4 col-md-6" >
        <label htmlFor="exampleFormControlInput1" className="form-label text-white">
            Email
          </label>
          <input
          onChange={(e)=>{setStd1({rollNo:std1.rollNo,name:std1.name,email:e.target.value})}}
          type="email"
            className="form-control  rounded-4"
            id="exampleFormControlInput1"
            placeholder="Enter Email" 
          />
        </div>
       </div>

       <div className="row text-white mt-3" >
         <div className="col-lg-4" style={{  display: numOfMembers==2 || numOfMembers==3 || numOfMembers==4 ? 'block' :'none' }}>
         <h5 className='text-white'>Member 2</h5>
         </div>
       </div>

       <div className="row" style={{display: numOfMembers==2 || numOfMembers==3 || numOfMembers==4 ? 'revert-layer' :'none' }}>
        <div className="col-lg-4 col-md-6">
        
          <label htmlFor="exampleFormControlInput1" className="form-label text-white">
            Roll No
            <span style={{'opacity':'.2'}}>(2kxx-dept-123)</span>
          </label>
          <input
                  onChange={(e)=>{setStd2({rollNo:e.target.value,name:std2.name,email:std2.email})}}
                  type="text"
            className="form-control  rounded-4"
            id="exampleFormControlInput1"
            placeholder="Enter Roll No" 
          />
        </div>
        <div className="col-lg-4 col-md-6">
        <label htmlFor="exampleFormControlInput1" className="form-label text-white">
            Name
          </label>
          <input
                            onChange={(e)=>{setStd2({rollNo:std2.rollNo,name:e.target.value,email:std2.email})}}

            type="text"
            className="form-control  rounded-4"
            id="exampleFormControlInput1"
            placeholder="Enter Name" 
          />
        </div>
        <div className="col-lg-4 col-md-6">
        <label htmlFor="exampleFormControlInput1" className="form-label text-white">
            Email
          </label>
          <input
                            onChange={(e)=>{setStd2({rollNo:std2.rollNo,name:std2.name,email:e.target.value})}}
            type="email"
            className="form-control  rounded-4"
            id="exampleFormControlInput1"
            placeholder="Enter Email" 
          />
        </div>
       </div>

       <div className="row text-white mt-3">
         <div className="col-lg-4" style={{display:  numOfMembers==3 || numOfMembers==4 ? 'block' :'none' }}>
         <h5 className='text-white'>Member 3</h5>
         </div>
       </div>

       <div className="row" style={{display: numOfMembers==3 || numOfMembers==4 ? 'revert-layer' :'none' }}>
        <div className="col-lg-4 col-md-6">
        
          <label htmlFor="exampleFormControlInput1" className="form-label text-white">
            Roll No
            <span style={{'opacity':'.2'}}>(2kxx-dept-123)</span>
          </label>
          <input
                                      onChange={(e)=>{setStd3({rollNo:e.target.value,name:std3.name,email:std3.email})}}
            type="text"
            className="form-control  rounded-4"
            id="exampleFormControlInput1"
            placeholder="Enter Roll No" 
          />
        </div>
        <div className="col-lg-4 col-md-6">
        <label htmlFor="exampleFormControlInput1" className="form-label text-white">
            Name
          </label>
          <input
                                      onChange={(e)=>{setStd3({rollNo:std3.rollNo,name:e.target.value,email:std3.email})}}
                                      type="text"
            className="form-control  rounded-4"
            id="exampleFormControlInput1"
            placeholder="Enter Name" 
          />
        </div>
        <div className="col-lg-4 col-md-6">
        <label htmlFor="exampleFormControlInput1" className="form-label text-white">
            Email
          </label>
          <input
                                      onChange={(e)=>{setStd3({rollNo:std3.rollNo,name:std3.name,email:e.target.value})}}
                                      type="email"
            className="form-control  rounded-4"
            id="exampleFormControlInput1"
            placeholder="Enter Email" 
          />
        </div>
       </div>

       <div className="row text-white mt-3">
         <div className="col-lg-4" style={{display:  numOfMembers==4 ? 'block' :'none' }}>
         <h5 className='text-white'>Member 4</h5>
         </div>
       </div>

       <div className="row" style={{display: numOfMembers==4 ? 'revert-layer' :'none' }}>
        <div className="col-lg-4 col-md-6">
        
          <label htmlFor="exampleFormControlInput1" className="form-label text-white">
            Roll No
            <span style={{'opacity':'.2'}}>(2kxx-dept-123)</span>
          </label>
          <input
                                      onChange={(e)=>{setStd4({rollNo:e.target.value,name:std4.name,email:std4.email})}}
                                      type="text"
            className="form-control  rounded-4"
            id="exampleFormControlInput1"
            placeholder="Enter Roll No" 
          />
        </div>
        <div className="col-lg-4 col-md-6">
        <label htmlFor="exampleFormControlInput1" className="form-label text-white">
            Name
          </label>
          <input
                                      onChange={(e)=>{setStd4({rollNo:std4.rollNo,name:e.target.value,email:std4.email})}}
                                      type="text"
            className="form-control  rounded-4"
            id="exampleFormControlInput1"
            placeholder="Enter Name" 
          />
        </div>
        <div className="col-lg-4 col-md-6">
        <label htmlFor="exampleFormControlInput1" className="form-label text-white">
            Email
          </label>
          <input
                                      onChange={(e)=>{setStd4({rollNo:std4.rollNo,name:std4.name,email:e.target.value})}}
                                      type="email"
            className="form-control  rounded-4"
            id="exampleFormControlInput1"
            placeholder="Enter Email" 
          />
        </div>
       </div>

       <div className="row text-white my-2" style={{  display: numOfMembers==1 || numOfMembers==2 || numOfMembers==3 || numOfMembers==4 ? 'revert-layer' :'none' }}>
        <div className="col-lg-4 col-md-6">
        <label htmlFor="exampleFormControlInput1" className="form-label text-white">
            Group Email
          </label>
          <input
                                      onChange={(e)=>{setgroupEmail(e.target.value)}}
                                      type="email"
            className="form-control  rounded-4"
            id="exampleFormControlInput1"
            placeholder="Enter Group Email" 
          />
        </div>
       </div>

       <div className="row text-white my-2" style={{  display: numOfMembers==1 || numOfMembers==2 || numOfMembers==3 || numOfMembers==4 ? 'revert-layer' :'none' }}>
        <div className="col-lg-4 col-md-6">
        <label htmlFor="exampleFormControlInput1" className="form-label text-white">
            Password
          </label>
          <input
                                                onChange={(e)=>{setPassword(e.target.value)}}

            type="password"
            className="form-control  rounded-4"
            id="exampleFormControlInput1"
            placeholder="Enter Password" 
          />
        </div>
        <div className="col-lg-4 col-md-6">
        <label htmlFor="exampleFormControlInput1" className="form-label text-white">
          Confirm Password
          </label>
          <input
                                                onChange={(e)=>{setConfPassword(e.target.value)}}

            type="password"
            className="form-control  rounded-4"
            id="exampleFormControlInput1"
            placeholder="Confirm Password" 
          />
        </div>
       </div>

       <div className="row my-2 bt-5" style={{  display: numOfMembers==1 || numOfMembers==2 || numOfMembers==3 || numOfMembers==4 ? 'revert-layer' :'none' }}>
       {errorObj.success==1?
       <p className='text-success text-center'>{errorObj.message}</p>
:
<p className='text-danger text-center'>{errorObj.message}</p>}
       
        </div>

       <div className="row text-white my-2" style={{  display: numOfMembers==1 || numOfMembers==2 || numOfMembers==3 || numOfMembers==4 ? 'revert-layer' :'none' }}>
        <div className="col-lg-4">
        </div>
        <div className="col-lg-4">
        </div>
        <div className="col-lg-4 d-flex justify-content-end">
        <button type="button" onClick={signup} className="btn btn-success py-2 px-4 my-4 rounded-4" to="#" role="button">Register</button>
        </div>
       </div>


        </form>
        
         
        </div>
        <div className="col-lg-1 "></div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}
