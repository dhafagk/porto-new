import { Box, SimpleGrid, Divider } from "@chakra-ui/react";
import { Contact, HeroAbout } from "./";

function Main(props) {
  return (
    <Box px={{ base: 4 }} {...props}>
      <SimpleGrid
        gridTemplateColumns={{ base: "1fr", md: "1.3fr 1fr" }}
        gridTemplateRows="1fr"
      >
        <HeroAbout />
      </SimpleGrid>

      <Divider my="20" border="1px solid black !important" />

      <Contact />
    </Box>
  );
}

export default Main;
