import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {value: {id: 0, name: '', email: ''}},
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
        logout: (state) => {
            state.value = {id: 0, name: '', email: ''}
        }
    }
});

export const { login, logout } = userSlice.actions
export default userSlice.reducer;