const { Router }= require("express");
const router=Router()
const {sign_up_middleware,log_in_middleware}=require('../middleware/user/usermidlleware')

router.post('/signup',sign_up_middleware,(req,res)=>{
    res.json({
        msg:"middleware working"
       
    })

})

router.post('/login',log_in_middleware,(req,res)=>{


    
    res.json({
        msg:"middleware working"
    })

})


module.exports=router