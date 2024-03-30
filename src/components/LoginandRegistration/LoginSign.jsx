import React, { useState  } from 'react';
import './LoginSign.css';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import {Navigate} from 'react-router-dom'
import LoadingSpinner from '../../pages/Home/LoadingSpinner';

const LoginSign = ({user}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState(""); // New state for error message
    const [loading, setLoading] = useState(false);

    
    
    
    const handleSignIn = () => {
        setLoading(true); // Activate loading spinner when sign-in process starts

    
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      setErrorMessage("Wrong email or password. Please try again.");
 
    
    })
        
    .finally(() => {
       // Deactivate loading spinner after sign-in process completes
       setTimeout(() => {
        setLoading(false);
    }, 3000); // Set a delay of 3 seconds before hiding the spinner

    });
};

const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) =>  setPassword(event.target.value);
    
    if (loading) {
        return <LoadingSpinner />; // Display loading spinner when loading state is true
    }
   
    if (user) {
        return <Navigate to='/private'></Navigate>
    }
  
    return (
        <div className="signup">
            <div className="signContent">
                <h2>Login</h2>
                <div className="signupContent2">
                    <div className="email">
                        <h5>Email</h5>
                        <input type="text" name="email" id="email" placeholder='example@gmail.com' onChange={handleEmailChange}/>
                    </div>
                    <div className="password">
                        <h5>Password</h5>
                        <input type="password" placeholder='Enter your Password' onChange={handlePasswordChange} />
                    </div>
                    {errorMessage && <p className="error">{errorMessage}</p>} {/* Display error message if exists */}
             
                </div>
                <button onClick={handleSignIn}>
                    Login
                </button>
                <div className="switchlogin">
                    Don't have an account
                    <Link to='/' className='Link'>
                    <span>Register here</span>
                    </Link>
                    </div>
            </div>
        </div>
    );
};

export default LoginSign;
