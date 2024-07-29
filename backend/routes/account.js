
const { Router }= require("express");
const router=Router()
const{authMiddleware}=require('../middleware/account/auth')
const mongoose=require("mongoose");
const {account}=require('../bd/user')




router.get('/balance',authMiddleware,async (req,res,nxt)=>{
  
   const x= await account.find({userId:req.userId});
   const balance=x[0].balance;

   res.json({
    "balance":balance
   })

   
    
 
   
})



module.exports=router;