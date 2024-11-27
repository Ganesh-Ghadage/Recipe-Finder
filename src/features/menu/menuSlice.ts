import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { Menu } from '@/modal/Menu'

export interface menuState {
    menu: Menu[],
    category: string
}

const initialState: menuState = {
    menu: [],
    category: ''
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setMenu: (state, action: PayloadAction<menuState>) => {
            state.menu = action.payload.menu
            state.category = action.payload.category
        }
    }
})

export const {setMenu} = menuSlice.actions

export default menuSlice.reducer