import React, { useState, useLayoutEffect }  from 'react'
import './Transfer.css'

const Transfer = () => {
    const [copiedBtc, setCopiedBtc] = useState(false);
    const [copiedUsdt, setCopiedUsdt] = useState(false);
    const [copiedEth, setCopiedEth] = useState(false);

    const copyToClipboard = (text, setCopied) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
            })
            .catch((err) => {
                console.error('Failed to copy: ', err);
            });
    };

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
  return (
      <div className='transferpage'>
          <div className="transferwall">
              <div className="transferstuff">
                  <h3>Send To Address</h3>
                  <div className="transferwallet">
                      <div className="tbtc">
                          Btc Wallet
  <div className="containbtc">
  1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa
                          </div>
                          <div className="koin">
                          <button className='btncopy'
    onClick={() => copyToClipboard("1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa", setCopiedBtc)}>{copiedBtc ? 'Copied!' : 'Copy'}</button>     
                          <button className='confirm'>
                              Confrim Pay
                              </button> 
                          
                          </div>
                          </div>
                      <div className="tusdt">
                          Usdt Wallet
                          <div className="containudt">
                          0xdAC17F958D2ee523a2206206994597C13D831ec7
                          </div>
                          <div className="koin">
                          <button className='btncopy' onClick={() => copyToClipboard("0xdAC17F958D2ee523a2206206994597C13D831ec7", setCopiedUsdt)}>{copiedUsdt ? 'Copied!' : 'Copy'}</button>  
                          <button className='confirm'>
                              Confrim Pay
                              </button> 
                          </div>
                         </div>
                      <div className="tetherium">
                          Etherium Wallet
                          <div className="continethe">
                          0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B
                          </div>
                          <div className="koin">
                          <button className='btncopy'onClick={() => copyToClipboard("0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B", setCopiedEth)}>{copiedEth ? 'Copied!' : 'Copy'}</button>  
                              <button className='confirm'>
                              Confrim Pay
                              </button>  
                          </div>
                          </div>
                  </div> 
      </div>
          </div></div>
  )
}

export default Transfer