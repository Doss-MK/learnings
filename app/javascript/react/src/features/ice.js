import { createSlice } from "@reduxjs/toolkit";

export const iceSlice = createSlice({
    name: 'ice',
    initialState: {value: {count: 0}},
    reducers: {
        addItem: (state, action) => {
            state.value.count += action.payload
        },
        buyIce: (state, action) => {
            state.value.count -= action.payload
        }
    }
})

export const { addItem, buyIce } = iceSlice.actions
export default iceSlice.reducer;