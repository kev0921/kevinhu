import React from "react";
import {
  Box,
  Image,
  Text,
  Stack,
  Center,
  useColorModeValue,
  Tag,
  LinkBox,
} from "@chakra-ui/react";
import { MotionBox } from "../utils/motion";
import { Project } from "../types/project";

interface ISideProjectCard {
  project: Project;
}

export const SideProjectCard: React.FC<ISideProjectCard> = ({ project }) => (
  <MotionBox whileHover={{ y: -5 }}>
    <Center py={6}>
      <LinkBox
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"xl"}
        rounded={"lg"}
        mx={5}
        overflow={"hidden"}
        minH="26rem"
        _hover={{
          cursor: "pointer",
          boxShadow: "0 12px 40px rgba(66, 153, 225, 0.3)",
        }}
        transition="box-shadow 0.3s ease"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        onClick={() => {
          project.link && window.open(project.link);
        }}
      >
        <Box>
          <Image
            src={project.imageUrl}
            objectFit={"cover"}
            maxH={"210px"}
            h={"210px"}
            w="100%"
          />
        </Box>
        <Stack mb={3} px={6}>
          <Text
            mt={3}
            bgGradient="linear(to-r, blue.400, purple.500)"
            bgClip="text"
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"lg"}
            letterSpacing={1.1}
          >
            {project?.name}
          </Text>
          <Text color={"gray.500"}>{project?.summary}</Text>
        </Stack>
        <Box px={6} py={3}>
          {/* Add your tags here */}
          {project.tech.map((tech) => (
            <Tag size="sm" padding="0 5px" key={tech} mx={1} colorScheme="blue" variant="subtle">
              {tech}
            </Tag>
          ))}
        </Box>
      </LinkBox>
    </Center>
  </MotionBox>
);
