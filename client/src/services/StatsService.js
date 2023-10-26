import { createApi } from "@reduxjs/toolkit/dist/query/react"
import { baseQueryWithReauth } from "./baseQueryWithReauth";

export const statsAPI = createApi({
    reducerPath: "statsAPI",
    baseQuery: baseQueryWithReauth,
    endpoints: (build) => ({
        fetchStats: build.query({
            query: (id) => ({
                url: `/stats/get/${id}`
            }),
        }),
        likePost: build.mutation({
            query: (postId) => ({
                url: `/stats/like/${postId}`,
                method: 'PUT',
            }) 
        }),
        savePost: build.mutation({
            query: (postId) => ({
                url: `/stats/save/${postId}`,
                method: 'PUT',
            }) 
        }),
    })
})