import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import axios from "axios"


const getFetchBaseQuery = () => {
    return fetchBaseQuery({ 
        baseUrl: process.env.REACT_APP_API_URL,
        prepareHeaders: (headers, { getState }) => {
            headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`)
            return headers
        }
    })
}

const baseQuery = getFetchBaseQuery()

export const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
    if (result.error && result.error.status === 401) {
        const refreshResult = await axios.get(`${process.env.REACT_APP_API_URL}/user/refresh`, {withCredentials: true})
        localStorage.setItem('token', refreshResult.data.accessToken);
        result = await baseQuery(args, api, extraOptions)
    }
    return result
}