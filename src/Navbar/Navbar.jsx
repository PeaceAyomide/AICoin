import React, { useState }  from 'react'
import './Navbar.css'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const closeNavbar = () => {
      setIsOpen(false);
    };

  return (
    <div className="Navbar">
    <span className="nav-logo">AI-mine</span>
    <div className={`nav-items ${isOpen && "open"}`}>
      <a href="#home" onClick={closeNavbar}>DashBoard</a>
      <a href="#about" onClick={closeNavbar}>UpGrade</a>
      <a href="#portfolio" onClick={closeNavbar}>Models</a>
      <a href="#contact" onClick={closeNavbar}>About</a>
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