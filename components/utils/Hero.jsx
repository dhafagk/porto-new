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
      <Text
        fontWeight={600}
        fontSize={{
          base: "2xl",
          md: "3xl",
          lg: "4xl",
          "2xl": "5xl",
        }}
        pr="10"
      >
        Hello, I&apos;m
        <br /> Dhafa Kurniawan.
      </Text>
      <Text
        fontSize={{ base: "lg", lg: "xl", "2xl": "2xl" }}
        mx={{ base: "0 !important" }}
        py={{ base: 5, md: 0 }}
        color="gray.600"
        maxW={{ base: "auto", md: "lg", lg: "2xl" }}
      >
        I am an aspiring Frontend Developer who enjoys connecting the dots: be
        it ideas from different disciplines, people from different teams, or
        applications from different industries.
      </Text>
    </HStack>
  );
}
