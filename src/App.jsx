import React, { useEffect, useState } from 'react';
import Home from './pages/Home/Home';
import LoginSign from './components/LoginandRegistration/LoginSign'
import Register from './components/Register/Register'
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { ProtectedRoute } from './protectedroute';
import { auth } from './firebase'
import Home2 from './pages/Home/Home2/Home2';
import UpgradePlans from './pages/UpgradePlans/UpgradePlans';
import Withdraw from './pages/Withdraw/Withdraw';
import News from './pages/News/News';
import Coin from './pages/Coin/Coin';
import Chat from './pages/Chat/Chat';
import Transfer from './pages/TransferPage/Transfer';



const App = () => {
  const [user, setUser] = useState(null);
const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsFetching(false);
        return;
      }

      setUser(null)
      setIsFetching(false)

    });
    return () => unsubscribe();
  }, []);

 
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Register user={user}></Register>} />
        <Route path='/login' element={ <LoginSign user={user}></LoginSign>} />
        <Route path='/private' element={ <ProtectedRoute user={user}><Navbar /><Home/><Home2/></ProtectedRoute>} />
        <Route path='/upgrade' element={
            <ProtectedRoute user={user}>
              <Navbar />
              <UpgradePlans />
            </ProtectedRoute>
          }
        />
        <Route path='/withdraw'   element={
            <ProtectedRoute user={user}>
              <Navbar />
              <Withdraw />
            </ProtectedRoute>
          } />
       <Route path='/news'   element={
            <ProtectedRoute user={user}>
              <Navbar />
              <News />
            </ProtectedRoute>
          } />
       <Route path='/coin'  element={
            <ProtectedRoute user={user}>
              <Navbar />
              <Coin />
            </ProtectedRoute>
          } />
    <Route path='/chat' element={
            <ProtectedRoute user={user}>
              <Navbar />
              <Chat />
            </ProtectedRoute>
          } />
            <Route path='/transfer' element={
            <ProtectedRoute user={user}>
              <Navbar />
              <Transfer />
            </ProtectedRoute>
          } />

      </Routes>
      
    </BrowserRouter>
  )
}



export default App;
