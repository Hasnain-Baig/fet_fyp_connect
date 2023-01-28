import React from 'react'
import logo from '../images/logo.png';
import {Link,NavLink} from 'react-router-dom';


 
export default function HomeNavbar() {
    const navLinkStyles=({isActive})=>{
        console.log(isActive)
        return{
          backgroundColor:isActive?'#0DA049': '#011D3A',
          borderRadius:isActive? '10px':'none',

      
        }  
      }
  return (
<nav className="navbar navbarbf navbar-expand-lg  bg-primary-color  ">
  <div className="container-fluid navbar_icon">
    <Link className="navbar-brand text-primary-color" to={"/"}>
      <img src={logo} width="250" alt="" />
    </Link>

    <button className="navbar-toggler icon_Navbar" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>     
      <form className="d-flex" role="search">
      <ul className="navbar-nav me-auto  mb-2 mb-lg-0">
        <li className="nav-item" >
          <NavLink className="nav-link texthover px-3 text-primary-color mx-1"   style={navLinkStyles}  aria-current="page" to={'/'}>Home</NavLink>

         
        </li>
        <li className="nav-item">
          <NavLink className="nav-link texthover px-3 mx-1  text-primary-color"  style={navLinkStyles}   to={'/Login'}>Login </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link texthover px-3  text-primary-color"    style={navLinkStyles}  to={'/Registration'}>SignUp</NavLink>
        </li>
      </ul>     


 </form>
    </div>
  </div>
</nav>

  )
}
