const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
   return  jwt.sign({_id:_id},process.env.JWT_SECRET,{expiresIn:'1d'});// do not put sensetive data here like password or email or anything that can be used to identify the user
// the expiresIn is an option 
}
// login a user
const loginUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}
//uwu



//signup user
const signupUser = async (req, res) => {
  const {email, password} = req.body;

  try{
      const user = await User.signup(email, password);

      // create token 
      const token = createToken(user._id);
 
      res.status(200).json({email, token})
    } catch (error) {
      res.status(400).json({error: error.message})
    }

// res.json({message: 'signup user'});
};

module.exports = {
loginUser,
signupUser
};