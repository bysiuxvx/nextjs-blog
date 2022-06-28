import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const apiUrl = process.env.API_URL || "http://localhost:4000"

export const postsApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  tagTypes: "Post",
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
      providesTags: "Post",
    }),
    getPostsById: builder.query({
      query: (id) => ({
        url: `posts/${id}`,
        providesTags: "Post",
      }),
    }),
    createPost: builder.query({
      query: (post) => ({
        url: "/posts/add",
        method: "POST",
        post,
      }),
      invalidatesTags: "Post",
    }),
    deletePost: builder.query({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: "Post",
    }),
    // editPost: builder.query({
    //   query: ( body) => ({
    //     url: `/posts/edit/${body.id}`,

    //   }),
    // }),
  }),
})

export const {
  useGetPostsQuery,
  useGetPostsByIdQuery,
  useCreatePostQuery,
  useDeletePostQuery,
} = postsApiSlice
