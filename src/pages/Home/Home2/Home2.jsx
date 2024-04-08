import React, { useLayoutEffect } from 'react'
import { GoRocket } from "react-icons/go";
import './Home2.css'
import { BiMoneyWithdraw } from "react-icons/bi";
import { FaRegNewspaper } from "react-icons/fa";
import { FaBitcoin } from "react-icons/fa";
import { IoChatbubbles } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Home2 = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
      <div className="trialcontent">
          <div className="yourplan">
              Your Active Plan: <div className='freeplan'>Free Plan</div>

          </div>
          <Link to='/upgrade' className='link-stye' style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="upgrade">
              <div className="ballicon">
              <GoRocket  className='rocket'/>
              </div><p>
              Upgrade Plans
          
              </p>  
              </div>
          </Link>
           <div className="therest">
           <Link to='/withdraw' className='link-stye' style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="withdraw">
                  <div className="ballicon1">
                      <BiMoneyWithdraw/>
                  </div>
                  Withdraw
                  </div>
              </Link>
              <Link to='/news' className='link-stye' style={{ textDecoration: 'none', color: 'inherit' }}>
        
              <div className="news">     <div className="ballicon2">
              <FaRegNewspaper/>
              </div>
             News
                  </div>
              </Link>
              <Link to='/coin' className='link-stye' style={{ textDecoration: 'none', color: 'inherit' }}>
        
              <div className="Coin">     <div className="ballicon3">
                  <FaBitcoin/>
              </div>
             Coin List
                  </div>
              </Link>
              <Link to='/chat' className='link-stye' style={{ textDecoration: 'none', color: 'inherit' }}>
        
              <div className="About">
                  <div className="ballicon4">
                  <IoChatbubbles/>
              </div>
             Chat With Us</div>
             </Link>
      
          </div>
        </div>
  )
}

export default Home2