const express=require('express');
const app=express();
const userRouter=require('./routes/user');

const JWTKEY="shivam@123";

app.use(express.json());
app.use('/user',userRouter);








app.listen(3000,()=>{
    console.log('server started');
})                                                     

module.exports=JWTKEY;