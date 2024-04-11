import React, { useLayoutEffect }  from 'react'
import './UpgradePlans.css'
import { GrCubes } from "react-icons/gr";
import { IoIosSpeedometer } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { FaAward } from "react-icons/fa6";
import { FaRocket } from "react-icons/fa";
import { GiFrozenOrb } from "react-icons/gi";
import { Link } from 'react-router-dom';


const UpgradePlans = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className='upall'>
    <div className='upgradepage'>
<div className="holobox"><GrCubes className='cubes'/></div>
      <div className="box-upgrade">
        <div className="basicplan">
          <h4>Basic Plan</h4>
          <p>$1000 / <span>30Days</span></p>
        </div>
        <div className="durationbox">
          <div className="box1">
            <div className="icondura">
            <IoIosSpeedometer  className='speed'/>
            </div>
            <div className="boxc1">
            <h5>Speed</h5>
            <p>10 GH/s</p>
            </div>
            </div>
          <div className="box2">
            <div className="icondura2">
              <FaCalendarAlt/>
            </div>
            <div className="boxc2">
            <h5>Duration</h5>
            <p>30Days</p>
            
            </div>
            
            </div>
            
          </div>
          <Link to='/transfer' className='link-stye' style={{ textDecoration: 'none', color: 'inherit' }}>
       
          <button className='btnupgrade'>Upgrade Plans</button>
       </Link>
         </div>
       
      </div>

      <div className='upgradepage2'>
<div className="holobox2"><FaAward className='cubes'/></div>
      <div className="box-upgrade">
        <div className="basicplan">
          <h4>Classic Plan</h4>
          <p>$2000 / <span>30Days</span></p>
        </div>
        <div className="durationbox">
          <div className="box1">
            <div className="icondura">
            <IoIosSpeedometer  className='speed'/>
            </div>
            <div className="boxc1">
            <h5>Speed</h5>
            <p>20 GH/s</p>
            </div>
            </div>
          <div className="box2">
            <div className="icondura2">
              <FaCalendarAlt/>
            </div>
            <div className="boxc2">
            <h5>Duration</h5>
            <p>30Days</p>
            
            </div>
            
          </div>
          </div>
          <Link to='/transfer' className='link-stye' style={{ textDecoration: 'none', color: 'inherit' }}>
       
       
          <button className='btnupgrade'>Upgrade Plans</button>
      </Link>
      </div>
      </div>

      <div className='upgradepage3'>
<div className="holobox3"><FaRocket className='cubes'/></div>
      <div className="box-upgrade">
        <div className="basicplan">
          <h4>Plus Plan</h4>
          <p>$3000 / <span>30Days</span></p>
        </div>
        <div className="durationbox">
          <div className="box1">
            <div className="icondura">
            <IoIosSpeedometer  className='speed'/>
            </div>
            <div className="boxc1">
            <h5>Speed</h5>
            <p>50 GH/s</p>
            </div>
            </div>
          <div className="box2">
            <div className="icondura2">
              <FaCalendarAlt/>
            </div>
            <div className="boxc2">
            <h5>Duration</h5>
            <p>30Days</p>
            
            </div>
            
          </div>
          </div>
          <Link to='/transfer' className='link-stye' style={{ textDecoration: 'none', color: 'inherit' }}>
       
       
          <button className='btnupgrade'>Upgrade Plans</button>
      </Link>
      </div>
      </div>

      <div className='upgradepage4'>
<div className="holobox4"><GiFrozenOrb className='cubes'/></div>
      <div className="box-upgrade">
        <div className="basicplan">
          <h4>Premium Plan</h4>
          <p>$5000 / <span>30Days</span></p>
        </div>
        <div className="durationbox">
          <div className="box1">
            <div className="icondura">
            <IoIosSpeedometer  className='speed'/>
            </div>
            <div className="boxc1">
            <h5>Speed</h5>
            <p>10 GH/s</p>
            </div>
            </div>
          <div className="box2">
            <div className="icondura2">
              <FaCalendarAlt/>
            </div>
            <div className="boxc2">
            <h5>Duration</h5>
            <p>30Days</p>
            
            </div>
            
          </div>
          </div>
          <Link to='/transfer' className='link-stye' style={{ textDecoration: 'none', color: 'inherit' }}>
       
       
          <button className='btnupgrade'>Upgrade Plans</button>
      </Link>
      </div>
      
      </div>
      </div>
  )
}

export default UpgradePlans