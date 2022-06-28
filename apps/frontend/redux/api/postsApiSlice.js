import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const apiUrl = process.env.API_URL || "http://localhost:4000"

// Define a service using a base URL and expected endpoints
export const postsApiSlice = createApi({
  //   reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPostsQuery } = postsApiSlice
