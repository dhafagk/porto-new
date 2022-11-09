import {
  Divider,
  SimpleGrid,
  Box,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

function Card({
  id = "",
  image = "",
  project_name = "",
  description = "",
  misc = "",
  demo_url = "",
  github_repo = "",
}) {
  return (
    <>
      <SimpleGrid
        gridTemplateColumns={{ base: "1fr", md: "1fr 2fr" }}
        gridTemplateRows="1fr"
      >
        <VStack align="left" color="black" spacing="4" pb={{ base: 10, md: 0 }}>
          <Text fontSize="lg" fontWeight="bold">
            {id} / {project_name}
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }}>{description}</Text>
          <Text fontSize="sm" color="gray.500">
            {misc}
          </Text>
          <Box mt={{ md: "auto !important" }}>
            <Link
              href={demo_url}
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
          <Image
            src={image}
            alt={project_name}
            fallbackSrc="Thumbnail.png"
            objectFit="cover"
          />
        </Box>
      </SimpleGrid>

      <Divider my="20" border="1px solid black !important" />
    </>
  );
}

export default Card;
