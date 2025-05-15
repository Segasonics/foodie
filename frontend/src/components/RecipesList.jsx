import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore';

const RecipesList = ({ recipes, isSubscribed }) => {
  const navigate = useNavigate()
  const visibleRecipes = isSubscribed ? recipes : recipes.slice(0, 4);
  const {user}=useAuthStore()

  const handleSubscribe=()=>{
      if(!user){
        navigate('/login')
        toast.error("Login or Signup to subscribe");
      }else{
        navigate('/plans')
      }
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleRecipes.map((recipe, index) => (
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


      {!isSubscribed && recipes.length > 4 && (
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-yellow-600 via-indigo-600 to-blue-600 text-white p-10 shadow-xl text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
            Want Full Access to All {recipes.length}+ Recipes?
          </h3>
          <p className="text-lg md:text-xl font-medium mb-6">
            Subscribe now and unlock premium content, new meals weekly, and exclusive cooking tips!
          </p>
          <button
            onClick={handleSubscribe}
            className="text-lg cursor-pointer md:text-xl font-semibold px-8 py-4 bg-white text-yellow-700 rounded-full shadow hover:bg-gray-100 transition-all duration-200"
          >
            🔓 Unlock All Recipes
          </button>
        </div>
      )}
    </>
  )
}

export default RecipesList
