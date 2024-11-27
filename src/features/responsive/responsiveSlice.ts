import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    isResponsive: false
}

export const responsiveSlice = createSlice({
    name: 'responsive',
    initialState,
    reducers: {
        toggleResponsive : (state) => {
            state.isResponsive = !state.isResponsive
        },
        setIsResponsive: (state, action: PayloadAction<boolean>) => {
            state.isResponsive = action.payload
        }
    }
})

export const {setIsResponsive, toggleResponsive} = responsiveSlice.actions

export default responsiveSlice.reducer