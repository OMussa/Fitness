import React from 'react'
import { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';
const LogIn = () => {
  let navigate = useNavigate()

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  async function handleButton(e){
    e.preventDefault()

    try{
        await axios.post("http://localhost:3000/login",{
          email,password
        })
        
    }
    catch(e){
              console.log(e)
    }
  }
  
  const handleEmail = (e) =>{
  setEmail(e.target.value)
  console.log(email)
  }
  
  const handlePassword = (e) =>{
    setPassword(e.target.value)
    console.log(password)
    }
  

  
    return (
      <div className='signup_container'>
      <div className='signup_form'>
          <h2>Log In</h2>
          <br />
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
              <button className='signup_btn'>Log in</button>
          </form>
         
          
       
      </div>
  </div>
  )
}

export default LogIn