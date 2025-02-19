import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";

function HeroAbout() {
  return (
    <>
      <VStack spacing="10" pr="5">
        <Text as={Heading}>
          Hi I&apos;m Dhafa Gustiadi Kurniawan, Frontend Developer.
        </Text>
        <Text fontSize="xl" color="gray.600">
          Experienced Frontend Developer with 2+ years of expertise in building
          responsive and dynamic web and mobile applications. Proficient in
          React, TypeScript, and modern UI/UX principles. Skilled in improving
          app performance, creating smooth user navigation, and incorporating
          AI-powered features to enhance user experience. Adaptable,
          detail-oriented, and passionate about delivering high-quality user
          experiences.
        </Text>

        <VStack pt="20" spacing="16">
          <HStack alignItems="baseline" gap={{ base: 5, md: 10 }}>
            <Text whiteSpace="nowrap" textDecoration="underline" minW="150px">
              Main Skills
            </Text>
            <VStack alignItems="baseline" spacing="10">
              <Text>
                Javascript, Typescript, React, React Native, Next Js, Tanstack
                Query, Redux, Zustand, Git, Jira, Trello, Figma, AppCenter
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
