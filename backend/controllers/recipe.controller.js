import { Recipe } from "../models/recipe.model.js";
import cloudinary from "../utils/cloudinary.js";

//create receipt controller
export const createReceipt = async (req, res) => {
    const { title, prepTime, image, instructions, category, ingredients } = req.body;
    try {
        if (!title || !prepTime || !image || !instructions || !category || !ingredients) {
            return res.status(400).json({ success: false, message: "All fields are required" })
        }
        const uploadResponse = await cloudinary.uploader.upload(image, { folder: "recipes" })
        const recipe = new Recipe({
            title,
            prepTime,
            image: uploadResponse.secure_url,
            instructions,
            category,
            ingredients,
        });

        await recipe.save();

        return res.status(200).json({
            success: true,
            recipe
        })
    } catch (error) {
        console.log("error in create receipt controller", error);
        res.status(400).json({ success: false, message: error.message })
    }
}

//fetch recipes by category
export const getRecipesByCategory = async (req, res) => {
    const { category } = req.params;
    try {
        const recipes = await Recipe.find({ category });
        if (!recipes) {
            return res.status(400).json({ success: false, message: "Could not find recipes for this category" })
        }
        return res.status(200).json({
            success: true,
            recipes
        })
    } catch (error) {
        console.log("error in getrecipesbycategory controller", error);
        res.status(400).json({ success: false, message: error.message })
    }
}

//get a limited number of recipes
export const getLimitedReceipts = async (req, res) => {
    console.log("getlimitedreceipts hit")
    try {
        const recipes = await Recipe.find({}).limit(6).exec();;
        console.log("limited recipes", recipes)
        if (recipes.length === 0) {
            return res.status(400).json({ success: false, message: "No recipes found" })
        }
        return res.status(200).json({
            success: true,
            recipes
        })
    } catch (error) {
        console.log("error in getLimitedReceipts controller", error);
        res.status(400).json({ success: false, message: error.message })
    }
}

//get featured recipes
export const getFeaturedRecipes = async (req, res) => {
    try {
        const featuredRecipes = await Recipe.find({ isFeatured: true }).lean();
        if (!featuredRecipes) {
            return res.status(400).json({ success: false, message: "No featured recipes found" })
        }
        return res.status(200).json({
            success: true,
            featuredRecipes
        })
    } catch (error) {
        console.log("error in getFeaturedRecipes controller", error);
        res.status(400).json({ success: false, message: error.message })
    }
}

export const getLimitedProductsByCategory = async (req, res) => {
    const { category } = req.params;
    try {
        const recipes = await Recipe.find({ category }).limit(4);
        if (!recipes) {
            return res.status(400).json({ success: false, message: "Could not find recipes for this category" })
        }
        return res.status(200).json({
            success: true,
            recipes
        })
    } catch (error) {
        console.log("error in getlimitedrecipesbycategory controller", error);
        res.status(400).json({ success: false, message: error.message })
    }
}