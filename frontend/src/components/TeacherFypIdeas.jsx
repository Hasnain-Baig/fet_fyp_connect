import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';

export default function TeacherFypIdeas() {

  const [fypIdeas, setFypIdeas] = useState([]);
  const [title, setTitle] = useState('')  
const [tools, setTools] = useState('')  
const [desc, setDesc] = useState('')  
const [errorObj, setErrorObj] = useState({success:1,message:''})

  useEffect(() => {
    axios.get('http://localhost:4000/apis/fyp-idea')
    .then((res)=>{

      setFypIdeas(res.data.data);
    console.log(res.data.data);

    })
    .catch((e)=>{
      console.log(e);
    
    })
      // first
    
      // return () => {
      //   second
      // }
        },[])


        const submitFypIdea=()=>{
          console.log(title);
          console.log(tools);
          console.log(desc);
          setErrorObj({success:1,message:''});             

          axios.post('http://localhost:4000/apis/fyp-idea',
          {
teacherId:sessionStorage.teacherId,
title:title,
tools:tools,
description:desc
          }
            )
            .then((res)=>{
            console.log(res.data);
            var idea={Title:title,Tools:tools,Description:desc}
            fypIdeas.push(idea);
            setErrorObj({success:1,message:res.data.message});             
            setFypIdeas(fypIdeas);
          })
            .catch((e)=>{
             console.log(e);
             setErrorObj({success:0,message:e.message});             
            })
          
        }

  return (
    <div className="side-area side-body">
      

    <div className="button-add-idea-div">
    <button className="btn-add-idea" data-bs-toggle="modal" data-bs-target="#AddFYPIdeas">
        Add FYP Idea&nbsp;&nbsp;&nbsp;
        <strong>
        +
        </strong>
    </button>
    
    <div className='text-light bg-color-modal'>
   <div className="modal fade" id="AddFYPIdeas" tabIndex="-1" aria-labelledby="AddFYPLabel" aria-hidden="true">
  <div className="modal-dialog bg-color-modal   ">
    <div className="modal-content  bg-color-modal">
      <div className="modal-header  ">
        <h3 className="modal-title" id="exampleModalLabel">ADD FYP IDEA</h3>
        <p className='text-light fs-4 mt-3' role='button' data-bs-dismiss="modal">X</p>
        {/* <button type="button" class="text-light bg-danger px-2 border-rounded-2" data-bs-dismiss="modal" >X</button> */}
    
      </div>
      <div className="modal-body">
          <div className="mb-3">
            <label htmlFor="text" className="form-label">Title</label>
            <input type="text" onChange={(e)=>{setTitle(e.target.value)}} value={title} className="form-control" id="" aria-describedby="emailHelp"/>
           
          </div>
          
          <div className="mb-3">
            <label htmlFor="text" className="form-label">Technology</label>
            <input type="text" onChange={(e)=>{setTools(e.target.value)}} value={tools} className="form-control" id="" aria-describedby=""/>
           
          </div>

          <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
  <textarea onChange={(e)=>{setDesc(e.target.value)}} value={desc} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

<div>
           {errorObj.success==1?
                  <p className='text-success text-center'>{errorObj.message}</p>
           :
           <p className='text-danger text-center'>{errorObj.message}</p>
          }</div>
   
<div className='d-flex justify-content-end'>
<button type="button" onClick={submitFypIdea} className="btn btn-success">Add FYP ideas </button>
</div>
      </div>
    </div>
  </div>
</div>



</div>

    
    
    </div>
    

{
  fypIdeas.length!=0?
  <table>
  <thead>
    <tr>
      <th>ID:</th>
      <th>TITLE</th>
      <th>TECHNOLOGY</th>
      <th>DESCRIPTION</th>
      <th>TAKEN</th>
      <th>GIVEN BY</th>
    </tr>
  </thead>
  <tbody>
    {fypIdeas.map((idea)=>{
return(

  idea.Teacher_ID==null?
    <span></span>:
<tr key={idea.Idea_ID}>
    <td>
   {idea.Idea_ID}
    </td>
    <td>
    {idea.Title}
    </td>
    <td>
    {idea.Tools}
    </td>
    <td>
    {idea.Description}
    </td>
    <td>
    {idea.Idea_Taken}
    </td>
    <td>
    {idea.Teacher_FName+" "+idea.Teacher_LName}
    </td>
  </tr>

);
})}


  </tbody>
</table>
:
<div>
<center>
No Fyp Ideas!
</center>
</div>
}    
    
    {/* <table>
      <thead>
        <tr>
          <th>ID:</th>
          <th>TITLE</th>
          <th>TECHNOLOGY</th>
          <th>DESCRIPTION</th>
          <th>GIVEN BY</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
         567890
          </td>
          <td>
            FYP AUTOMATION 
          </td>
          <td>
            WEB APPLICATION
          </td>
          <td>
         It's a web application
          </td>
          <td>
           DR.BISHARAT MEMON
          </td>
        </tr>
      </tbody>
    </table> */}
    
    
    </div>
    

  )
}
