const { Router }= require("express");
const router=Router()
const {sign_up_middleware,log_in_middleware}=require('../middleware/user/usermidlleware')
const { sign_up_db }=require('../middleware/user/db_check')
const mongoose=require('mongoose');
const { user, account }=require("../bd/user");
const  JWTKEY ="shivam@123"
const jwt=require('jsonwebtoken')
router.post('/signup',sign_up_middleware,sign_up_db,async(req,res)=>{

    let x= await new user(req.body);
    const userId=x._id
    const jwtstring=JSON.stringify(userId);
    let token=jwt.sign(jwtstring,JWTKEY)

   
   try{
    
    

	 
    let y = new account({

        userId,
        balance: 1 + Math.random() * 10000

    })

    await y.save();

   }
   catch{
       res.json({
        msg:"account creation isuue"
       })
   }
  



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

router.post('/login',log_in_middleware,async (req,res)=>{

    let x=await user.find({$and:[{"username":req.body.username},{"password":req.body.password}]})
    
   
    if(x.length){
        const userId=x[0]._id
    const jwtstring=JSON.stringify(userId);
        let token=jwt.sign(jwtstring,JWTKEY)
        res.json({
            msg: "sussfully login",
            token:token
        })
    }
    else{
        res.json({
            msg: "user does not exist"

        })
    }
   
})

router.get("/find",async (req,res)=>{

    const filter=req.query.filter||"";
    console.log(filter)

    const query = {
        $or: [
            { firstname: { $regex: filter, $options: 'i' } },
            { lastname: { $regex: filter, $options: 'i' } }
        ]
    };

    
    const users = await user.find(query);

    
        res.json({
            users
        })

})


module.exports=router