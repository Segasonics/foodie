import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useRecipeStore } from '../store/recipeStore'
import CardsSkeleton from '../components/skeleton/CardsSkeleton'
import RecipesList from '../components/RecipesList'
import { useAuthStore } from '../store/authStore'

const CategoriesPage = () => {
  const { category } = useParams()
  const { getRecipesByCategory, recipes, loading } = useRecipeStore()
  const { user } = useAuthStore()

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
        <RecipesList recipes={recipes} isSubscribed={user?.isSubscribed} />
      ) : (
        <p className="text-center text-gray-600">No recipes found for this category.</p>
      )}
    </section>
  )
}

export default CategoriesPage
