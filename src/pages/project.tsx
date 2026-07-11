import React from "react";
import {
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { sideProjects } from "../constant";
import { SideProjectCard } from "../components/SideProjectCard";
import { MotionBox } from "../utils/motion";

export default function ProjectPage() {
  const subtitleColor = useColorModeValue("gray.500", "whiteAlpha.500");

  return (
    <Container maxW="container.lg" mt={["6", "10"]} mb={["6", "10"]} px={[4, 4, 6]}>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 200, damping: 20 },
        }}
      >
        <VStack align="start" spacing={2} mb={6}>
          <Heading
            as="h1"
            fontSize={{ base: "28px", md: "36px" }}
            fontWeight="800"
            letterSpacing="-0.03em"
          >
            Projects
          </Heading>
          <Text fontSize="sm" fontWeight="500" color={subtitleColor}>
            Things I've built along the way
          </Text>
        </VStack>
      </MotionBox>

      {/* ── Project Grid ── */}
      <SimpleGrid columns={[1, 1, 2]} spacing={5}>
        {sideProjects.map((project, index) => (
          <MotionBox
            key={project.name}
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                delay: 0.2 + index * 0.06,
                type: "spring",
                stiffness: 200,
                damping: 22,
              },
            }}
          >
            <SideProjectCard project={project} />
          </MotionBox>
        ))}
      </SimpleGrid>
    </Container>
  );
}

