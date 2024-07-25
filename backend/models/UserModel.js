const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const schema = mongoose.Schema;

const userSchema = new schema({
    email: {
        type: String,
        required: true,
        unique: true, // security layer
        trim: true,
        minlength: 1
    },
    password: {
        type: String,
        required: true,
        minlength: 1
    }
});

//static signup method

userSchema.statics.signup = async function(email, password) {

    //validation

    if (!email || !password){
        throw Error('All fields must be filled');
        res.status(400).json({error: 'All fields must be filled'})
    }
    if(!validator.isEmail(email)){
        throw Error('Invalid email');
        res.status(400).json({error: 'Email is invalid'})
    }
    // if(!validator.isStrongPassword(password)){
    //    throw Error('Password must be at least 8 characters long, and contain at least one uppercase letter, one lowercase letter, one number and one special character');
    //  }
    //sitll wrokin in it






//  this key word doesnt work with arrow function
    const exists = await this.findOne({email})
  //this is a reference to the model object
 
  if(exists){
    throw  Error('Email already exists')
 }

 const salt = await bcrypt.genSalt(10);// used await  because it takes time by design
 const hash = await bcrypt.hash(password, salt);

 const user = await this.create({email, password: hash}); 

 return user;
}


// static login method
userSchema.statics.login = async function(email, password) {

    if (!email || !password) {
      throw Error('All fields must be filled')
    }
  
    const user = await this.findOne({ email })
    if (!user) {
      throw Error('Incorrect email')
    }
  
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
      throw Error('Incorrect password')
      res.status(400).json({error: 'Incorrect password'})
    }
  
    return user
  }

module.exports = mongoose.model('User', userSchema); //export the model object
