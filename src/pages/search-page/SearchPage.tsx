import { useAppDispatch, useAppSelector} from '@/app/hooks'

import { Recipe } from '@/modal/Recipe'

import { ErrorBox, Loader, RecipeCard, SearchBox } from '@/components'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFromCache, saveToCache } from '@/services/localStorageServces'
import useAbortController from '@/custom-hooks/useAbortController'
import { setRecipe } from '@/features/recipe/recipeSlice'
import { setLoading } from '@/features/loading/loadingSlice'
import spoonacularAPIServices from '@/services/spoonacularAPIServices'
import { setError } from '@/features/error/errorSlice'

function SearchPage() {
    const searchRecipeResult: Recipe[] = useAppSelector((state) => state.recipe.recipe)
    const isLoading = useAppSelector((state) => state.loading.loading)
    const errorMsg = useAppSelector((state) => state.error.error)

    const [, createAbortController] = useAbortController()
    const dispatch = useAppDispatch();
    const {query = ''} = useParams()

    // console.log(query);

    const searchRecipe = async(searchQuery: string) => {
      if (searchQuery.trim()) {
        const controller = createAbortController()
        const key = searchQuery.trim().toLowerCase(); 
        const cachedData = getFromCache(key);

        if (cachedData) {
          // console.log('Serving from cache');
          dispatch(setRecipe(cachedData));
          return;
        }
    
        dispatch(setLoading(true));
    
        try {
          const results = await spoonacularAPIServices.searchRecipe(searchQuery, controller.signal);
          dispatch(setRecipe(results));
          saveToCache(key, results);
          // console.log(results);
        } catch (error: any) {
          if (error.name !== "CanceledError") {
            dispatch(setError(error.message));
          }
        } finally {
          dispatch(setLoading(false));
        }
      }
    }

    useEffect(() => {
      searchRecipe(query)
    },[query])

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
    <div>
        <SearchBox />

        { searchRecipeResult.length > 0 ? (
            <div className="grid gap-4 my-6 mx-4 grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {
                searchRecipeResult.map((res) => (
                  <RecipeCard {...res} key={res.id} />
                ))
              }
            </div> 
          ) : (
            <div>
              <h1 className='text-center mt-14 font-semibold text-xl text-primary-color'>Sorry... No Recipe Found</h1>
              <h1 className='text-center mt-1 text-lg font-semibold'>Search for somethingelse</h1>
            </div>
          )
        }
    </div>
  )
}

export default SearchPage