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
        },
        clearMenu: (state) => {
            state.menu = []
            state.category = ''
        }
    }
})

export const {setMenu, clearMenu} = menuSlice.actions

export default menuSlice.reducer