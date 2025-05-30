import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    lastLogin:{
        type:Date,
        default:Date.now
    },
    role:{
        type:String,
        enum:["customer","admin"],
        default:"customer"
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    role:{
    type:String,
    enum:["admin","customer"],
    default:"customer"
    },
    isSubscribed:{
    type:Boolean,
    default:false
    },
    customerId:{
    type:String,
    unique:true
    },
    resetPasswordToken:String,
    resetPasswordExpiresAt:Date,
    verificationToken:String,
    verificationTokenExpiresAt:Date
},{
    timestamps:true
})

export const User = mongoose.model('User',userSchema);
