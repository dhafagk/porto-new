import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Image, Link, Text, VStack } from "@chakra-ui/react";

function Post() {
  return (
    <>
      <VStack align="left" color="black" spacing="4" pb={{ base: 10, md: 0 }}>
        <Text fontSize="lg" fontWeight="bold">
          01 / PROJECT NAME
        </Text>
        <Text fontSize={{ base: "sm", md: "md" }}>
          Goblin concept digital sculpture with human-like skin. Learned a lot
          of quick tips and look development.
        </Text>
        <Text fontSize="sm" color="gray.500">
          Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in
          Mari, Rendered using Arnold.
        </Text>
        <Box mt={{ md: "auto !important" }}>
          <Link
            textDecoration="underline"
            fontSize={{ base: "sm", lg: "md" }}
            isExternal
          >
            Live preview from this project <ExternalLinkIcon mx="1" />
          </Link>
        </Box>
      </VStack>

      <Box
        maxW={{ md: "480px", lg: "580px" }}
        ml="auto"
        mr={{ md: 0 }}
        pl={{ md: 10 }}
      >
        <Image src="Thumbnail.png" alt="" objectFit="cover" />
      </Box>
    </>
  );
}

export default Post;
