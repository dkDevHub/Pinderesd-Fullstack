import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/AuthSlice"
import componentsReducer from "./reducers/ComponentsStateSlice"
import { postAPI } from "../services/PostService";
import { userAPI } from "../services/UserService";
import { statsAPI } from "../services/StatsService";

const rootReducer = combineReducers({
    authReducer,
    componentsReducer,
    [postAPI.reducerPath]: postAPI.reducer,
    [userAPI.reducerPath]: userAPI.reducer,
    [statsAPI.reducerPath]: statsAPI.reducer
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(postAPI.middleware)
        .concat(userAPI.middleware)
        .concat(statsAPI.middleware),
    })
}