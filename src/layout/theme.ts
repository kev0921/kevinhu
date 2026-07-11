import { extendTheme } from "@chakra-ui/react";

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  fonts: {
    heading: "'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === "dark" ? "#0a0a14" : "#f0f2f5",
        color: props.colorMode === "dark" ? "whiteAlpha.900" : "gray.800",
        transition: "background 0.3s ease",
      },
      "::selection": {
        background: "rgba(120, 160, 255, 0.3)",
      },
    }),
  },
  colors: {
    glass: {
      dark: {
        bg: "rgba(255, 255, 255, 0.06)",
        bgHover: "rgba(255, 255, 255, 0.1)",
        border: "rgba(255, 255, 255, 0.12)",
        borderHover: "rgba(255, 255, 255, 0.2)",
      },
      light: {
        bg: "rgba(255, 255, 255, 0.55)",
        bgHover: "rgba(255, 255, 255, 0.72)",
        border: "rgba(255, 255, 255, 0.7)",
        borderHover: "rgba(255, 255, 255, 0.85)",
      },
    },
    accent: {
      purple: "#7c5cff",
      blue: "#5b9cff",
      teal: "#00c8c8",
      gradient: "linear-gradient(135deg, #7c5cff, #5b9cff)",
    },
  },
});

export default theme;
