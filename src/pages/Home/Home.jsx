import React, { useState, useEffect }  from 'react'
import './Home.css'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'
import Robot from '../Home/robot.png'
import { GiWarPick } from "react-icons/gi";
const Home = () => {

 

  const handleSignOut = () => {
    signOut(auth).then(() => console.log('Sign Out')).catch((error) => console.log(error));
  }

  return (
    <div className='home'>
      <div className="homewall">
      <img src={Robot} alt="" />
        <div className="btcbalance">
          <h2>BTC Balance</h2>
          <p>0.00000000BTC</p>
        <div className='live'>
        <p>Live Price  <span class="price">$70455</span></p>
        </div> 
        <div className="btnmine">
        <button> Start Mining <GiWarPick className='axe'/></button>
       
        </div>
        </div>
  
      </div>
        </div>
  );
}

export default Home;
