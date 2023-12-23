const express=require('express');
const authRoute = require('./routes/authRoute');
const globalErrorHandler=require('./controllers/errorControllers')
const app=express()
// ADD THIS
var cors = require('cors');
app.use(cors());
app.use(express.json());
app.use('/api/v1/user',cors(),authRoute)
app.use(globalErrorHandler)










module.exports=app