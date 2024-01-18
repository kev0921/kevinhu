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
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        mx={5}
        overflow={"hidden"}
        minH="26rem" // Set a fixed minimum height for the cards
        _hover={{ cursor: "pointer" }}
        display="flex" // Use Flexbox
        flexDirection="column" // Stack elements vertically
        justifyContent="space-between" // Push elements to the bottom
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
            color={"blue.500"}
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
            <Tag size="sm" padding="0 5px" key={tech} mx={1}>
              {tech}
            </Tag>
          ))}
        </Box>
      </LinkBox>
    </Center>
  </MotionBox>
);
