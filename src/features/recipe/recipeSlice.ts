import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { Recipe } from '@/modal/Recipe'

export interface recipeState {
    recipe: Recipe[]
}

const initialState: recipeState = {
    recipe: []
}

export const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {
        setRecipe: (state, action: PayloadAction<Recipe[]>) => {
            state.recipe = [...action.payload]
        }
    }
})

export const {setRecipe} = recipeSlice.actions

export default recipeSlice.reducer