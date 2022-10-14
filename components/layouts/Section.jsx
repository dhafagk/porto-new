import { Container } from "@chakra-ui/react";

const Section = (props) => {
  return (
    <Container
      as="section"
      maxW="container.xl"
      w="full"
      p="0"
      bgColor="initial"
      overflow="hidden"
      {...props}
    />
  );
};

export default Section;
