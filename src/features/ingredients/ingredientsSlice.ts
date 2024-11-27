import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ingreInter {
    ingredients: string[]
}

const initialState: ingreInter = {
    ingredients: []
}

const loadingSlice = createSlice({
    name: 'ingredients',
    initialState,
    reducers: {
        setIngredients: (state, action: PayloadAction<string>) => {
            state.ingredients.push(action.payload)
        },

        clearIngredients: (state) => {
            state.ingredients = []
        }
    }
})

export const {setIngredients, clearIngredients} = loadingSlice.actions

export default loadingSlice.reducer