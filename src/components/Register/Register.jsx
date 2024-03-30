import React,{ useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import {Navigate} from 'react-router-dom'

const Register = ({user}) => {

    
const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const [errorMessage, setErrorMessage] = useState("");

    
const [isPasswordValid, setIsPasswordValid] = useState(true);
    
    
    const handleSignUp = () => {

     
        if (password.length <= 5) {
            setIsPasswordValid(false); // Set password validity state to false
            return; // Exit the function if password length is not satisfied
          }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      
      if (errorCode === "auth/email-already-in-use") {
        setErrorMessage("Email is already in use. Please try a different email.");
      } else {
        setErrorMessage(errorMessage);
      }
    
    });
};

const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => { setPassword(event.target.value); setIsPasswordValid(event.target.value.length > 5); }

    if (user) {
      return <Navigate to='/private'></Navigate>
  }

  return (
    <div className="signup">
    <div className="signContent">
        <h2>Registration</h2>
        <div className="signupContent2">
            <div className="email">
                <h5>Email</h5>
                <input type="text" name="email" id="email" placeholder='example@gmail.com' onChange={handleEmailChange}/>
            </div>
            <div className="password">
                <h5>Password</h5>
                      <input type="password" placeholder='Enter your Password' onChange={handlePasswordChange} />
                      {!isPasswordValid && <p className="error">Password must be more than 5 characters long.</p>}
       
            </div>
        </div>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <button type='button' onClick={handleSignUp}>
            Register
        </button>
        <div className="switchlogin" >
                  Already have an account? 
                  <Link to='/login' className='Link'>
                 Login here
                  </Link>
            </div>
    </div>
</div>
  )
}

export default Register