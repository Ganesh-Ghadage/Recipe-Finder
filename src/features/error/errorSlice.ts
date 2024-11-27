import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface errorInterface {
    error: string | null
}

const initialState: errorInterface = {
    error: null
}

const errorSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload
        }
    }
})

export const {setError} = errorSlice.actions

export default errorSlice.reducer