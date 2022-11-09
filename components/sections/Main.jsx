import { Box } from "@chakra-ui/react";
import { Card } from "../utils";
import projects from "../../data/data.json";

const Main = (props) => {
  return (
    <Box px={{ base: 4 }} pt={{ base: 10 }} {...props} id="work">
      {projects?.map((project) => (
        <Card key={project.id} {...project} />
      ))}
    </Box>
  );
};

export default Main;
