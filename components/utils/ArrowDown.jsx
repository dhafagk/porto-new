import { ArrowDownIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { Box, keyframes } from "@chakra-ui/react";

const ArrowDown = () => {
  const animationKeyframes = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-30px); }
  60% { transform: translateY(-15px); }
`;

  const bounce = `${animationKeyframes} 2s infinite`;
  return (
    <Box
      as={motion.div}
      animation={bounce}
      cursor="pointer"
      textAlign="center"
      position="absolute"
      bottom="34rem"
      right="50%"
    >
      <ArrowDownIcon w={8} h={8} color={"black"} />
    </Box>
  );
};

export default ArrowDown;
