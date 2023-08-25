const express = require('express');

const bodyParser = require('body-parser');
const signupHandler = require('./routes/handleSignup')

const cors = require('cors');
const mongoose = require('mongoose')
require("dotenv").config({ path: "../.env" });



const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use('/',signupHandler)


//DB Connection
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser:true, useUnifiedTopology:true})
.then( () => {
  console.log('DB Connected')
})
.catch((err) =>{
  console.log(err)
})





app.listen(process.env.PORT , () => {
  console.log(`Server is running on ${process.env.PORT}, you better catch it!`);
});