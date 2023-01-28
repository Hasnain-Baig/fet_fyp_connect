import './App.css';

import {useNavigate} from "react-router-dom"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {useEffect,useState} from 'react';


import Home from './views/Home';
import Registration from './views/Registration';
import Login from './views/Login';
import ForgotPassword1 from './views/ForgotPassword1';

import TeacherSideBar from './components/TeacherSidebar';
import FypGroupSideBar from './components/FypGroupSideBar';

import TeacherFypIdeas from './components/TeacherFypIdeas';
import SupervisorProjectSummary from './components/SupervisorProjectSummary';
import SupervisorPendingProposal from './components/SupervisorPendingProposal';
import CoOrdinatorProposalSummary from './components/CoOrdinatorProposalSummary';
import FypGroupTeacherFYPIdeas from './components/FypGroupTeacherFYPIdeas';
import FypGroupProjectProposal from './components/FypGroupProjectProposal';




function App() {
  // const a  = useSelector(state => state.a);
  const [role, setRole] = useState();
  // const navigate=useNavigate();

  useEffect(() => {

    console.log(sessionStorage.userRole);

    if(sessionStorage.userRole=="fyp group"){
 if(window.location.pathname.toLocaleLowerCase()=="/login" || window.location.pathname.toLocaleLowerCase()=="/registration" || window.location.pathname.toLocaleLowerCase()=="/forgotpassword" || window.location.pathname.toLocaleLowerCase()=="/"){
window.location.pathname="/FypGroup/FYPIdeas";
} }else if(sessionStorage.userRole=="teacher"){
  if(window.location.pathname.toLocaleLowerCase()=="/login" || window.location.pathname.toLocaleLowerCase()=="/registration" || window.location.pathname.toLocaleLowerCase()=="/forgotpassword" || window.location.pathname.toLocaleLowerCase()=="/"){
    window.location.pathname="/Teacher/FypIdeas";
  }  
  }
  else{
    if(window.location.pathname.toLocaleLowerCase()=="/teacher/fypideas" || window.location.pathname.toLocaleLowerCase()=="/supervisor/projectsummary" || window.location.pathname.toLocaleLowerCase()=="/supervisor/supervisorpendingproposal" || window.location.pathname.toLocaleLowerCase()=="/co-ordinator/proposalsummary" || window.location.pathname.toLocaleLowerCase()=="/fypgroup/fypideas" || window.location.pathname.toLocaleLowerCase()=="/fypgroup/projectproposal"){
      window.location.pathname="/";
    }

  }

  })
  


  return (
<>

 {/* home route set */}

    <Router>

    {
    sessionStorage.userRole=="teacher"?
<>
{/* {setRole('teacher')} */}
    <TeacherSideBar>

<Routes>
<Route  path="/Teacher/FypIdeas" element={<TeacherFypIdeas/>} />
<Route path="/Supervisor/ProjectSummary" element={<SupervisorProjectSummary/>} /> 
 <Route path="/Supervisor/SupervisorPendingProposal" element={<SupervisorPendingProposal/>} />
<Route path="/Co-ordinator/ProposalSummary" element={<CoOrdinatorProposalSummary/>} /> 
</Routes>
</TeacherSideBar>
</>:sessionStorage.userRole=="fyp group"?
<>
{/* {setRole('fyp-group')} */}
<FypGroupSideBar>
<Routes>
<Route path="/FypGroup/FYPIdeas" element={<FypGroupTeacherFYPIdeas/>} />
<Route path="/FypGroup/ProjectProposal" element={<FypGroupProjectProposal/>} />
</Routes>
</FypGroupSideBar>
</>
:
    <>
{/* {setRole()} */}
    <Routes>
    <Route  path ="/" element= {<Home/>} />   
    <Route  path="/Login" element={<Login/>} />
    <Route  path="/Registration" element={<Registration/>} />
    <Route  path="/ForgotPassword" element={<ForgotPassword1/>} />
    </Routes>

    </>}

</Router>

    </>
  );
}

export default App;
