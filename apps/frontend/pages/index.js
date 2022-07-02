import Head from "next/head"

import {
  useGetPostsQuery,
  useCreatePostMutation,
} from "../redux/api/postsApiSlice"

import PostCard from "../components/PostCard"

import { Button, Container, Input } from "@chakra-ui/react"

const Home = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetPostsQuery()
  const [createPost] = useCreatePostMutation()

  const postsList = data?.map((post) => <PostCard key={post._id} post={post} />)

  const handleSubmit = (title, text, shortD, author) => {
    const newPost = {
      title: "app post!",
      shortDescription: "This is a test after adding SD",
      text: "Really really curious",
      hashtags: ["test", "first-one", "hehe", "edited"],
      createdBy: "Bysiu",
    }

    console.log(newPost)
    createPost(newPost)
  }

  return (
    <Container>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Blog app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Button
        onClick={() => {
          handleSubmit()
        }}
      >
        Add new post
      </Button>

      {isLoading ? "Loading" : null}
      {isSuccess ? postsList : null}
      {/* {isSuccess ? JSON.stringify(data) : null} */}
      {isError ? JSON.stringify(error) : null}
    </Container>
  )
}

export default Home
