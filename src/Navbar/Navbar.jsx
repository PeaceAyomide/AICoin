import React, { useState }  from 'react'
import './Navbar.css'
import LOGOROBOT from '../Navbar/logorobot.png'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

const Navbar = () => {


  const handleSignOut = () => {
    signOut(auth).then(() => console.log('Sign Out')).catch((error) => console.log(error));
  }
  
    const [isOpen, setIsOpen] = useState(false);
    const closeNavbar = () => {
      setIsOpen(false);
    };

  return (
    <div className="Navbar">
    <span className="nav-logo"><img src={LOGOROBOT} alt="" /></span>
    <div className={`nav-items ${isOpen && "open"}`}>
      <a href="#home" onClick={closeNavbar}>Wallet</a>
      <a href="#about" onClick={closeNavbar}>About Us</a>
      <a href="#portfolio" onClick={closeNavbar}>Guide</a>
      <a href="#" onClick={handleSignOut}>Sign-Out</a>
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