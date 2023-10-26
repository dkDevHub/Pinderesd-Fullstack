import { createSlice } from "@reduxjs/toolkit"
import { registration, login, logout, refresh } from "./AuthActionCreator"

const initialState = {
    isAuth: false,
    user: {},
    isLoading: true,
    error: null,
}

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        //reregistration reducers
        [registration.fulfilled.type]: (state, action) => {
            state.isLoading = false
            state.error = null
            state.user = action.payload.data.user
            state.isAuth = true
        },
        [registration.pending.type]: (state) => {
            state.isLoading = true
        },
        [registration.rejected.type]: (state,  action) => {
            state.isLoading = false
            state.error = action.payload
        },

        //login reducers
        [login.fulfilled.type]: (state, action) => {
            state.isLoading = false
            state.error = null
            state.user = action.payload.data.user
            state.isAuth = true
        },
        [login.pending.type]: (state) => {
            state.isLoading = true
        },
        [login.rejected.type]: (state,  action) => {
            state.isLoading = false
            state.error = action.payload
        },

        //logout reducers
        [logout.fulfilled.type]: (state, action) => {
            state.isLoading = false
            state.error = null
            state.user = {}
            state.isAuth = false
        },
        [logout.pending.type]: (state) => {
            state.isLoading = true
        },
        [logout.rejected.type]: (state,  action) => {
            state.isLoading = false
            state.error = action.payload
        },

        //refresh reducers
        [refresh.fulfilled.type]: (state, action) => {
            state.isLoading = false
            state.error = null
            state.user = action.payload.data.user
            state.isAuth = true
        },
        [refresh.pending.type]: (state) => {
            state.isLoading = true
        },
        [refresh.rejected.type]: (state,  action) => {
            state.isLoading = false
            state.error = action.payload
        },

    }
})

export default AuthSlice.reducer