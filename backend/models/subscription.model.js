import mongoose,{Schema} from "mongoose";

const subscriptionSchema = new Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    startDate:{
        type:Date,
        default:Date.now
    },
    endDate:{
        type:Date
    },
    plan:{
        type:String,
        default:"free"
    }
    
},{
    timestamps:true
})

export const Subscription= mongoose.model('Subscription',subscriptionSchema)