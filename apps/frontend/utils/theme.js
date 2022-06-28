import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
}

const styles = {
  global: (props) => ({
    nav: {
      // bg: mode("#f7e5c080", "#20202380")(props),
      // bg: mode("#fffcf7", "#20202380")(props),
    },
    body: {
      // bg: mode("#FDF0D5", "#1d1d21")(props),
    },
  }),
}

const theme = extendTheme({ config, styles })
export default theme
