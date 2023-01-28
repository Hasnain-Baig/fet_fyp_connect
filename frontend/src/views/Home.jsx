import React from "react";

import SliderImg1 from '../images/slider1.jpg';
import SliderImg2 from '../images/slider2.jpg';
import SliderImg4 from '../images/slider4.jpg';
import HeroGroup from '../images/HeroGroup.jpg';
import logoColorful from '../images/logoColorful.png';
import FETLogo from '../images/faculty.png';
import UOSLogo from '../images/UOSLogo.png';
import HomeNavbar from '../components/Home_Navbar'

export default function Home() {
  return (
<>
<HomeNavbar/>
<div id="home">
      
      <div id="carouselExampleCaptions" className="carousel  slide carousel-fade" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active " data-bs-interval="4000">
      <img src={SliderImg4}  className="d-block w-100 " alt="..." width="250px" height="500px" />
      {/* <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div> */}
    </div>
    <div className="carousel-item" data-bs-interval="4000">
      <img src={SliderImg1} className="d-block w-100" alt="..." width="250px" height="500px" />
      {/* <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div> */}
    </div>
    <div className="carousel-item" data-bs-interval="4000">
      <img src={SliderImg2} className="d-block w-100" alt="..." width="250px" height="500px"/>
      {/* <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div> */}
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div className="content row">
  <div className="col-lg-6  col-md-6 col-sm-12 d-flex flex-column align-items-center justify-content-center" data-aos="fade-right">
    <img src={logoColorful} alt="imgLogo" height="20%" width="15%" className="mt-3" />
    <h3 className="mt-3 text-center text-primary">Welcome To FET FYP Connect</h3>
    <p className="px-5 py-1 text-center ">This is Faculty of Engineering & Technology's (FET) Final Year Project (FYP) process automation system. It provides a platform to connect Faculty members (Supervisors, Coordinator, Professors etc.) and Students to provide facilities to ease the FYP Process. 
The main aim is to make the management of the FYP process easy and prevent the loss of any information generated during the process.
<br />
{/* FYP Groups can simply register themselves and  then can use the facilities like submitting the proposal to supervisor/coordinator . <br/>
Supervisor and Coordinators also can register themselves to avail the facilities like viewing the proposal of FYP group, tracking FYP group's progress etc. */}
</p>

  </div>
  <div className="col-lg-6 col-md-6 col-sm-12" data-aos="fade-left">
    <img src={HeroGroup} alt="img" width="100%" height="100%" />
  </div>
</div>

<footer id="footer" className="text-white">
 
{/* <div className="">
<div className="row upper-footer p-2 ">
<div className="col-lg-8 d-flex justify-content-start align-items-center">
<img src={logo} width={240} height={60} alt="" />

</div>
<div className="contact-details-div col-lg-4 px-3 py-2">
<div><h5>Contact Us</h5></div>
<div className="contact-tile py-1">Faculty of Engineering and Technology, University of Sindh, Jamshoro Pakistan</div>
<div className="contact-tile py-1">+92-(0)22-9213181-90</div>
<div className="contact-tile py-1">info@iict.usindh.edu.pk</div>
<div className="contact-tile py-1"><a href="https://www.facebook.com/Institute-of-Information-and-Communication-Technology-Official-657606081027371/">Facebook</a></div>

</div>

</div>

</div> */}
 
  {/* <div className="bottom-footer py-3 text-center" >&copy;2022 © All Rights Reserved, Faculty of Engineering and Technology, University Of Sindh,Jamshoro</div> */}
  <div className="row d-flex align-items-center justify-content-center">
  <div className="col-lg-2 col-md-3 col-sm-2 d-flex justify-content-center">
    <img src={FETLogo} alt="img" className="Logos" height="60%" width="50%" />
  </div>
  <div className="col-lg-8 col-md-6 col-sm-8 text-center">
  &copy;2022 &copy; All Rights Reserved, Faculty of Engineering & Technology, University Of Sindh,Jamshoro
  </div>
  <div className="col-lg-2 col-md-3 col-sm-2 d-flex justify-content-center">
    <img src={UOSLogo} alt="img" className="Logos" height="70%" width="50%"/>
  </div>
  </div>
</footer>

    </div>
</>
  )
}
