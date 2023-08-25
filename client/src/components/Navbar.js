import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import LogIn from '../pages/LogIn';
import {useNavigate} from 'react-router-dom';

const Navbar = () => {
    let navigate = useNavigate()
    
const handleTitle = () =>{
    navigate("/home")
}

const handlePlan = () =>{
    navigate("/workout")
}

const handleContact = () =>{
    navigate("/contact")
}
const handleLogIn = () =>{
    navigate("/login")
}
const handleSignUp = () =>{
    navigate("/signup")
}



  return (
    <nav className="nav">
    <div className="left" onClick={handleTitle}>WorkFits</div>
    <ul className="right">
      <li onClick={handlePlan}>Plan</li>
      <li onClick={handleContact}>Contact</li>
      <li onClick={handleLogIn}>Log in</li>
      <li onClick={handleSignUp}>Sign up</li>
    </ul>
  </nav>
  )
}

export default Navbar