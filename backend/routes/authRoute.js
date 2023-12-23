const express=require('express');
const { signup,login } = require('../controllers/authControllers');
const authRouter=express.Router();


authRouter.route('/sign-up').post(signup)
authRouter.route('/log-in').post(login)



module.exports=authRouter