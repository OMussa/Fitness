const mongoose = require('mongoose')
const Schema = mongoose.Schema


const userSchema = new Schema({
    email: {type:String, required:true , unique: [true,'email exist']},
    password: {type:String, required:true},
    entryDate: {type:Date, default:Date.now}

})

const Users = mongoose.model('users', userSchema, 'users')
const mySchemas = {'Users': Users}
module.exports= mySchemas