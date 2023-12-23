


function globalErrorHandler(err,req,res,next){
  const statusCode=err.stastusCode||500;
  const status=err.status||"Error";
  res.status(statusCode).json({
    status:status,
    message:err.message
  })
}

module.exports=globalErrorHandler