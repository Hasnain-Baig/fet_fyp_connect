import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';

export default function CoOrdinatorProposalSummary() {

    
  const [proposals, setProposals] = useState([]);
  const [errorObj, setErrorObj] = useState({success:1,message:''})

  useEffect(() => {
    console.log(sessionStorage);
     axios.get(`http://localhost:4000/apis/fyp-proposal/co-ordinator/${sessionStorage.teacherId}`)
    .then((res)=>{  
      if(res.data.success==1){
        const data=[];  
        res.data.data.forEach(p => {
          if(p.Project_Status=="Proposal Submitted to Coordinator"||p.Project_Status=="Proposal Accepted by Coordinator"){
            data.push(p);
          }
        });  
        setProposals(data);
      }
      else if(res.data.message=="No Co-ordinator Exist!"){
        setErrorObj({success:res.data.success,message:res.data.message});
      }

    console.log("----------->",res.data);
    })
    .catch((e)=>{
      console.log("e-------->",e);
    
    })

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
    

const acceptProposal=(pId)=>{
// console.log(pId);

axios.put(`http://localhost:4000/apis/fyp-proposal/${pId}`,
{
  status:"Proposal Accepted by Coordinator",
  
})
.then((res)=>{  
console.log(res.data);
console.log(proposals);  
setErrorObj({success:res.data.success,message:res.data.message})
axios.get(`http://localhost:4000/apis/fyp-proposal/co-ordinator/${sessionStorage.teacherId}`)
.then((res)=>{  
  const data=[];  
  res.data.data.forEach(p => {
    if(p.Project_Status=="Proposal Submitted to Coordinator"||p.Project_Status=="Proposal Accepted by Coordinator"){
      data.push(p);
    }
  });
  setProposals(data);
  setErrorObj({success:res.data.success,message:res.data.message})

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

{errorObj.message=="No Co-ordinator Exist!"?
<div>
<center>
You are not a co-ordinator!
</center>
</div>

:
    <>
    {errorObj.message!="" && errorObj.message!="No Co-ordinator Exist!"?
<div>
  <p className={'text-danger'}>{errorObj.message}</p>
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
  <td className='proposalsummary'>
  {pp.Group_ID}
  </td>
  <td className='proposalsummary'>
  {pp.FYP_Name}
  </td>
  <td className='proposalsummary'>
  {pp.Activity_Date}
  </td> 
  <td className='proposalsummary'>
 
 {pp.Project_Status=="Proposal Accepted by Coordinator"?
 <p>{pp.Project_Status}</p>

 :
  <button onClick={()=>{acceptProposal(pp.Proposal_ID)}} className='btn btn-sm btn-success' >Click to Accept</button>
 }
 
  </td>

  <td className='proposalsummary'>
  <button onClick={()=>{viewProposal(pp.Proposal)}} className='btn-view-details' >View Proposal</button>
  </td>
  <td className='proposalsummary'>
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

    </>}
</div>



  )
}
