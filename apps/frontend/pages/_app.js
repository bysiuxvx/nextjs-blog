import { ChakraProvider } from "@chakra-ui/react"
import Layout from "../components/Layout/Main"

import { ApiProvider } from "@reduxjs/toolkit/dist/query/react"
import { postsSlice } from "../API/postsApiSlice"

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <ApiProvider api={postsSlice}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApiProvider>
    </ChakraProvider>
  )
}

export default MyApp
