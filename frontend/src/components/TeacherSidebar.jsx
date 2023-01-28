import { motion } from "framer-motion"
import { NavLink, redirect } from 'react-router-dom';
import teacherAvatar from '../images/teacherAvatar.png';
import Navbar from '../components/Navbar';
import {useNavigate} from "react-router-dom"

import {useState,useEffect} from 'react'
import { AiFillBulb,
} from "react-icons/ai";
import { FaBars,} from "react-icons/fa";
import { 
    RiBodyScanFill,
   RiFileTextLine,
   RiFilePaper2Line,
RiUser2Line,RiGroupLine,RiTeamLine,RiLogoutBoxRLine } from "react-icons/ri";

export default function TeacherSideBar({children},props) {

const navigate=useNavigate();
  const [isOpen , setIsOpen] = useState(true);
  const toggle =()=>setIsOpen(!isOpen);


  useEffect(() => {
    console.log("useEffext routes============>",routes);
    console.log("useEffext routes============>",window.location.pathname);
    console.log("useEffext routes============>",window.location.pathname.split('/')[1]);
    if(window.location.pathname.split('/')[1]!="Teacher"){
    console.log("useEffext routes============>not teacher",window.location.pathname.split('/')[1]);
      setSwitchRouteName(window.location.pathname.split('/')[1]);
      switchSidebar({name:window.location.pathname.split('/')[1]});
    }
}, [])


const [routes, setRoutes] = useState([{
    path: '/Teacher/FypIdeas',
    name:'FYP Ideas',
   
    icon: <AiFillBulb size={24} />    
}])

const navLinkStyles=({isActive})=>{
    console.log(isActive)
    return{
      backgroundColor:isActive?'#0DA049': '#011D3A',
      borderRight:isActive? '4px solid white':'none'

  
    }  
  }





const [switchRouteName, setSwitchRouteName] = useState('Teacher');

const userLogOut=()=>{
  // e.preventdefault();
  sessionStorage.clear();
  // props.onLogOut("sessionStorage");
  
  navigate('/login');
  window.location.reload(false);
}

const switchSidebar =(route)=>{
    console.log("------->",route.path)
    console.log(route.name)
    
switch (route.name) {

    case 'Teacher':
      console.log(props);
        
                setSwitchRouteName('Teacher');
                // console.log(switchRouteName);
                // navigate('/Teacher/FypIdeas');
                // console.log(switchRouteName);
                setRoutes([{
            path: '/Teacher/FypIdeas',
            name:'FYP Ideas',
            icon: <AiFillBulb size={24} />    
        }]);
        break;
case 'Supervisor':

    setSwitchRouteName('Supervisor');
    // navigate('/Supervisor/ProjectSummary');
    setRoutes([  {
    
        path: '/Supervisor/ProjectSummary',
        name:'Project\nSummary',
        icon: <RiFileTextLine size={24} />
        
      },
       {
        path:'/Supervisor/SupervisorPendingProposal',
     
        name:'Pending \n Proposal',
        icon: <RiFilePaper2Line size={24} />
        

      },
    ]);
    break;
case 'Co-ordinator':
    
    setSwitchRouteName('Co-ordinator');
    // navigate('/Co-ordinator/ProposalSummary');

setRoutes([
          {
    path: '/Co-ordinator/ProposalSummary',
    name:'Proposal \n Summary',
    icon: <RiFileTextLine size={24} />,

  },])
    default:
 
        break;


}
}

const setNavigationRoutes=(route)=>{
  console.log("naviagation route--->",route);
  console.log("naviagation route--->",route.path);
  console.log("naviagation route--->",switchRouteName);
 
  switching.map((sr)=>{
    if(sr.name==switchRouteName){
      sr.path=route.path; }
    });
}

const [switching,setSwitching]=useState([
   
    
  {
      path: '/Teacher/FypIdeas',
      name:'Teacher' ,
          
    icon: <RiUser2Line size={24} />
    
  },
  {
      path: '/Supervisor/ProjectSummary',
     name:'Supervisor',
      icon: <RiGroupLine size={24} />,
     
    },
    
      {
          path: '/Co-ordinator/ProposalSummary',
          name:'Co-ordinator',
    icon: <RiTeamLine size={24}/>
  },
]);

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
          <FaBars className="d-flex" onClick={toggle} size={32} />
        </div>
       
      </div>
      <div>
      <center>
      {isOpen && <img src={teacherAvatar} width='120px' />}
      </center>
      <center>
      {isOpen && <h6 className="py-2"  src={teacherAvatar} width='120px' >{sessionStorage.teacherName}</h6>}
      </center>


      </div>

      <section className="routes">
        {routes.map((route,key)=>(
<NavLink 


        
        to={route.path} key={route.name} 
        className="Link"        
      style={navLinkStyles} 
onClick={()=>{setNavigationRoutes(route)}}
      // activeclassname="active"
        >
 
          <div className="icon">
            {route.icon}
          </div>

  {isOpen && <motion.div variants={showAnimation} 
className="Link_Text">{route.name}</motion.div>}


        </NavLink>
        
        ))}
      </section>
      
                      <hr />
                      {console.log("switch route name---->",switchRouteName)}
                      {switching.map((route)=>(

route.name==switchRouteName?
<NavLink 
                          onClick={()=>{switchSidebar(route)}}
                           key={route.name} className="Link"
                           to={route.path} 
      style={navLinkStyles}
       >
 
  
  <div className="icon">
    {route.icon}
    
  </div>

{isOpen && <motion.div variants={showAnimation} 



className="Link_Text">{route.name}</motion.div>}


</NavLink>
:
<NavLink 
                          onClick={()=>{switchSidebar(route)}}
                           key={route.name} 
                           to={route.path} 
                           
                           className="Link" 
       >
 
  
  <div className="icon">
    {route.icon}
    
  </div>

{isOpen && <motion.div variants={showAnimation} 



className="Link_Text">{route.name}</motion.div>}


</NavLink>

))}
    
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