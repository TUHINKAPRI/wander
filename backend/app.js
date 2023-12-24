const express=require('express');
var cookieParser = require('cookie-parser')
const authRoute = require('./routes/authRoute');
const globalErrorHandler=require('./controllers/errorControllers')
const userRoute = require('./routes/userRoute');

const app=express()
// ADD THIS
var cors = require('cors');
app.use(cors());
app.use(cookieParser())
app.use(express.json());
app.use('/api/v1/user',cors(),authRoute)
app.use('/api/v1',userRoute)
app.use(globalErrorHandler)










module.exports=app