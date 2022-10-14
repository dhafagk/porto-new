import { HStack, Text } from "@chakra-ui/react";

export default function Hero() {
  return (
    <HStack
      fontFamily={"heading"}
      wrap={{ base: "wrap", md: "nowrap" }}
      color={"black"}
      py={{ base: 20 }}
      px={{ base: 4 }}
      justifyContent="space-between"
    >
      <Text fontWeight={600} fontSize={{ base: "xl", md: "4xl" }}>
        Hello, I&apos;m
        <br /> Dhafa Kurniawan.
      </Text>
      <Text fontSize={{ base: "lg", md: "xl" }} color="#606060" maxW="2xl">
        I am an aspiring Frontend Developer who enjoys connecting the dots: be
        it ideas from different disciplines, people from different teams, or
        applications from different industries.
      </Text>
    </HStack>
  );
}
