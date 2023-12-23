const app=require('./app')
const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config()
async function main(){
  await mongoose.connect(process.env.CONN_STR)
}

main().then(()=>{
  console.log('db connection is successful')
})
.catch((err)=>{
  console.log(err)
})





app.listen(3000,()=>{
  console.log('server is started')
})