const express=require('express');
const app=express();
const userRouter=require('./routes/user');
const accountRouter=require('./routes/account');
const mongoose=require('mongoose');
const DBURL="mongodb+srv://Shivam:Shivamrock@cluster0.baeqe26.mongodb.net/payment_wallet"
const JWTKEY="shivam@123";




const connet_db=async()=>{

    try{
        await mongoose.connect(DBURL);
        console.log('Database Connected');
    }
    catch{
        console.log('Database Connection Failed');
    }

}
connet_db();






app.use(express.json());
app.use('/user',userRouter);
app.use('/account',accountRouter)







app.listen(3000,()=>{
    console.log('Server Started');
})                                                     

module.exports={
    JWTKEY
};