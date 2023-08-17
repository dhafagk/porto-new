import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";

function HeroAbout() {
  return (
    <>
      <VStack spacing="10" pr="5">
        <Text as={Heading}>
          Hi I&apos;m Dhafa Gustiadi Kurniawan, Frontend Developer.
        </Text>
        <Text fontSize="xl" color="gray.600">
          My passion lies in solving real-world problems and create beautiful
          app/website and communicating complex ideas to non-technical
          stakeholders. I am able to jump across verticals to deliver
          high-performence app solution. <br />
          <br />
          Now I&apos;m an interactive IT student in Bandung ⏤ currently
          freelancing and seeking job opportunities.
        </Text>

        <VStack pt="20" spacing="16">
          <HStack alignItems="baseline" gap={{ base: 5, md: 10 }}>
            <Text whiteSpace="nowrap" textDecoration="underline" minW="150px">
              Main Skills
            </Text>
            <VStack alignItems="baseline" spacing="10">
              <Text>
                Javascript, Typescript, React, React Native, Next Js, React
                Query, Redux, Zustand, PHP, Wordpress, Laravel, Figma, Git
              </Text>
            </VStack>
          </HStack>

          <HStack alignItems="baseline" gap={{ base: 5, md: 10 }}>
            <Text whiteSpace="nowrap" textDecoration="underline" minW="150px">
              Personal Interests
            </Text>
            <VStack alignItems="baseline" spacing="10">
              <Text>
                Node Js, Python, Data Science, Hosting, Linux, Blockchain,
                Metaverse, Shares (Finance)
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
        mb="10"
      >
        <Image src="photo.jpg" alt="" objectFit="cover" />
      </Box>
    </>
  );
}

export default HeroAbout;
