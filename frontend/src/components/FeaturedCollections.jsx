import {useEffect} from 'react'
import { useRecipeStore } from '../store/recipeStore'
import CardsSkeleton from './skeleton/CardsSkeleton';

const FeaturedCollections = () => {
    const {getFeaturedRecipes,recipes,loading}=useRecipeStore();
    const featureRecipes=async()=>{
        await getFeaturedRecipes()
    }
    useEffect(()=>{
        featureRecipes()
    },[])
  return (
    <>
      <section id='features' className="py-16 px-4 max-w-7xl mx-auto">
                <h2 className="text-4xl font-serif font-bold mb-2 text-center">Featured Collections</h2>
                <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Curated recipe collections for every occasion and craving</p>
               {loading?(<CardsSkeleton />):
               (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {recipes.map((recipe, index) => (
                        <div key={index} className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="h-64 relative overflow-hidden">
                                <img
                                    src={recipe.image}
                                    alt={recipe.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                                    <h3 className="text-2xl font-serif font-bold text-white mb-1">{recipe.title}</h3>
                                    <p className="text-white/80 text-sm">{recipe.length} recipes</p>
                                </div>
                            </div>
                            <div className="p-6 bg-white">
                                <p className="text-gray-600">{recipe.instructions}</p>
                                <div className="mt-4 flex justify-between items-center">
                                    <span className="text-sm text-gray-500">
                                        <i className="fas fa-utensils mr-1"></i> {recipe.category}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
               )}
            </section>
    </>
  )
}

export default FeaturedCollections
