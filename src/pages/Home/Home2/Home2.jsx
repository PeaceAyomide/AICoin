import React from 'react'
import { GoRocket } from "react-icons/go";
import './Home2.css'
import { BiMoneyWithdraw } from "react-icons/bi";
import { FaRegNewspaper } from "react-icons/fa";
import { FaBitcoin } from "react-icons/fa";
import { IoChatbubbles } from "react-icons/io5";

const Home2 = () => {
  return (
      <div className="trialcontent">
          <div className="yourplan">
              Your Active Plan: <div className='freeplan'>Free Plan</div>

          </div>
          <div className="upgrade">
              <div className="ballicon">
              <GoRocket />
              </div><p>
              Upgrade Plans
          
              </p>  
            </div>
          <div className="therest">
              <div className="withdraw">
                  <div className="ballicon1">
                      <BiMoneyWithdraw/>
                  </div>
                  Withdraw
              </div>
              <div className="news">     <div className="ballicon2">
              <FaRegNewspaper/>
              </div>
             News
              </div>
              <div className="Coin">     <div className="ballicon3">
                  <FaBitcoin/>
              </div>
             Coin List
              </div>
              <div className="About">     <div className="ballicon4">
                  <IoChatbubbles/>
              </div>
             Chat With Us</div>
          </div>
      </div>
  )
}

export default Home2