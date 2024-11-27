import { useAppSelector } from '@/app/hooks'
import { ErrorBox, Loader, RecipeCard, SearchBox } from '@/components'
import { Recipe } from '@/modal/Recipe'

function CategoryPage() {
    const searchRecipeResult: Recipe[] = useAppSelector((state) => state.recipe.recipe)
    const isLoading = useAppSelector((state) => state.loading.loading)
    const errorMsg = useAppSelector((state) => state.error.error)


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
          
          <div className="grid gap-4 my-6 mx-4 grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {
            searchRecipeResult.map((res) => (
              <RecipeCard {...res} key={res.id} />
            ))
          }
        </div>
      </div>
    )
}

export default CategoryPage