import React, { useState }  from 'react'
import './Navbar.css'
import LOGOROBOT from '../Navbar/logorobot.png'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const closeNavbar = () => {
      setIsOpen(false);
    };

  return (
    <div className="Navbar">
    <span className="nav-logo"><img src={LOGOROBOT} alt="" /></span>
    <div className={`nav-items ${isOpen && "open"}`}>
      <a href="#home" onClick={closeNavbar}>DashBoard</a>
      <a href="#about" onClick={closeNavbar}>UpGrade</a>
      <a href="#portfolio" onClick={closeNavbar}>Models</a>
      <a href="#contact" onClick={closeNavbar}>Sign-Out</a>
    </div>
    <div
      className={`nav-toggle ${isOpen && "open"}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="bar"></div>
    </div>
  </div>
  )
}

export default Navbar