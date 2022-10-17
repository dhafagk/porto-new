import { Box } from "@chakra-ui/react";
import { Card } from "../utils";

const Main = (props) => {
  return (
    <Box px={{ base: 4 }} pt={{ base: 10 }} {...props} id="work">
      <Card />
      <Card />
      <Card />
      <Card />
    </Box>
  );
};

export default Main;
