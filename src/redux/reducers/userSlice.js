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
            const { uid, name, email } = action.payload;
            // state.user = action.payload;
            state.user = {
                uid,
                name, 
                email
            }
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