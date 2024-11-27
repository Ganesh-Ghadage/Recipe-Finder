import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { ErrorBox, IngredientsInput, Loader, RecipeCard } from "@/components";
import { setError } from "@/features/error/errorSlice";
import { setLoading } from "@/features/loading/loadingSlice";
import { setRecipe } from "@/features/recipe/recipeSlice";
import spoonacularAPIServices from "@/services/spoonacularAPIServices";
import { useEffect } from "react";
import { getFromCache, saveToCache } from "@/services/localStorageServces";
import useAbortController from "@/custom-hooks/useAbortController";
import { clearIngredients } from "@/features/ingredients/ingredientsSlice";

function WhatsInFridge() {
  const ingredients = useAppSelector((state) => state.ingredients.ingredients);
  const recipe = useAppSelector((state) => state.recipe.recipe);
  const isLoading = useAppSelector((state) => state.loading.loading);
  const errorMsg = useAppSelector((state) => state.error.error);

  const [abortController, createAbortController] = useAbortController();
  const dispatch = useAppDispatch();

  const searchRecipe = async (): Promise<void> => {
    const controller = createAbortController(); // Reset and get a new AbortController
    const key = ingredients.join(",+");
    const cachedData = getFromCache(key);

    if (cachedData) {
      dispatch(setRecipe(cachedData));
      return;
    }

    dispatch(setLoading(true));
    try {
      const recipes = await spoonacularAPIServices.getRecipeByIngredients(key, controller.signal);
      const ids = recipes.map((recp) => recp.id);

      const bulkRecipeInfo = await spoonacularAPIServices.getRecipeBulkInformation(ids, controller.signal);
      saveToCache(key, bulkRecipeInfo);

      dispatch(setRecipe(bulkRecipeInfo));
    } catch (error: any) {
      if (error.name !== "CanceledError") {
        dispatch(setError(error.message));
      }
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (ingredients.length === 0) {
      dispatch(setRecipe([]));
    }
  }, [ingredients, dispatch]);

  useEffect(() => {
    dispatch(clearIngredients())
  }, [])

  return (
    <div>
      <div>
        <IngredientsInput />
      </div>

      {ingredients.length > 0 && (
        <div className="flex flex-col items-center gap-2 mt-2">
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold text-primary-color">Your List</h1>
            <h1 className="text-lg font-semibold mb-2">{ingredients.join(", ")}</h1>
          </div>

          <button
            onClick={searchRecipe}
            className="bg-primary-color px-4 py-2 rounded-3xl font-bold text-[#e4f4f1] hover:bg-[#e4f4f1] hover:text-primary-color"
          >
            Search Recipe
          </button>
        </div>
      )}

      {isLoading ? (
        <Loader />
      ) : errorMsg ? (
        <ErrorBox />
      ) : (
        <div>
          <div className="grid gap-4 my-6 mx-4 grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {recipe.map((res) => (
              <RecipeCard {...res} key={res.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default WhatsInFridge;
