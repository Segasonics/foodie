import { create } from "zustand";
import axios from "axios";


const API_URL = import.meta.env.MODE === "development" ? "http://localhost:8000/api/v1/recipes" : "/api/v1/recipes";

export const useRecipeStore=create((set)=>({
    recipes:[],
    loading:false,

    setRecipes:(recipes)=>set({recipes}),

    createRecipes:async(recipeData)=>{
        set({loading:true});
        try {
            const res=await axios.post(`${API_URL}/create-recipe`,recipeData);
            console.log(res.data)
            set({
				recipes: [...recipes, res?.data.recipe],
				loading: false,
			});
        } catch (error) {
           set({loading:false});
           console.log(error?.response?.data.message)
        }
    },
    getRecipesByCategory:async(category)=>{
        set({loading:true});
        try {
            const res = await axios.get(`${API_URL}/recipe/${category}`);
            set({recipes:res.data.recipes,loading:false})
        } catch (error) {
            set({loading:false});
            console.log(error.response.data.message)
        }
    },
    getLimitedRecipes:async()=>{
        set({loading:true});
        try {
            const res = await axios.get(`${API_URL}/recipe-limit`);
            set({recipes:res.data.recipes,loading:false})
        } catch (error) {
            set({loading:false});
            console.log(error.response.data.message)
        }
    },
    getFeaturedRecipes:async()=>{
        set({loading:true});
        try {
            const res = await axios.get(`${API_URL}/featuredRecipe`);
            set({recipes:res.data.featuredRecipes,loading:false})
        } catch (error) {
            set({loading:false});
            console.log(error.response.data.message)
        }
    },
    // getLimitedRecipesByCategory:async(category)=>{
    //     set({loading:true});
    //     try {
    //         const res = await axios.get(`${API_URL}/limitedcatrecipes/${category}`);
    //         set({recipes:res.data.recipes,loading:false})
    //     } catch (error) {
    //         set({loading:false});
    //         console.log(error.response.data.message)
    //     }
    // },

}))