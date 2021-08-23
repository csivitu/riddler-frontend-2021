import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        username: '',
        token: ''
    },
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload.username
        },
        setToken: (state, action) => {
            state.token = action.payload.token
        },
        logout: (state, __) => {
            state.username = ''
            state.token = ''
        },
    },
})

// Action creators are generated for each case reducer function
export const { setUsername, setToken, logout } = authSlice.actions

export default authSlice.reducer