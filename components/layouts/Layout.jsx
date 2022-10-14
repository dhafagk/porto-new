import { Box } from "@chakra-ui/react";
import Head from "next/head";

const Layout = ({ children, documentTitle }) => (
  <Box maxW="full" px={{ base: 0, md: "20px", lg: "100px" }}>
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <title>{documentTitle}</title>
    </Head>

    {children}
  </Box>
);

export default Layout;
