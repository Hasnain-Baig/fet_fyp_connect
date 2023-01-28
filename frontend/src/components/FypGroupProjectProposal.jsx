import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import {TbUpload,TbEye} from 'react-icons/tb';

export default function FypGroupProjectProposal() {
    const [projectIdea, setProjectIdea] = useState('Own Idea');
    const [teachers, setTeachers] = useState([])
    const [fypIdeas, setFypIdeas] = useState([])
    const [supervisor, setSupervisor] = useState({name:''})
    // var groupMembers=0;
    // const [groupMembers, setGroupMember] = useState(0)
    const [idea, setIdea] = useState({name:""})
    const [proposalFile, setProposalFile] = useState()
    // const [Std1, setStd1] = useState('');
    const [errorObj, setErrorObj] = useState({success:1,message:'',});
    const [fypStatus, setFypStatus] = useState('PROPOSAL NOT SUBMITTED')
    const [projectGroupId, setProjectGroupId] = useState('')
    const [updateProposal, setUpdateProposal] = useState(false)
    const [thesisFile, setThesisFile] = useState()



    useEffect(() => {
      setErrorObj({success:1,message:''})
      // sessionStorage.thesisFile=undefined;
      // calculateGroupMembers();
      axios.get(`http://localhost:4000/apis/fyp-proposal/group/${sessionStorage.groupId}`)
      .then((res)=>{
        console.log("data--------------->",res.data);
if(res.data.success==1){
  sessionStorage.setItem("proposalId",res.data.data[0].Proposal_ID);
  sessionStorage.setItem("projectTitle",res.data.data[0].FYP_Name);
  sessionStorage.setItem("supervisorId",res.data.data[0].Teacher_ID);
  sessionStorage.setItem("supervisorName",res.data.data[0].Teacher_FName+" "+res.data.data[0].Teacher_LName);
  sessionStorage.setItem("proposalFile",res.data.data[0].Proposal);
  sessionStorage.setItem("ideaId",res.data.data[0].Idea_ID);
  console.log(res.data.data[0].Thesis);
if(res.data.data[0].Thesis!=null){
  console.log("thesis is not null------------------->")
  sessionStorage.setItem("thesisFile",res.data.data[0].Thesis);
}else{
  sessionStorage.setItem("thesisFile",res.data.data[0].Thesis);
  console.log("thesis is null------------------->")
}

console.log("here is data of p-------?",res.data.data)
// setSupervisor({name:sessionStorage.supervisorName});
// setIdea({name:sessionStorage.projectTitle});

}

if(sessionStorage.proposalId!=undefined){
  console.log(sessionStorage.proposalId);

  axios.get(`http://localhost:4000/apis/fyp-proposal/${sessionStorage.proposalId}`)
  .then((res)=>{
  console.log("yes-------->",res.data)
 if(res.data.success==1){
  setFypStatus(res.data.data.Project_Status);
  setProjectGroupId(res.data.data.Group_ID);
 }

    
  })
  .catch((e)=>{
    console.log(e);
  
  })
  
}



})
      .catch((e)=>{
        console.log(e);
      
      })

      console.log(sessionStorage);
      console.log(fypStatus);
      

      axios.get('http://localhost:4000/apis/fyp-idea')
  .then((res)=>{

    const data=[];  
    if(res.data.success==1){
      res.data.data.forEach(p => {
        if(p.Idea_Taken=="No"){
          data.push(p);
        }
      });
    
    }
    setFypIdeas(data);
    
    console.log(res.data.data);

  })
  .catch((e)=>{
    console.log(e);
  
  })


  axios.get('http://localhost:4000/apis/teacher')
  .then((res)=>{

    setTeachers(res.data.data);
  console.log(res.data.data);

  })
  .catch((e)=>{
    console.log(e);
  
  })

axios.get('http://localhost:4000/apis/teacher')
.then((res)=>{

  setTeachers(res.data.data);
console.log(res.data.data);

})
.catch((e)=>{
  console.log(e);

})

      
    }, [])
    
 
    const setSupervisorObj=(supName)=>{
      console.log(supName);
      setSupervisor({name:supName});
      teachers.map((teacher)=>{
        if((teacher.Teacher_FName+" "+teacher.Teacher_LName)==supName){
setSupervisor({
id:teacher.Teacher_ID,
  name:supName
});
        }
      })
    }

    const setProjectIdeaAndresetValue=(val)=>{
if(val=="Own Idea"){
  setIdea({    
    id:undefined,
    name:'',
    by:val
  })

}else{
  console.log(val);
  fypIdeas.map((idea)=>{
    if(isNaN(parseInt(idea.FYP_ID))){
      console.log(idea);
    setIdea({
      id:idea.Idea_ID,
      name:idea.Title,
      by:val
    })
    }
    })  
    
}

setProjectIdea(val);

    }

    const setIdeaObj=(ideaName)=>{
console.log(ideaName);
if(projectIdea=="Own Idea"){
  setIdea({
    id:undefined,
    name:ideaName,
    by:projectIdea
  })  
}
else if(projectIdea=="Teacher Idea"){
fypIdeas.map((idea)=>{
if(idea.Title==ideaName){
setIdea({
  id:idea.Idea_ID,
  name:idea.Title,
  by:projectIdea
})
}
})  
}
    }

    
    const setViewOrUpdate=(val)=>{
      console.log(val)
      setUpdateProposal(!updateProposal);
      setProposalFile(undefined);
    }




    const sendProposalToSupervisor=()=>{
      console.log(projectIdea);
      setErrorObj({success:1,message:''}) 
      console.log(idea);
if(projectIdea=="Own Idea" && idea.name==""){
    setErrorObj({success:0,message:'Idea title is not given yet!'}) 
  }
  else if(proposalFile==undefined){
setErrorObj({success:0,message:'Proposal is not added yet!'})
      }
else {
console.log("i------------------->",projectIdea);
console.log("i------------------->",idea);
  setErrorObj({success:1,message:''})
  if(supervisor.id==undefined){
    supervisor.id=teachers[0].Teacher_ID;
    }

    

  const formData=new FormData();

  const gId=parseInt(sessionStorage.groupId);

  console.log(proposalFile.name);
  formData.append("groupId",gId);
  formData.append("projectTitle",idea.name);
  formData.append("fypId",idea.id);
  formData.append("supervisorId",supervisor.id);
  formData.append("proposalFile",proposalFile,proposalFile.name);

  

  axios.post('http://localhost:4000/apis/fyp-proposal',
formData
  )
  .then((res)=>{
  console.log(res.data);
  setErrorObj({success:res.data.success,message:res.data.message});
console.log(res.data.success);
  if(res.data.success==1){
    setFypStatus(res.data.fyp_status);
    setProjectGroupId(res.data.projectGroupId)
    sessionStorage.setItem('proposalId',res.data.proposalId);
}else{
  setFypStatus("PROPOSAL NOT SUBMITTED");
}
  console.log(sessionStorage)
})
  .catch((e)=>{
   console.log(e);
   setErrorObj({success:0,message:e.message});
   setFypStatus("PROPOSAL NOT SUBMITTED");
   
  })


}
      

    }


    const sendProposalToCoOrdinator=()=>{

          const formData=new FormData();

if(updateProposal){
if(proposalFile==undefined){
  setErrorObj({success:0,message:'Proposal is not added yet!'})
}else{
  setErrorObj({success:1,message:''})
  formData.append("proposalFile",proposalFile);
  formData.append("status","Proposal Submitted to Coordinator");

  axios.put(`http://localhost:4000/apis/fyp-proposal/${sessionStorage.proposalId}`,
        formData
          )
          .then((res)=>{
          console.log(res.data);
          if(res.data.success==1){
            setFypStatus(res.data.fyp_status);
            setErrorObj({success:res.data.success,message:res.data.message});
        }else{
          setFypStatus("Proposal Approved by Supervisor");
        }
        
        })
          .catch((e)=>{
           console.log(e);
           setErrorObj({success:0,message:e.message});
           setFypStatus("Proposal Approved by Supervisor");
           
          })


}  
}else{
  setErrorObj({success:1,message:''})
  formData.append("proposalFile",proposalFile);
  formData.append("status","Proposal Submitted to Coordinator");

  axios.put(`http://localhost:4000/apis/fyp-proposal/${sessionStorage.proposalId}`,
        formData
          )
          .then((res)=>{

            console.log(res.data);
            if(res.data.success==1){
              setFypStatus(res.data.fyp_status);
              setErrorObj({success:res.data.success,message:res.data.message});
          }else{
            setFypStatus("Proposal Approved by Supervisor");
          }
  
        })
          .catch((e)=>{
           console.log(e);
           setErrorObj({success:0,message:e.message});
           setFypStatus("Proposal Approved by Supervisor");
           
          })
        


        }
 
        
         
    }


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
    
const sendThesis=()=>{
console.log(thesisFile);
if(thesisFile==undefined){
  setErrorObj({success:0,message:'Thesis is not added yet!'})
}
else{
  const formData=new FormData();
formData.append("thesisFile",thesisFile,thesisFile.name);
axios.put(`http://localhost:4000/apis/fyp-proposal/upload-thesis/${sessionStorage.proposalId}`,formData)
.then((res)=>{
  console.log(res.data);
  setErrorObj({success:res.data.success,message:res.data.message});
  sessionStorage.setItem("thesisFile",res.data.thesisName);
  console.log(sessionStorage);

})
  .catch((e)=>{
   console.log(e);
   setErrorObj({success:0,message:e.message});   
  })

}

 
}



  return (
    <div className="side-area side-body">

<div className="add-idea-div">
    <div className="fyp-status-div">
    FYP STATUS : <span className={fypStatus=='PROPOSAL NOT SUBMITTED'?'text-danger':'text-success'}>{fypStatus}</span>
    </div>

{fypStatus=='PROPOSAL NOT SUBMITTED'
?
<>
<h1 className='add-fyp-idea-header'>
<center>PROPOSAL SUBMISSION</center>
</h1>
<div className="row">
<div className="col col-lg-2 col-sm-0"></div>
<div className="col col-lg-8 col-sm-12">
<label>GROUP DETAILS</label><br /><br />

    
    <div className="row" style={{  display: sessionStorage.numOfMembers=="1" || sessionStorage.numOfMembers=="2" || sessionStorage.numOfMembers=="3" || sessionStorage.numOfMembers=="4" ? 'revert-layer' :'none' }}>
    <div className='col col-lg-6 col-sm-12' >
<label htmlFor="roll1">Student1 Roll No</label>
  <input className='px-2' type="text" id="roll1" value={sessionStorage.std1Id}    placeholder="" />
</div>
<div className='col col-lg-6 col-sm-12'>
<label htmlFor="name1">Student1 NAME</label>
  <input className='px-2' type="text" id="name1" value={sessionStorage.std1Name}   placeholder=""/>
</div>
    </div>

    <div className="row" style={{  display: sessionStorage.numOfMembers=="2" || sessionStorage.numOfMembers=="3" || sessionStorage.numOfMembers=="4"  ? 'revert-layer' :'none' }}>
    <div className='col col-lg-6 col-sm-12'>
<label htmlFor="roll2">Student2 Roll No</label>
  <input className='px-2' type="text" id="roll2" value={sessionStorage.std2Id}    placeholder="" />
</div>
<div className='col col-lg-6 col-sm-12'>
<label htmlFor="name2">Student2 NAME</label>
  <input className='px-2' type="text" id="name2" value={sessionStorage.std2Name}   placeholder=""/>
</div>

    </div>

    <div className="row" style={{  display: sessionStorage.numOfMembers=="3" || sessionStorage.numOfMembers=="4"   ? 'revert-layer' :'none' }}>
    <div className='col col-lg-6 col-sm-12'>
<label htmlFor="roll3">Student3 Roll No</label>
  <input className='px-2' type="text" id="roll3" value={sessionStorage.std3Id}    placeholder="" />
</div>
<div className='col col-lg-6 col-sm-12'>
<label htmlFor="name3">Student3 NAME</label>
  <input className='px-2' type="text" id="name3" value={sessionStorage.std3Name}   placeholder=""/>
</div>

    </div>

    <div className="row" style={{  display:  sessionStorage.numOfMembers=="4" ? 'revert-layer' :'none' }}>
    <div className='col col-lg-6 col-sm-12'>
<label htmlFor="roll4">Student4 Roll No</label>
  <input className='px-2' type="text" id="roll4" value={sessionStorage.std4Id}   placeholder="" />
</div>
<div className='col col-lg-6 col-sm-12'>
<label htmlFor="name4">Student4 NAME</label>
  <input className='px-2' type="text" id="name4" value={sessionStorage.std4Name}  placeholder=""/>
</div>

    </div>


    <br /><label>PROJECT DETAILS</label><br /><br />

    <div>
  <div className="form-check">
    <input className="form-check-input" onChange={(e)=>{setProjectIdeaAndresetValue(e.target.value); }} value='Own Idea' type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
    <label className="form-check-label"  htmlFor="flexRadioDefault1">
      Own Idea 
    </label>
  </div>
  <div className="form-check">
    <input className="form-check-input" onChange={(e)=>{setProjectIdeaAndresetValue(e.target.value); }} value='Teacher Idea' type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
    <label className="form-check-label" htmlFor="flexRadioDefault2">
    Teacher Idea
    </label>
  </div>
</div>



<div className="row">
    <div className='col col-lg-6 col-sm-12'>
<label htmlFor="proj-title">Project Title</label>
{projectIdea=='Own Idea'?
  <input type="text" onChange={(e)=>{(setIdeaObj(e.target.value))}} value={idea.name}  id="proj-title" className=' mt-2 p-2' placeholder=""/>
  :
  <select onChange={(e)=>{setIdeaObj(e.target.value)}}  class="form-select form-select-sm my-2 rounded-4" aria-label="Default select example" value={idea.name} >
{fypIdeas.map((idea)=>{
return(
  <option key={idea.Idea_ID} value={idea.Title}>{idea.Title}</option>
  );
})
}      

   </select>
}
</div>
<div className='col col-lg-6 col-sm-12'>
<label htmlFor="supervisor">SUPERVISOR</label>
<div className="dropdown-center">



<select onChange={(e)=>{setSupervisorObj(e.target.value)}} className="form-select form-select-sm my-2 rounded-4" value={supervisor.name} id="">
{teachers.map((teacher)=>{
  return(
    <option key={teacher.Teacher_ID} value={teacher.Teacher_FName+" "+teacher.Teacher_LName}>
      {teacher.Teacher_FName+" "+teacher.Teacher_LName}
    </option>
  );
  
})}
</select>
  <ul className="dropdown-menu">

   </ul>
</div>
</div>
    </div>

    <div className="row">
    <div className='col col-lg-6 col-sm-12'>
<label htmlFor="proposal">PROPOSAL .pdf</label>
  <input type="file" accept=".pdf" onChange={(e)=>{setProposalFile(e.target.files[0])}} id="proposal" placeholder=""/>
</div>
    </div>


{errorObj.success==0?
      <p className='text-danger text-center'>{errorObj.message}</p>
      :
      <p className='text-success text-center'>{errorObj.message}</p>
}


    <div className="row">
    <div className='col col-lg-6 col-sm-12'>
</div>
<div className='col col-lg-6 col-sm-12'>
<div className="button-add-idea-div">
<button onClick={sendProposalToSupervisor} className="btn-submit-idea">
    Submit Proposal
</button>
</div>

</div>
    </div>


</div>
<div className="col col-lg-2  col-sm-0"></div>



</div>
</>:
fypStatus=='Proposal Approved by Supervisor'?
<div>
<center >
FINAL YEAR PROJECT ID : {projectGroupId}
</center>
<p className='my-2 text-center'>Comments have been sent to your email address: {sessionStorage.groupEmail}</p>
<div className="row">
<div className="col col-lg-2 col-sm-0"></div>
<div className="col col-lg-8 col-sm-12">
<label>GROUP DETAILS</label><br /><br />

    
    <div className="row" style={{  display: sessionStorage.numOfMembers=="1" || sessionStorage.numOfMembers=="2" || sessionStorage.numOfMembers=="3" || sessionStorage.numOfMembers=="4" ? 'revert-layer' :'none' }}>
    <div className='col col-lg-6 col-sm-12' >
<label htmlFor="roll1">Student1 Roll No</label>
  <input type="text" id="roll1" value={sessionStorage.std1Id}  disabled  placeholder="" />
</div>
<div className='col col-lg-6 col-sm-12'>
<label htmlFor="name1">Student1 NAME</label>
  <input type="text" id="name1" value={sessionStorage.std1Name}  disabled placeholder=""/>
</div>
    </div>

    <div className="row" style={{  display: sessionStorage.numOfMembers=="2" || sessionStorage.numOfMembers=="3" || sessionStorage.numOfMembers=="4"  ? 'revert-layer' :'none' }}>
    <div className='col col-lg-6 col-sm-12'>
<label htmlFor="roll2">Student2 Roll No</label>
  <input type="text" id="roll2" value={sessionStorage.std2Id}  disabled  placeholder="" />
</div>
<div className='col col-lg-6 col-sm-12'>
<label htmlFor="name2">Student2 NAME</label>
  <input type="text" id="name2" value={sessionStorage.std2Name} disabled placeholder=""/>
</div>

    </div>

    <div className="row" style={{  display: sessionStorage.numOfMembers=="3" || sessionStorage.numOfMembers=="4"   ? 'revert-layer' :'none' }}>
    <div className='col col-lg-6 col-sm-12'>
<label htmlFor="roll3">Student3 Roll No</label>
  <input type="text" id="roll3" value={sessionStorage.std3Id} disabled   placeholder="" />
</div>
<div className='col col-lg-6 col-sm-12'>
<label htmlFor="name3">Student3 NAME</label>
  <input type="text" id="name3" value={sessionStorage.std3Name}  disabled placeholder=""/>
</div>

    </div>

    <div className="row" style={{  display:  sessionStorage.numOfMembers=="4" ? 'revert-layer' :'none' }}>
    <div className='col col-lg-6 col-sm-12'>
<label htmlFor="roll4">Student4 Roll No</label>
  <input type="text" id="roll4" value={sessionStorage.std4Id}  disabled placeholder="" />
</div>
<div className='col col-lg-6 col-sm-12'>
<label htmlFor="name4">Student4 NAME</label>
  <input type="text" id="name4" value={sessionStorage.std4Name} disabled placeholder=""/>
</div>

    </div>


    <br /><label>PROJECT DETAILS</label><br /><br />


<div className="row">
    <div className='col col-lg-6 col-sm-12'>
<label htmlFor="proj-title">Project Title</label>
<input type="text" id="name4" value={sessionStorage.projectTitle} disabled placeholder=""/>

</div>
<div className='col col-lg-6 col-sm-12'>
<label htmlFor="supervisor">SUPERVISOR</label>
<input type="text" id="name4" value={sessionStorage.supervisorName} disabled placeholder=""/>

</div>
    </div>

    <div className="row">
    <div className='col col-lg-6 col-sm-12'>
    <label htmlFor="proposal">PROPOSAL .pdf</label>

{updateProposal==true?
  <div>
  <button  onClick={(e)=>{setViewOrUpdate(e.target.value)}} value='back' className='btn-view-details my-2'>
  <TbEye size={18}/>
  &nbsp;back to previous</button>
  <input type="file" accept=".pdf" onChange={(e)=>{setProposalFile(e.target.files[0])}} id="proposal" placeholder=""/>
</div>

:
<div className='my-2' id='proposal'>
{sessionStorage.proposalFile}
&nbsp;<button onClick={(e)=>{}} value='view' className='btn-view-details'>
<TbEye size={18}/>
&nbsp;view</button>
&nbsp;<button onClick={(e)=>{setViewOrUpdate(e.target.value)}} value='update' className='btn-view-details'>
<TbUpload size={18}/>
&nbsp;update</button>
</div>
}
</div>
    </div>


{errorObj.success==0?
      <p className='text-danger text-center'>{errorObj.message}</p>
      :
      <p className='text-success text-center'>{errorObj.message}</p>
}


    <div className="row">
    <div className='col col-lg-6 col-sm-12'>
</div>
<div className='col col-lg-6 col-sm-12'>
<div className="button-add-idea-div">
<button onClick={sendProposalToCoOrdinator} className="btn-submit-idea">
    Submit Proposal to Co-ordinator
</button>
</div>

</div>
    </div>


</div>
<div className="col col-lg-2  col-sm-0"></div>



</div>

</div>:
fypStatus=='Proposal Accepted by Coordinator'?
<div>
<center >
FINAL YEAR PROJECT ID : {projectGroupId}
</center>
<div className="row">
<div className="col col-lg-2 col-sm-0"></div>
<div className="col col-lg-8 col-sm-12">




    <br /><label>PROJECT DETAILS</label><br /><br />
<div className="row">
    <div className='col col-lg-6 col-sm-12'>
<label htmlFor="proj-title">Project Title</label>
<input type="text" id="name4" value={sessionStorage.projectTitle} disabled placeholder=""/>

</div>
<div className='col col-lg-6 col-sm-12'>
<label htmlFor="supervisor">SUPERVISOR</label>
<input type="text" id="name4" value={sessionStorage.supervisorName} disabled placeholder=""/>

</div>
    </div>

    <div className="row">
    <div className='col col-lg-6 col-sm-12'>
 
<button className='btn-view-details' onClick={()=>{viewProposal(sessionStorage.proposalFile)}}>View Proposal</button>

</div>
    </div>

{
    sessionStorage.thesisFile.includes('pdf')?
    <div className="row">
  <div className='col col-lg-6 col-sm-12'>

<button className='btn-view-details' onClick={()=>{viewThesis(sessionStorage.thesisFile)}}>View Thesis</button>

</div>
  </div>

:
<div className="row">
<div className='col col-lg-6 col-sm-12'>
<label htmlFor="thesis">THESIS .pdf</label>
<input type="file" accept=".pdf" onChange={(e)=>{setThesisFile(e.target.files[0])}} id="thesis" placeholder=""/>

</div>
</div>
}


{errorObj.success==0?
      <p className='text-danger text-center'>{errorObj.message}</p>
      :
      <p className='text-success text-center'>{errorObj.message}</p>
}

{sessionStorage.thesisFile.includes('pdf')?
<div></div>
:
<div className="row">
<div className='col col-lg-6 col-sm-12'>
</div>
<div className='col col-lg-6 col-sm-12'>
<div className="button-add-idea-div">
<button onClick={sendThesis} className="btn-submit-idea">
Submit Thesis
</button>
</div>

</div>
</div>

}


</div>
<div className="col col-lg-2  col-sm-0"></div>



</div>

</div>:
<div>
<center >
FINAL YEAR PROJECT ID : {projectGroupId}
</center>
</div>
}
    </div>

</div>
  );
}
