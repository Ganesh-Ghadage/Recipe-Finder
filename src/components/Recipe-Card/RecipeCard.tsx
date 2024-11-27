import { Recipe } from "@/modal/Recipe"
import { Link } from "react-router-dom"

import { BiFoodTag } from "react-icons/bi";

function RecipeCard(recipe: Recipe) {
  return (
    <div className="bg-white rounded-xl text-black pb-2 flex flex-col justify-between hover:shadow-lg hover:shadow-black">
        <div className="mb-2">
          <img src={recipe.image} alt={recipe.title}
            className="rounded-t-xl object-fill w-full"
          />
          <h1 className="font-bold px-2">{recipe.title}</h1>
        </div>

        <div className="px-2">
          <div className="flex justify-between">
            <h1 className={`${recipe.vegetarian ? 'text-green-500' : 'text-red-600'} text-2xl`}> <BiFoodTag /> </h1>
            <Link to={`/recipe/${recipe.id}`}>
              <h1 className="text-blue-200 bg-blue-800 w-fit text-center px-2 rounded-full hover:text-blue-800 hover:bg-blue-200 overflow-hidden"
              >
                See Details
              </h1>
            </Link>
          </div>
          <div>
            <h1>💗 {recipe.aggregateLikes}</h1>
            <h1>⏱️{recipe.readyInMinutes} mins</h1>
          </div>
        </div>
    </div>
  )
}

export default RecipeCard