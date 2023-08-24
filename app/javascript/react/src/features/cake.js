import { createSlice } from "@reduxjs/toolkit";

export const cakeSlice = createSlice({
    name: 'cake',
    initialState: {value: {count: 0}},
    reducers: {
        addItem: (state, action) => {
            state.value.count += action.payload
        },
        buyCake: (state, action) => {
            state.value.count -= action.payload
        }
    }
})

export const { addItem, buyCake } = cakeSlice.actions
export default cakeSlice.reducer;