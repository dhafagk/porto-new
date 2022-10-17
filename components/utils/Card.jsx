import { Divider, SimpleGrid } from "@chakra-ui/react";
import { Post } from "../sections";

function Card() {
  return (
    <>
      <SimpleGrid
        gridTemplateColumns={{ base: "1fr", md: "1fr 2fr" }}
        gridTemplateRows="1fr"
      >
        <Post />
      </SimpleGrid>

      <Divider my="20" border="1px solid black !important" />
    </>
  );
}

export default Card;
