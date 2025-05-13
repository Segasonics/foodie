import express from 'express'
import { createReceipt, getFeaturedRecipes, getLimitedProductsByCategory, getLimitedReceipts, getRecipesByCategory } from '../controllers/recipe.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.route('/create-recipe').post(verifyToken,createReceipt);
router.route('/recipe-limit').get(getLimitedReceipts);
router.route('/featuredRecipe').get(getFeaturedRecipes);
//router.route('/limitedcatrecipes/:category').get(getLimitedProductsByCategory)


router.route('/recipe/:category').get(getRecipesByCategory);

export default router