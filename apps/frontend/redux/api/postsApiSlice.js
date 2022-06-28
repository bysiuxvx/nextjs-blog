import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const apiUrl = process.env.API_URL || "http://localhost:4000"

export const postsApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
      providesTags: ["Post"],
    }),
    getPostsById: builder.query({
      query: (id) => ({
        url: `posts/${id}`,
        providesTags: ["Post"],
      }),
    }),
    createPost: builder.mutation({
      query: (body) => ({
        url: "/posts/add",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Post"],
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
    }),
    editPost: builder.mutation({
      query: (body) => ({
        url: `/posts/edit/${body.id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Post"],
    }),
  }),
})

export const {
  useGetPostsQuery,
  useGetPostsByIdQuery,
  useCreatePostMutation,
  useDeletePostMutation,
  useEditPostMutation,
} = postsApiSlice
