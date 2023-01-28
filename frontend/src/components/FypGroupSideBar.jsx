import { motion } from "framer-motion"

import { NavLink } from 'react-router-dom';
import fypGroupAvatar from '../images/groupAvatar.png';
import {useState} from 'react'
import { AiFillBulb,AiFillRead 
} from "react-icons/ai";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { FaBars,} from "react-icons/fa";
import Navbar from "./Navbar";
import {useNavigate} from "react-router-dom"

export default function FypGroupSideBar({children}) {
  const [isOpen , setIsOpen] = useState(true);
  const toggle =()=>setIsOpen(!isOpen);
  const navigate=useNavigate();


  const navLinkStyles=({isActive})=>{
    console.log(isActive)
    return{
      backgroundColor:isActive?'#0DA049': '#011D3A',
      borderRight:isActive? '4px solid white':'none'

  
    }  
  }

  const userLogOut=()=>{
    // e.preventdefault();
    sessionStorage.clear();
    // props.onLogOut("sessionStorage");
    

    navigate('/login');
    window.location.reload(false);
  }
    

  const routes =[
  {
    path: '/FypGroup/FYPIdeas',
    name:'FYP Ideas',
    icon: <AiFillBulb size={24} />
    
  },
  {
    path: '/FypGroup/ProjectProposal',
    name:'FYP Projects',
    icon: <AiFillRead size={24} />
  },
 
]
const logOut={
    path: '/',
    name:'logout',
    icon: <RiLogoutBoxRLine size={24} />
    
  };



const showAnimation={
 hidden:{
  width:0,
  opacity:0,
  transition:{
    duration:0.5
  },

 },
 show:{
  with:"auto",
  opacity:1,
  transition:{
    duration:0.3
  },
 },
}

  
  return (
    <>
    <Navbar/>
    <div className="main-container ">
    <motion.div animate={{width: isOpen ? "200px":"60px",
     transition:{
      duration:0.5,
      type:'spring',
      damping:12,

     }
  }} className= "sidebar ">
      <div className="top_section">
        {/* <h1 className="Logo">LOGO </h1> */}
        <div className="bars d-flex justify-content-start align-items-start" >
          <FaBars className="d-flex jisti" onClick={toggle} size={32} />
        </div>
       
      </div>
      <div>
      <center>
      {isOpen && <img src={fypGroupAvatar} width='120px' />}
      </center>
      <center>
{isOpen && <h5 className="py-2" src={fypGroupAvatar} width='120px' >FYP GROUP </h5>}
      </center>


      <center>
  {isOpen && <h6 className="pt-2" style={{display:sessionStorage.numOfMembers==1||sessionStorage.numOfMembers==2||sessionStorage.numOfMembers==3||sessionStorage.numOfMembers==4?'block':'none'}} src={fypGroupAvatar} width='120px' >{sessionStorage.std1Id}<br/>{sessionStorage.std1Name}</h6>}
  {isOpen && <h6 className="" style={{display:sessionStorage.numOfMembers==2||sessionStorage.numOfMembers==3||sessionStorage.numOfMembers==4?'block':'none'}} src={fypGroupAvatar} width='120px' >{sessionStorage.std2Id}<br/>{sessionStorage.std2Name}</h6>}
  {isOpen && <h6 className="" style={{display:sessionStorage.numOfMembers==3||sessionStorage.numOfMembers==4?'block':'none'}} src={fypGroupAvatar} width='120px' >{sessionStorage.std3Id}<br/>{sessionStorage.std3Name}</h6>}
  {isOpen && <h6 className="pb-2" style={{display:sessionStorage.numOfMembers==4?'block':'none'}} src={fypGroupAvatar} width='120px' >{sessionStorage.std4Id}<br/>{sessionStorage.std4Name}</h6>}
  <br />
        </center>


      </div>

      <section  className="routes">
        {routes.map((route)=>(
        <NavLink 
         to={route.path}
         key={route.name}
         className="Link"
         style={navLinkStyles}>
          <div className="icon">
            {route.icon}
          </div>

  {isOpen && <motion.div variants={showAnimation} 



  className="Link_Text">{route.name}</motion.div>}


        </NavLink>
        
        ))}
      </section>
      
                      <hr />

                      <NavLink 
 style={navLinkStyles}
 onClick={()=>{userLogOut()}}
to={logOut.path} key={logOut.name} className="Link"
 >
  <div className="icon">
    {logOut.icon}
  </div>

{isOpen && <motion.div variants={showAnimation} 



className="Link_Text">{logOut.name}</motion.div>}


</NavLink>

    </motion.div>

    <main className="full-width">
{children}
      </main>
    </div>
   
     
</>
    );
};