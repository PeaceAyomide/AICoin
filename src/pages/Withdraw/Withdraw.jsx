import React, { useLayoutEffect }  from 'react'
import'./Withdraw.css'


const Withdraw = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
      <div className='withdrawsection'>
          <div className="withdrawwalls">
              <div className="minimumwithdraw">
                  <h5>Minimum Withdraw
                  </h5>
                      <div className="btcwithdraw">
                      <p>0.05000000
                          BTC
                          </p>
                      </div>
                  
              </div>
              <div className="enterinfo">
              <div className="enterbtc">
                  BTC
                  <input type="text" placeholder='Enter BTC'style={{ outline: 'none' }} />
              </div>
              <div className="enterwallet">
                      Wallet Address 
                      <input type="text" placeholder='Paste Wallet Adress' style={{ outline: 'none' }}/>
                      
              </div>
           
              </div>
              <div className="btnwithdraw">
                  Amount and request will manually verify and proceed 
                  <button>Withdraw</button>
              </div>
                 </div>
    </div>
  )
}

export default Withdraw