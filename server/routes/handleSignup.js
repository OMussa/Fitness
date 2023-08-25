const express = require('express')
const { Schema } = require('mongoose')
const router = express.Router()
const Schemas = require('../models/User')
const bcrypt = require('bcrypt');


router.post('/signup', async (req, res) => {
    console.log('Received signup request') 
    let newUser;
    const { email, password  } = req.body; 
try{
    const existingUser = await Schemas.Users.findOne({email:email})

   if(existingUser) {
    res.status(400).json({ error: 'Email already exists! Try again' })
    return;
   } 
  
} catch(error){
    console.log(error);
    res.status(500).json({ error: 'Error checking email' });
    return;
}

    
    


   

try{
const hashPassword = await bcrypt.hash(password,10)  
console.log('password has been hashed ')

 newUser = new Schemas.Users({
    email:email,
     password : hashPassword 
    
    }); 

} catch(error){
console.log('error hashing password', error)
}

    

    try {
         await newUser.save();
        console.log('New user created!');
        res.json({ message: 'New user created!' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'User not added!' });
    }
});

module.exports = router;

