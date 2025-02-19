import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Flex, Text, VStack, Spacer, Link } from "@chakra-ui/react";

function Contact() {
  return (
    <>
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
          <Link
            href="https://drive.google.com/file/d/1HJYXPounm-IkUoaLZ3G7GTbE2io3FYUT/view?usp=sharing"
            fontSize="sm"
            isExternal
          >
            View Resume
          </Link>
        </VStack>
      </Flex>
    </>
  );
}

export default Contact;
