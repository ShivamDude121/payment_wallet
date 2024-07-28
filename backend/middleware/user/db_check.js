const mongoose=require('mongoose');
const { user } = require('../../bd/user');



const sign_up_db=async(req,res,nxt)=>{

    let name=req.body.username;
    const x= await user.find({"username":name});
    if(x.length){
        res.json({
            msg:"user exitst"
        })
    }
    else{
        nxt();
    }

}

module.exports={
    sign_up_db
}