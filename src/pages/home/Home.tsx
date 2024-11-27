import { ErrorBox, Loader, RecipeCard, SearchBox } from "@/components"

import { sampleRecipe } from '@/sampleData/sampleRecipe'

import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { useEffect } from "react"
import { setRecipe } from "@/features/recipe/recipeSlice"


function Home() {
  const recipe = useAppSelector((state) => state.recipe.recipe)
  const isLoading = useAppSelector((state) => state.loading.loading)
  const errorMsg = useAppSelector((state) => state.error.error)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setRecipe([...sampleRecipe]))
  }, [])

  if(isLoading) { 
    return (
      <div>
        <Loader />
      </div>
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
          recipe.map((res) => (
            <RecipeCard {...res} key={res.id} />
          ))
        }
      </div>

    </div>
  )
}

export default Home