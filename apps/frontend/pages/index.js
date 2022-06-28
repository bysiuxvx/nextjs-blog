import Head from "next/head"
import Image from "next/image"

import { useGetPostsQuery } from "../redux/api/postsApiSlice"

const Home = () => {
  const { data, error, isLoading } = useGetPostsQuery()
  return (
    <div>
      yo
      {JSON.stringify(data)}
    </div>
  )
}

export default Home
