import React from 'react'
import { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  let navigate = useNavigate()

const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [errorMessage,setErrorMessage] = useState('')

const handleEmail = (e) =>{
setEmail(e.target.value)
console.log(email)
}

const handlePassword = (e) =>{
  setPassword(e.target.value)
  console.log(password)
  }

  async function handleButton(e){
    e.preventDefault()

    try{
        await axios.post("http://localhost:3001/signup",{
          email,password
        })
        setErrorMessage('')
        navigate('/home')
    }
    catch(error){
      console.log(error)
      if(error.response){
        console.log(error.response.data.error); // Log error message from the server
        setErrorMessage(error.response.data.error);
        
      }
    }
  }

  return (
    <div className='signup_container'>
    <div className='signup_form'>
        <h2>Sign Up</h2>
        <br />
        {errorMessage && <p className='error_message'>{errorMessage}</p>}
        <form onSubmit={handleButton}>
         
            <div>
                <label htmlFor="email">Email:</label><br />
                <input type="email" placeholder='Enter Email'
                onChange={handleEmail}/>
            </div>
            <br />
            <div>
                <label htmlFor="password">Password:</label><br />
                <input type="password" placeholder='********'
                onChange={handlePassword}/>
            </div>
            <button className='signup_btn'>Sign up</button>
        </form>
        <br></br>
        <p>Already have account?</p>
        <Link to="/login"><button>Login</button></Link>
     
    </div>
</div>
)
  
}

export default SignUp