const mongoose=require('mongoose');
const jwt=require('jsonwebtoked');
const userSchema=new mongoose.Schema({
    Name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
});

userSchema.methods.generateAuthToken = function(){
    
}