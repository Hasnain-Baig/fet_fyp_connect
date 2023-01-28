import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';

export default function FypGroupTeacherFYPIdeas() {
 
  
  const [fypIdeas, setFypIdeas] = useState([]);
  

  useEffect(() => {

    
    axios.get('http://localhost:4000/apis/fyp-idea')
    .then((res)=>{

      setFypIdeas(res.data.data);
    console.log(res.data.data);

    })
    .catch((e)=>{
      console.log(e);
    
    })
    
  },[])


  return (
    <div className="side-area side-body">


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
{/* 
<table>
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
 maa shurti jo ashique bholn cho
  </td>
  <td>
   DR.BISHARAT MEMON
  </td>
</tr>
</tbody>
</table> */}


</div>
  );
}

