import { createAsyncThunk } from "@reduxjs/toolkit"
import AuthService from "../../services/AuthService"

export const registration = createAsyncThunk(
    "auth/registration",
    async (regData, thunkAPI) => {
        try {
            const {username, email, password} = regData
            const res = await AuthService.registration(email, password, username)

            localStorage.setItem('token', res.data.accessToken);
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data?.message)
        }
    }
)

export const login = createAsyncThunk(
    "auth/login",
    async (loginData, thunkAPI) => {
        try {
            const {email, password} = loginData
            const res = await AuthService.login(email, password)

            localStorage.setItem('token', res.data.accessToken);
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data?.message)
        }
    }
)

export const logout = createAsyncThunk(
    "auth/logout",
    async (_, thunkAPI) => {
        try {
            const res = await AuthService.logout();
            localStorage.removeItem('token');
        } catch (error) {
            return thunkAPI.rejectWithValue('...')
        }
    }
)

export const refresh = createAsyncThunk(
    "auth/refresh",
    async (_, thunkAPI) => {
        try {
            const res = await AuthService.refresh();
            
            localStorage.setItem('token', res.data.accessToken);
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(null)
        }
    }
)

