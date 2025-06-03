

const mongoose =require('mongoose');

const userSchema=mongoose.Schema({

    name:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },

    password:{
        type:String,
        required:true,
      
    },

    role:{
        type:String,
        default:'user',
    }
})

const UserModel=mongoose.model('myUser',userSchema);

module.exports=UserModel;