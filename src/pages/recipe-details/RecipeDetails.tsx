import { useAppSelector } from "@/app/hooks"
import { useParams } from 'react-router-dom'
import parse from 'html-react-parser';
import { ErrorBox, Loader } from "@/components";

function RecipeDetails() {
    const {id} =  useParams()

    const recipeArr = useAppSelector((state) => state.recipe.recipe)  
    const isLoading = useAppSelector((state) => state.loading.loading)
    const errorMsg = useAppSelector((state) => state.error.error)

    const recipe = recipeArr.filter((val) => val.id == Number(id))[0]
    // console.log(recipe);

    const steps = recipe?.analyzedInstructions[0]?.steps.map((step) => step)

    if(isLoading) { 
      return (
        <>
          <Loader />
        </>
      )
    }
  
    if(errorMsg) {
      return (
        <>
          <ErrorBox />
        </>
      )
    }

  return (
    <div className="w-full grid lg:grid-flow-col grid-flow-row grid-cols-1 lg:grid-cols-4 mb-4">
      <div className="lg:col-span-3 lg:mr-4 flex flex-col">
        <div className="">
          <img src={recipe?.image} alt={recipe?.title}
            className="rounded-2xl w-full md:h-96 h-60 object-cover"
          />
          <h1 className="text-3xl font-bold mt-2 ml-2">{recipe?.title}</h1>
        </div>
        <div className="mt-4 flex flex-col gap-4">
          <div className="mb-2">
            <span className="text-xl font-bold">Summary: </span>
            <p className="pl-2">{parse(recipe?.summary)}</p>
          </div>
          
          <div className="mb-2">
            <span className="text-xl font-bold">Steps: </span>
            {steps.map((step, idx) => (
              <li className="ml-2 mb-4" key={idx}> 
                <span className="font-bold">Step {idx + 1}</span> : {step?.step}
                <div className="ml-4 grid grid-cols-1 sm:grid-cols-2 mt-2">
                  {step?.ingredients.length > 0 &&
                  <div className="col-span-1">
                    <p className="font-bold">Required Ingreingredients :</p>
                    {step?.ingredients.map((ingre, idx) => (
                      <p key={idx} className="ml-2">{ingre?.name}</p>
                    ))}
                  </div>}
                  {step?.equipment.length > 0 &&
                  <div className="col-span-1">
                    <p className="font-bold">Required Equipments :</p>
                    {step?.equipment.map((eqip, idx) => (
                      <p key={idx} className="ml-2">{eqip?.name}</p>
                    ))}
                  </div>}
                </div>
              </li>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:col-span-1 mb-4">
        <p className="text-2xl font-bold mb-2">Extra Details</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1">
          <div className="flex flex-col gap-1 mb-2 ml-2">
            <h1>💗 Likes: {recipe?.aggregateLikes}</h1>
            <h1>⏱️ Time to Prepare: {recipe?.readyInMinutes} mins</h1>
            <h1>👥 Serves: {recipe?.servings} People</h1>
            <h1>💲 Price: {recipe?.pricePerServing} </h1>
            <h1>⚕️ Health Score: {recipe?.healthScore} </h1>
            <h1>📝 Score: {recipe?.spoonacularScore.toFixed(2)} </h1>
          </div>

          <div className="flex flex-col gap-1 lg:my-4 ml-2">
            <h1>Vegan: {recipe?.vegan ? '✅' : '❌'}</h1>
            <h1>Vegetarian: {recipe?.vegetarian ? '✅' : '❌'}</h1>
            <h1>Healty: {recipe?.veryHealthy ? '✅' : '❌'}</h1>
            <h1>Dairy Free: {recipe?.dairyFree ? '✅' : '❌'}</h1>
            <h1>Gluten Free: {recipe?.glutenFree ? '✅' : '❌'}</h1>
            <h1>Popular: {recipe?.veryPopular ? '✅' : '❌'}</h1>
            <h1>Cheap: {recipe?.cheap ? '✅' : '❌'}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetails