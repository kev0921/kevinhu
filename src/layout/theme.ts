import { extendTheme } from "@chakra-ui/react";

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
}

const theme = extendTheme({
  config,
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === "dark" ? "#111827" : "#f8fafc",
      },
      "::selection": {
        background: "rgba(66, 153, 225, 0.3)",
      },
    }),
  },
})

export default theme;
