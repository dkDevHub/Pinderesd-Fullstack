import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    bottomMenuIsActive: false,
    accountMenuIsActive: false,
    authModalIsActive: false,
    trendOrLatestSort: 'latest'
}

export const ComponentsStateSlice = createSlice({
    name: 'components_state',
    initialState,
    reducers: {
        setBottomMenuIsActive(state, action){
            state.bottomMenuIsActive = action.payload
        },
        setAccountMenuIsActive(state, action){
            state.accountMenuIsActive = action.payload
        },
        setAuthModalIsActive(state, action){
            state.authModalIsActive = action.payload
        },
        setTrendOrLatestSort(state, action){
            state.trendOrLatestSort = action.payload
        }
    },
})

export default ComponentsStateSlice.reducer
export const {setBottomMenuIsActive, setAccountMenuIsActive, setAuthModalIsActive, setTrendOrLatestSort} = ComponentsStateSlice.actions