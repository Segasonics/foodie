import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useRecipeStore } from '../store/recipeStore'
import CardsSkeleton from '../components/skeleton/CardsSkeleton'

const CategoriesPage = () => {
  const { category } = useParams()
  const { getRecipesByCategory, recipes, loading } = useRecipeStore()

  useEffect(() => {
  if (category) {
    getRecipesByCategory(category)
  } else {
    console.log('No category specified');
  }
}, [category]);

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl text-center font-bold mb-6 pt-4 capitalize">{category} Recipes</h2>

      {loading ? (
        <CardsSkeleton />
      ) : recipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-4">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>

              {recipe.ingredients && (
                <>
                  <p className="text-sm text-gray-600 font-medium mb-1">Ingredients:</p>
                  <ul className="list-disc pl-5 text-sm text-gray-700 mb-2">
                    {recipe.ingredients.map((ingredient, i) => (
                      <li key={i}>{ingredient}</li>
                    ))}
                  </ul>
                </>
              )}

              {recipe.instructions && (
                <>
                  <p className="text-sm text-gray-600 font-medium mb-1">Instructions:</p>
                  <p className="text-sm text-gray-700 whitespace-pre-line">
                    {recipe.instructions}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No recipes found for this category.</p>
      )}
    </section>
  )
}

export default CategoriesPage

