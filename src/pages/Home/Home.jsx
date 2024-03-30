import React from 'react'
import './Home.css'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'

const Home = () => {

  const handleSignOut = () => {
    signOut(auth).then(() => console.log('Sign Out')).catch((error) => console.log(error));
  }
  return (
    <div className='home'><h2>Home</h2>
    <button onClick={handleSignOut}>Sign Out</button>
    </div>
    
  )
}

export default Home