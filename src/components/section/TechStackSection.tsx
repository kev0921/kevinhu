import React from "react";
import {
  Heading,
  Text,
  Grid,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import StackCard from "../StackCard";
import { techStacks } from "../../constant";
import { MotionBox } from "../../utils/motion";

const TechStackSection = () => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.3, type: "spring", stiffness: 200, damping: 20 },
      }}
    >
      <Box mb={4}>
        <Heading
          as="h2"
          fontSize={{ base: "22px", md: "26px", lg: "30px" }}
          fontWeight="700"
          letterSpacing="-0.02em"
        >
          Tech Stack
        </Heading>
        <Text
          fontSize="sm"
          fontWeight="500"
          color={useColorModeValue("gray.500", "whiteAlpha.500")}
          mt={1}
        >
          Tools and technologies I work with
        </Text>
      </Box>
      <Grid
        templateColumns="repeat(auto-fit, minmax(160px, 1fr))"
        gap={3}
      >
        {techStacks.map((stack, index) => (
          <MotionBox
            key={stack?.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                delay: 0.4 + index * 0.05,
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
          >
            <StackCard stack={stack} />
          </MotionBox>
        ))}
      </Grid>
    </MotionBox>
  );
};

export default TechStackSection;
