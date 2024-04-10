import React, { useState, useEffect, useLayoutEffect, useRef }  from 'react'
import './Home.css'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'
import Robot from '../Home/robot.png'
import { GiWarPick } from "react-icons/gi";
import axios from 'axios';


const Home = () => {

  const [price, setPrice] = useState(null);
  const [isSent, setIsSent] = useState(false);
  const [number, setNumber] = useState(0.0);
  const [isIncrementing, setIsIncrementing] = useState(false);
  const timeoutRef = useRef(null);

  const incrementNumber = () => {
    setNumber(prevNumber => prevNumber + 0.0001);
    timeoutRef.current = setTimeout(incrementNumber, 3000); // Adjust the delay for slower incrementation
  };

  const handleButtonClick = () => {
    if (isIncrementing) {
      clearTimeout(timeoutRef.current);
      setIsIncrementing(false);
    } else {
      setIsIncrementing(true);
      incrementNumber();
    }
  };





  const handleClick = () => {
    setIsSent(!isSent);
  };


  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      try {
        const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
        setPrice(response.data.bpi.USD.rate);
        const rawPrice = response.data.bpi.USD.rate;
        const integerPrice = parseInt(rawPrice.replace(',', ''), 10); // Convert to integer
        setPrice(integerPrice);
   
      } catch (error) {
        console.error('Error fetching Bitcoin price:', error);
      }
    };

    // Fetch Bitcoin price initially
    fetchBitcoinPrice();

    // Fetch Bitcoin price every 60 seconds (or adjust the interval as needed)
    const interval = setInterval(fetchBitcoinPrice, 3000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);


  
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const handleSignOut = () => {
    signOut(auth).then(() => console.log('Sign Out')).catch((error) => console.log(error));
  }

  return (
    <div className='home'>
      <div className="homewall">
      <img src={Robot} alt="" />
        <div className="btcbalance">
          <h2>BTC Balance</h2>
          <p> {number.toFixed(4)}BTC</p>
        <div className='live'>
        <p>Live Price  <span class="price">{price ? `$${price}` : 'Loading...'}</span></p>
        </div> 
        <div className="btnmine">
            <button onClick={(e) => { handleButtonClick(); handleClick(); }}
              className={isSent ? 'Mining': 'StartMining'}
            >  {isSent ? (
              <>
                <span>Stop Mining</span>
                 
              </>
            ) : (
                  'Start Mining'
                  
            )}<GiWarPick className='axe' /></button>
       
        </div>
        </div>
  
      </div>
        </div>
  );
}

export default Home;
