import { Flex, HStack, Link, Spacer } from "@chakra-ui/react";
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
        <Link href="https://github.com/dhafagk" isExternal>
          Github
        </Link>
        <Link href="https://www.linkedin.com/in/dhafagk/" isExternal>
          Linkedin
        </Link>
        <Link href="https://www.instagram.com/dhafageka/" isExternal>
          Instagram
        </Link>
      </HStack>
    </Flex>
  );
}

export default Footer;
