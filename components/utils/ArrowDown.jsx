import { ArrowDownIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { Box, keyframes, Link } from "@chakra-ui/react";

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
      textAlign="left"
      pl="3"
      pb="16"
    >
      <Link href="#work">
        <ArrowDownIcon w={10} h={10} color={"black"} />
      </Link>
    </Box>
  );
};

export default ArrowDown;
