import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname:{type: String , required:true},
    userName:{type: String, require:true, unique: true},
    password:{type: String, require: true},
    role:{type:String}
})

export const User = mongoose.model('User', userSchema);