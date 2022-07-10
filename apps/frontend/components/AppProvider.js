import { ChakraProvider, Box, Container } from "@chakra-ui/react"

import { Provider } from "react-redux"

import Navbar from "./Layout/Navbar"
import Footer from "./Layout/Footer"

import { store } from "../redux/store"

const AppProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Box minH="100vh">
          <Navbar />
          <Container>{children}</Container>
          <Footer />
        </Box>
      </ChakraProvider>
    </Provider>
  )
}

export default AppProvider
