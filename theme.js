import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const fonts = { heading: `'DM Sans', monospace`, body: `'Inter', sans-serif` };

const theme = extendTheme({
  // semanticTokens: {
  //   colors: {
  //     text: {
  //       default: "#16161D",
  //       _dark: "#ade3b8",
  //     },
  //     heroGradientStart: {
  //       default: "#7928CA",
  //       _dark: "#e3a7f9",
  //     },
  //     heroGradientEnd: {
  //       default: "#FF0080",
  //       _dark: "#fbec8f",
  //     },
  //   },
  //   radii: {
  //     button: "12px",
  //   },
  // },
  colors: {
    black: "#181717",
  },

  fonts,
});

export default theme;
