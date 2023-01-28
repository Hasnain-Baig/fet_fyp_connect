import React from 'react'
import logo from '../images/logo.png';


export default function Navbar() {
  return (
<nav className="navbar navbarbf navbar-expand-lg  bg-primary-color  ">
  <div className="container-fluid navbar_icon ">
    <a className="navbar-brand text-primary-color" href="">
      <img src={logo} width="250" alt="" />
    </a>
  </div>
</nav>

  )
}
