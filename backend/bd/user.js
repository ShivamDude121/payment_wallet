const mongoose=require('mongoose');



const userSchema=mongoose.Schema({
    firstname:String,
    lastname:String,
    number:Number,
    username:String,
    password:String,
    
})


const user=mongoose.model('user',userSchema);


const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'user',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const account = mongoose.model('account', accountSchema);



module.exports={
    user,
    account
}