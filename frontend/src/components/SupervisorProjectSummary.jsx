import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';

export default function SupervisorProjectSummary() {

  
  const [proposals, setProposals] = useState([]);
  const [errorObj, setErrorObj] = useState({success:1,message:''})

  useEffect(() => {
    console.log(sessionStorage);
    axios.get(`http://localhost:4000/apis/fyp-proposal/supervisor/${sessionStorage.teacherId}`)
    .then((res)=>{  
console.log(res.data);
      if(res.data.success==1){
        const data=[];  
        res.data.data.forEach(p => {
          if(p.Activity_Type=="Proposal Approved by Supervisor" ||p.Activity_Type=="Proposal Submitted to Coordinator" || p.Activity_Type=="Proposal Accepted by Coordinator"){
            data.push(p);
          }
        });
        setProposals(data);  
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
        
        const viewThesis=(thesisName)=>{
          
          console.log(thesisName)
        axios.get(`http://localhost:4000/apis/fyp-proposal/view/thesis/${thesisName}`)
        .then((res)=>{  
        console.log("----------->",res);
        window.location.reload(false); 
      })
        .catch((e)=>{
          console.log("e-------->",e);
          window.location.reload(false); 
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
{proposals.length!=0?

<table>
<thead>
  <tr>
    <th>GROUP ID</th>
    <th>PROJECT TITLE</th>
    <th>DATE</th>
    <th>STATUS</th>
    <th>PROPOSAL</th>
    <th>THESIS</th>

  </tr>
</thead>
<tbody>
{proposals.map((pp,key)=>{
return(
<tr key={key}>
<td className='projectsummary'>
{pp.Group_ID}
</td>
<td className='projectsummary'>
{pp.FYP_Name}
</td>
<td className='projectsummary'>
{pp.Activity_Date}
</td> 
<td className='projectsummary'>
{pp.Project_Status}
</td> 
<td className='projectsummary'>
<button onClick={()=>{viewProposal(pp.Proposal)}} className='btn-view-details' >View Proposal</button>
</td>
<td className='projectsummary'>
{ pp.Thesis!=null?  <button onClick={()=>{viewThesis(pp.Thesis)}} className='btn-view-details' >View Thesis</button>
:
<p>No</p>
} 
</td>
</tr>

);
})}

</tbody>
</table>
:
<div>
<center>
No Proposals
</center>
</div>}
</>
  } 
 
</div>

  )
}
