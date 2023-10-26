import { createApi } from "@reduxjs/toolkit/dist/query/react"
import { baseQueryWithReauth } from "./baseQueryWithReauth"

export const userAPI = createApi({
    reducerPath: "userAPI",
    baseQuery: baseQueryWithReauth,
    endpoints: (build) => ({
        fetchUser: build.query({
            query: (id) => ({
                url: `/user/users/${id}`
            }),
        }),
        fetchHistory: build.query({
            query: () => ({
                url: `/user/history`
            }),
        }),
    })
})