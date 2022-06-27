import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const apiUrl = process.env.API_URL || "http://localhost:4000"

export const postsSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
    }),
  }),
})

export const { useGetPostsQuery } = postsSlice
