import React from "react";
import LoginImg from '../images/login_icons.png';
import { useState} from "react";
import {Link} from 'react-router-dom';
import {useNavigate} from "react-router-dom"
import axios from "axios";
import HomeNavbar from '../components/Home_Navbar'


export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorObj, setErrorObj] = useState({success:1,message:'',});


const login=()=>{
  if(email==""|| password==""){
setErrorObj({success:0,message:"Email or Password field is empty!"});
  }else{
    setErrorObj({success:1,message:""});

console.log(`${email} ${password}`);
axios.post(`http://localhost:4000/apis/auth/login`,
{email:email,password:password},
).then((res)=>{
  console.log(res.data);
  setErrorObj({success:res.data.success,message:res.data.message});
  if(res.data.success==1){
    setEmail('');
    setPassword('');

    if(res.data.role=='teacher'){

      sessionStorage.setItem('userRole',res.data.role);
      sessionStorage.setItem('teacherId',res.data.data.Teacher_ID);
      sessionStorage.setItem('teacherName',res.data.data.Teacher_FName+" "+res.data.data.Teacher_LName);
      sessionStorage.setItem('teacherEmail',res.data.data.Teacher_FName+res.data.data.Teacher_Email);
 
      navigate('/Teacher/FypIdeas',{state:{role:sessionStorage.getItem('userRole')}});
      window.location.reload(false);
    }else{  

      var stdIdsArr=[res.data.data.Student_ID1,res.data.data.Student_ID2,res.data.data.Student_ID3,res.data.data.Student_ID4];
   console.log(stdIdsArr);
      var stdNamesArr=[];

      axios.get('http://localhost:4000/apis/student/')
      .then((data)=>{

        for(var i=0;i<stdIdsArr.length;i++){
          data.data.data.map((stdData)=>{
            if(stdIdsArr[i]!==null){
              console.log(`${stdIdsArr[i]}=====${stdData.Student_ID}`)
              if(stdIdsArr[i].toString().toUpperCase()==stdData.Student_ID.toString().toUpperCase()){
                stdNamesArr.push(stdData.Student_Name);
              }
            }
          })  
        }

        console.log(stdNamesArr);

        sessionStorage.setItem('userRole',res.data.role);
        sessionStorage.setItem('groupId',res.data.data.FYP_ID);
        sessionStorage.setItem('numOfMembers',stdNamesArr.length);
        sessionStorage.setItem('std1Id',res.data.data.Student_ID1);
        sessionStorage.setItem('std2Id',res.data.data.Student_ID2);
        sessionStorage.setItem('std3Id',res.data.data.Student_ID3);
        sessionStorage.setItem('std4Id',res.data.data.Student_ID4);
        sessionStorage.setItem('std1Name',stdNamesArr[0]);
        sessionStorage.setItem('std2Name',stdNamesArr[1]);
        sessionStorage.setItem('std3Name',stdNamesArr[2]);
        sessionStorage.setItem('std4Name',stdNamesArr[3]);
        sessionStorage.setItem('dept',res.data.data.Dept_Name);
        sessionStorage.setItem('groupEmail',res.data.data.Primary_Email);
        console.log(sessionStorage);


      navigate('/FypGroup/FYPIdeas',{state:{role:sessionStorage.getItem('userRole')}});
      window.location.reload(false);
      })
      .catch((err)=>{
        setErrorObj({success:0,message:err});
      })
      

    }
 
  

  }


 

  }).catch((err)=>{
    setErrorObj({success:0,message:err});
  })
}

}

  return (

    <>
<HomeNavbar/>
    <div className=" loginBackgorund container-fluid position-relative d-flex  " id="student_login">
      <div className=" container    ">
        <div
          className="form container d-flex flex-column 
          my-3 rounded-5 col-lg-6 col-md-8 col-sm-12"
          id="login_form">

  
          <div className="row p-3 " >
            <div className="col-lg-2 text-white "></div>
            <div className="col-lg-8  ">
            <div className="d-flex  justify-content-center">
          <img src={LoginImg} alt="img" height="40%" width="40%" />
        </div>
          <h1 className="text-white my-3 text-center ">LOGIN</h1>
          
          <form>
         
         
          <div id="form" className=" w-100">
          <div className="my-3 ">
            <label htmlFor="exampleFormControlInput1" className="form-label text-white">
              Email address
            </label>
            <input
            onChange={(e)=>{setEmail(e.target.value)}}
              type="email"
              value={email}
              className="form-control  rounded-4"
              id="exampleFormControlInput1"
              placeholder="Enter Email"             />
          </div>

          <div className="my-3 ">
            <label htmlFor="exampleFormControlInput1" className="form-label text-white">
              Password
            </label>
            <input
                        onChange={(e)=>{setPassword(e.target.value)}}
              type="password"
              value={password}

              className="form-control  rounded-4"
              id="exampleFormControlInput1"
              placeholder="Enter password" 
            />
            
          </div>          
           <div>
           {errorObj.success==1?
                  <p className='text-success text-center'>{errorObj.message}</p>
           :
           <p className='text-danger text-center'>{errorObj.message}</p>
          }</div>
           





          <div className="mt-4">
            <button type='button' className="btn btn-success  btn-block w-100 rounded-4" onClick={login}>LOGIN</button>
          </div>

          </div >
          
          </form>
          <div className="my-3 text-center">
          <Link  className="text-white  " to={"/ForgotPassword"}>Forgot Password?</Link>
          </div>
           
          </div>
          <div className="col-lg-2 "></div>
          </div>
        </div>
      </div>
    </div>

    </>



  );
}
