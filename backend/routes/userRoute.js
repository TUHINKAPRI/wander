const express=require('express');
const UserRouter=express.Router();
const {update}=require('../controllers/userControllers')
const verifyUser=require('../utils/verifyUSer')

UserRouter.route('/update/:id').patch(verifyUser,update)



module.exports=UserRouter