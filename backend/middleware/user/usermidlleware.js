const { z }=require('zod');

const signin_Schema=z.object({
    firstname:z.string().min(3).max(15),
    lastname:z.string().min(3).max(15),
    number:z.string().length(10),
    username:z.string().min(3).max(15),
    password:z.string().min(3).max(15),
})

const login_schema=z.object({
    username:z.string(),
    password:z.string(),
})



 function sign_up_middleware(req,res,nxt){
    try{
        signin_Schema.parse(req.body)
         nxt()
       
    }
    catch{
      
        res.json({
            msg:signin_Schema.safeParse(req.body).error.issues[0].message,
            path:signin_Schema.safeParse(req.body).error.issues[0].path,
            "status":403
        })

    }
}

function log_in_middleware(req,res,nxt){
  
   try{
    login_schema.parse(req.body)
    nxt()
   }
   catch{
    res.json({
        msg:login_schema.safeParse(req.body).error.issues[0].message,
        status:403
    })
   }
}


module.exports={
    sign_up_middleware,
    log_in_middleware
}