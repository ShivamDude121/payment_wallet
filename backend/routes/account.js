
const { Router }= require("express");
const router=Router()
const{authMiddleware}=require('../middleware/account/auth')
const mongoose=require("mongoose");
const {account}=require('../bd/user')




router.get('/balance',authMiddleware,async (req,res,nxt)=>{
  
   const x= await account.find({userId:req.userId});
   const balance=x[0].balance;

   res.json({
    "balance":balance,
    status:400
   })

   
    
 
   
})

router.post('/transfer',authMiddleware,async (req,res)=>{
   try{
   const x=await account.findOne({userId:req.userId});
   const y=await account.findOne({userId:req.body.userId});
   
   const amount=req.body.amount;

   if(x.balance-amount<0){
      res.json({
         msg:"insufficent balance",
         status:403
      })
   }
   else{
      x.balance=x.balance-amount;
      y.balance=y.balance+amount;

      await x.save();
      await y.save();
      res.json({
         msg: "transaction sucessful",
         status:400
      })
   }
}
catch{
   res.json({
      msg:"something went wrong",
      status:403
   })
}
   

 


})



module.exports=router;