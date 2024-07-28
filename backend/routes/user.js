const { Router }= require("express");
const router=Router()
const {sign_up_middleware,log_in_middleware}=require('../middleware/user/usermidlleware')
const { sign_up_db }=require('../middleware/user/db_check')
const mongoose=require('mongoose');
const { user }=require("../bd/user");
const  JWTKEY ="shivam@123"
const jwt=require('jsonwebtoken')
router.post('/signup',sign_up_middleware,sign_up_db,async(req,res)=>{

    let x= await new user(req.body);
    let token=jwt.sign(req.body.username,JWTKEY)
    x.save().then(()=>{
        res.json({
            msg: "user added",
            token:token
        })
    }).catch(()=>{
        res.json({
            msg:'something went wrong'
        })
    })

   

})

router.post('/login',log_in_middleware,(req,res)=>{


    
    res.json({
        msg:"middleware working"
    })

})


module.exports=router