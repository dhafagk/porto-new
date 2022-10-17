import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
  Divider,
  Spacer,
} from "@chakra-ui/react";

function Main(props) {
  return (
    <Box px={{ base: 4 }}>
      <SimpleGrid
        gridTemplateColumns={{ base: "1fr", md: "1.3fr 1fr" }}
        gridTemplateRows="1fr"
        {...props}
      >
        <VStack spacing="10" pr="5">
          <Text as={Heading}>
            Hi I&apos;m Dhafa Gustiadi Kurniawan, Frontend Developer.
          </Text>
          <Text fontSize="xl" color="gray.600">
            My work is mainly focused on third-dimension modeling, texturing and
            rendering. I like exploring the creatures with a touch of dark
            surrealism for characters and production. <br />
            <br />
            Now I&apos;m an interactive media design student in Istanbul ⏤
            currently freelancing and seeking internship opportunities.
          </Text>

          <VStack pt="20" spacing="16">
            <HStack alignItems="baseline" gap={{ base: 5, md: 10 }}>
              <Text whiteSpace="nowrap" textDecoration="underline" minW="150px">
                Main Software
              </Text>
              <VStack alignItems="baseline" spacing="10">
                <Text>
                  Pixologic ZBrush, Autodesk Maya, The Foundry Mari, Arnold
                  Renderer, Blender, Forger
                </Text>
                <Text>Adobe CC, Figma, Ableton</Text>
              </VStack>
            </HStack>

            <HStack alignItems="baseline" gap={{ base: 5, md: 10 }}>
              <Text whiteSpace="nowrap" textDecoration="underline" minW="150px">
                Main Skills
              </Text>
              <VStack alignItems="baseline" spacing="10">
                <Text>
                  Organic and Polygonal Modeling, UV Layout, Texturing,
                  Retopology, Ilustration, Sound Design
                </Text>
              </VStack>
            </HStack>
          </VStack>
        </VStack>
        <Box
          maxW="361px"
          maxH="530px"
          ml="auto"
          mr={{ base: "auto", md: 0 }}
          pl={{ md: 10 }}
          pt={{ base: 10, md: 0 }}
        >
          <Image src="pp.png" alt="" objectFit="cover" />
        </Box>
      </SimpleGrid>

      <Divider my="20" border="1px solid black !important" />

      <Flex
        id="contact"
        align="baseline"
        px={{ md: 10 }}
        pb="20"
        direction={{ base: "column", sm: "row" }}
        gap="5"
      >
        <Text fontSize={{ base: "lg", md: "xl" }} maxW={{ sm: "300px" }}>
          I am thrilled to answer to your next project{" "}
          <ArrowForwardIcon mx="2" color="black" />
        </Text>
        <Spacer />
        <VStack align="baseline">
          <Text fontSize={{ base: "lg", md: "xl" }}>dhafageka@gmail.com</Text>
          <Text fontSize="sm">View Resume</Text>
        </VStack>
      </Flex>
    </Box>
  );
}

export default Main;
