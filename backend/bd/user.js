const mongoose=require('mongoose');



const userSchema=mongoose.Schema({
    firstname:String,
    lastname:String,
    number:Number,
    username:String,
    password:String,
    
})


const user=mongoose.model('user',userSchema);


module.exports={
    user
}