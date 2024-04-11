import React, { useState }  from 'react'
import './Navbar.css'
import LOGOROBOT from '../Navbar/logorobot.png'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { Link } from 'react-router-dom';

const Navbar = () => {


  const handleSignOut = () => {
    signOut(auth).then(() => console.log('Sign Out')).catch((error) => console.log(error));
  }
  
  const [isOpen, setIsOpen] = useState(false);
  
  
    const closeNavbar = () => {
      setIsOpen(false);
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };
  

  return (
    <div className="Navbar">
    <span className="nav-logo"><img src={LOGOROBOT} alt="" /></span>
    <div className={`nav-items ${isOpen && "open"}`}>
      <Link to='/private' onClick={closeNavbar}>Wallet</Link>
      <Link  to='/private' onClick={() => { closeNavbar(); scrollToBottom(); }}>Dash Board</Link>
      <Link to='/upgrade' onClick={closeNavbar}>Upgrade</Link>
      <Link href="#" onClick={handleSignOut}>Sign-Out</Link>
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