
const mongoose= require("mongoose");
const passportLocalMongoose= require('passport-local-mongoose');


const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    new_user_date:{
        type:Date,
        default:Date.now
    },
    messages:[
        {
        message:{
            type:String,
            required:true
        },
        date:{
            type:Date,
        default:Date.now
        }
      
    }
  ]
   
})

userSchema.plugin(passportLocalMongoose , {usernameField: "email" ,hashField:"password"});

const User=mongoose.model('user',userSchema);



module.exports= User;
