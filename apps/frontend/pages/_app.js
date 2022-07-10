import AppProvider from "../components/AppProvider"

const MyApp = ({ Component, pageProps }) => {
  return (
    // Contains both chakra & redux provider + layout
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
