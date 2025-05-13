import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    prepTime:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    instructions:{
        type:[String],
        required:true
    },
    category:{
        type:String,
        required:true
    },
    ingredients:{
        type:[String],
        required:true
    },
    isFeatured:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})

export const Recipe =mongoose.model('Recipe',recipeSchema);
