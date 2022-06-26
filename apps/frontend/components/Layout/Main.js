import Head from "next/head"

import Footer from "./Footer"
import Navbar from "./Navbar"

import { Box, Container } from "@chakra-ui/react"

const Layout = ({ children }) => {
  return (
    <Box as="main" minH={"100vh"}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Patryk's blog" />
        <meta name="author" content="Patryk Byszek" />
        <Navbar />
        <Container>{children}</Container>
        <Footer />
      </Head>
    </Box>
  )
}

export default Layout
