import {
  Box,
  Flex,
  Spacer,
  Text,
  IconButton,
  Stack,
  HStack,
  Collapse,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

export default function Navbar(props) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Box bg="transparent" {...props}>
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          py={{ base: 10, md: 20 }}
          px={{ base: 4 }}
        >
          <Flex flex={{ base: 1 }}>
            <Link
              href="/"
              textAlign={{ base: "center", md: "left" }}
              fontFamily={"heading"}
              fontSize={{ base: "xl", xl: "2xl", "2xl": "3xl" }}
              color="black"
              fontWeight={"700"}
              _hover={{
                textDecoration: "none",
              }}
            >
              dhafagk.
            </Link>
            <Spacer />
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {NAV_ITEMS.map((navItem) => (
                <Link
                  key={navItem.label}
                  p={2}
                  href={navItem.href ?? "#"}
                  fontSize={{ base: "sm", xl: "md", "2xl": "xl" }}
                  fontFamily={"heading"}
                  fontWeight={"medium"}
                  color="black"
                  _hover={{
                    textDecoration: "none",
                    color: "gray.500",
                  }}
                >
                  {navItem.label}
                </Link>
              ))}
            </HStack>
          </Flex>
          <Flex
            flex="1"
            justify="end"
            align="center"
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <Stack as={"nav"} bg="initial" p={4} display={{ md: "none" }}>
            {NAV_ITEMS.map((navItem) => (
              <Stack onClick={onToggle} key={navItem.label} mt="-4">
                <Flex py={2}>
                  <Link
                    key={navItem.label}
                    href={navItem.href ?? "#"}
                    fontFamily={"heading"}
                    fontWeight={"medium"}
                    color="black"
                    _hover={{
                      textDecoration: "none",
                      color: "gray.500",
                    }}
                  >
                    {navItem.label}
                  </Link>
                </Flex>
              </Stack>
            ))}
          </Stack>
        </Collapse>
      </Box>
    </>
  );
}

const NAV_ITEMS = [
  {
    label: "Work",
    href: "/#work",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Playground",
    href: "#",
  },
  {
    label: "Contact",
    href: "/about#contact",
  },
];
