import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const fonts = { heading: `'DM Sans', monospace`, body: `'Inter', sans-serif` };

const breakpoints = {
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "85em",
  "2xl": "96em",
};

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
  styles: {
    global: {
      "html, body": {
        background: "#F3F3F3",
      },
    },
  },

  fonts,
  breakpoints,
});

export default theme;
