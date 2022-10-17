import { Flex, HStack, Link, Spacer, Text } from "@chakra-ui/react";
import React from "react";

function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <Flex
      px="4"
      pt={{ md: 20 }}
      pb="10"
      fontFamily="heading"
      direction={{ base: "column", md: "row" }}
      align={{ base: "center", md: "unset" }}
      gap="2"
    >
      <Link href="/" color="blue">
        Dhafa Gustiadi Kurniawan - {year}
      </Link>
      <Spacer />
      <HStack spacing="10">
        <Link>Github</Link>
        <Link>Linkedin</Link>
        <Link>Instagram</Link>
      </HStack>
    </Flex>
  );
}

export default Footer;
