import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: null,
    isLoading: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        LoginUser: (state, action) => {
            state.user = action.payload;
        }, 
        LogoutUser: (state) => {
            state.user = null
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload
        }
    }
})

export const { LoginUser, LogoutUser, setLoading } = userSlice.actions

export default userSlice.reducer