import { createApi } from "@reduxjs/toolkit/dist/query/react"
import { baseQueryWithReauth } from "./baseQueryWithReauth";

const postFormData = (post, file) => {
    const bodyFormData = new FormData();
    bodyFormData.append('picture', file);
    for (let key in post) bodyFormData.append(key, post[key]);
    return bodyFormData
}

export const postAPI = createApi({
    reducerPath: "postAPI",
    baseQuery: baseQueryWithReauth,
    endpoints: (build) => ({
        fetchAllPosts: build.query({
            query: () => ({
                url: `/post/posts`
            }),
        }),
        fetchPosts: build.query({
            query: (params) => ({
                url: `/post/posts?page=${params.page}&limit=${params.limit}&sort=${params.sort}`
            }),
        }),
        fetchPost: build.query({
            query: (id) => ({
                url: `/post/posts/${id}`
            }),
        }),
        fetchCollection: build.query({
            query: (arg) => {
                let params = ''
                if (!arg.name) params = { collection: arg.collection}
                else params = arg
                return ({
                    url: "/post/collection",
                    params
                })
            },
        }),
        createPost: build.mutation({
            query: ({post, file}) => {
                const bodyFormData = postFormData(post, file)
                
                return ({
                    url: `/post/posts`,
                    method: 'POST',
                    body: bodyFormData,
                    formData: true
                })
            },
        }),
    })
})