import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from '../features/recipe/recipeSlice'
import responsiveReducer from "@/features/responsive/responsiveSlice";
import menuReducer  from "@/features/menu/menuSlice";
import loadingReducer from "@/features/loading/loadingSlice";
import errorReducer from '@/features/error/errorSlice';
import ingreReducer from "@/features/ingredients/ingredientsSlice"

export const store = configureStore({
    reducer: {
        recipe: recipeReducer,
        responsive: responsiveReducer,
        menu: menuReducer,
        loading: loadingReducer,
        error: errorReducer,
        ingredients: ingreReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch