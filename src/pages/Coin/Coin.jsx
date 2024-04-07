import React from 'react'
import './Coin.css'
import { FaBitcoin } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";
import { SiTether } from "react-icons/si";

const Coin = () => {
  return (
      <div className='coinsec'>
          <div className="coinwall">
              <div className="coins">
                  <div className="btcoin">
                      <p className='btcsymbol'><FaBitcoin
                      className='symbtc'
                      />Bitcoin</p>
                  </div>
                  <div className="num">
                      <p>$67786.0</p>
                      <p className='rate'>+0.19% ↑ </p>
                  </div>
              </div>     

              <div className="coins">
                  <div className="btcoin">
                      <p className='btcsymbol'><FaEthereum
                      className='symeth'
                      />    Etherium</p>
                  </div>
                  <div className="num">
                      <p>$3324.28</p>
                      <p className='rate'>+0.95% ↑ </p>
                  </div>
              </div>
              
              <div className="coins">
                  <div className="btcoin">
                      <p className='btcsymbol'><SiTether
                      className='symusdt'
                      />    Tether</p>
                  </div>
                  <div className="num">
                      <p>$1.001</p>
                      <p className='rate'>+0.14% ↑ </p>
                  </div>
              </div>     
          </div>
         </div>
  )
}

export default Coin