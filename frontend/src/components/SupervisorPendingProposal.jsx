import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';

export default function SupervisorPendingProposal() {

  const [pendingProposals, setPendingProposals] = useState([]);
  const [comment, setComment] = useState('')
  const [errorObj, setErrorObj] = useState({success:1,message:''})

  useEffect(() => {
    console.log(sessionStorage);
    setErrorObj({success:1,message:''})

    axios.get(`http://localhost:4000/apis/fyp-proposal/supervisor/${sessionStorage.teacherId}`)
    .then((res)=>{  
      console.log("----------->",res.data.success);
      if(res.data.success==1){
  const data=[];  
  res.data.data.forEach(p => {
    if(p.Activity_Type=="Proposal Submitted to Supervisor"){
      data.push(p);
    }
  });
  setPendingProposals(data);
}else if(res.data.message=="No Supervisor Exist!"){
  setErrorObj({success:res.data.success,message:res.data.message});
}



    })
    .catch((e)=>{
      console.log("e-------->",e);
    
    })

    
      // first
    
      // return () => {
      //   second
      // }
        },[])
  

        const viewProposal= (proposalName)=>{
          console.log(proposalName);
        
          axios.get(`http://localhost:4000/apis/fyp-proposal/view/proposal/${proposalName}`)
          .then((data)=>{
           console.log("data------->",data);
           window.location.reload(false); 
          })
          .catch((e)=>{
            console.log("e-------->",e);
            window.location.reload(false); 
        
          })
          
        }
        
    
const sendCommentsToGroup=(pId,gId)=>{
  if(comment==""){
    setErrorObj({success:0,message:"Comment is empty!"})
  return;
  }
  console.log("comment");
  console.log(comment);
  console.log(pId);

  axios.put(`http://localhost:4000/apis/fyp-proposal/${pId}`,
  {
    groupId:gId,
    supName:sessionStorage.teacherName,
    comment:comment,    
    status:'Proposal Approved by Supervisor'

  })
  .then((res)=>{  
  
      setErrorObj({success:res.data.success,message:res.data.message})

    axios.get(`http://localhost:4000/apis/fyp-proposal/supervisor/${sessionStorage.teacherId}`)
    .then((res)=>{  
      const data=[];  
      res.data.data.forEach(p => {
        if(p.Activity_Type=="Proposal Submitted to Supervisor"){
          data.push(p);
        }
      });
      setPendingProposals(data);
    console.log("----------->",res.data);
    })
    .catch((e)=>{
      setErrorObj({success:0,message:e})
    
    })


  })
  .catch((e)=>{
    setErrorObj({success:0,message:e})
  })
  

}

return (

<div className='side-area side-body'>
{errorObj.message=="No Supervisor Exist!"?
<div>
<center>
You are not a supervisor!
</center>
</div>

:
<>
{errorObj.message!="" && errorObj.message!="No Supervisor Exist!"?
<div>
  <p className={errorObj.success==1 ?'text-success':'text-danger'}>{errorObj.message}</p>
  </div>:
<div></div>}

  {
  
  pendingProposals.length!=0? 
  <table>
  <thead>
    <tr>
      <th>GROUP ID</th>
      <th>PROJECT TITLE</th>
      <th> DATE</th>
      <th> DETAILS</th>
      <th> COMMENTS</th>
      <th> ACTION</th>

    </tr>
  </thead>
  <tbody>
{pendingProposals.map((pp,key)=>{
return(
  <tr key={key}>
  <td className='pendingproposal'>
  {pp.Group_ID}
  </td>
  <td className='pendingproposal'>
  {pp.FYP_Name}
  </td>
  <td className='pendingproposal'>
  {pp.Activity_Date}
  </td> 
  <td className='pendingproposal'>
  <button onClick={()=>{viewProposal(pp.Proposal)}} className='btn-view-details' >View Proposal</button>
  </td>
  <td className='pendingproposal '>
<input type="text" onChange={(e)=>{setComment(e.target.value)}} value={comment} className="form-control" placeholder=""/>
  </td>
  <td className='pendingproposal'>
  <button onClick={()=>{sendCommentsToGroup(pp.Proposal_ID,pp.FYP_ID)}}  className='btn btn-sm btn-success' >Send Comments and Accept</button> 
  </td>
</tr>

);
})}
  </tbody>
</table>
:
<div>
<center>
No Pending Proposals
</center>
</div>
}
</>

}
</div>

  )
}
