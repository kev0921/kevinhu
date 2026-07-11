import React from "react";
import {
  Box,
  Image,
  Text,
  Stack,
  useColorModeValue,
  Tag,
  Flex,
} from "@chakra-ui/react";
import { MotionBox } from "../utils/motion";
import { Project } from "../types/project";

interface ISideProjectCard {
  project: Project;
}

export const SideProjectCard: React.FC<ISideProjectCard> = ({ project }) => {
  const cardBg = useColorModeValue(
    "rgba(255, 255, 255, 0.5)",
    "rgba(255, 255, 255, 0.04)"
  );
  const cardBorder = useColorModeValue(
    "rgba(255, 255, 255, 0.7)",
    "rgba(255, 255, 255, 0.08)"
  );
  const tagBg = useColorModeValue(
    "rgba(120, 80, 255, 0.08)",
    "rgba(120, 80, 255, 0.15)"
  );
  const tagColor = useColorModeValue("#5a3fd6", "#a78bfa");

  return (
    <MotionBox
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 350, damping: 22 }}
    >
      <Box
        className="bento-item"
        bg={cardBg}
        border="1px solid"
        borderColor={cardBorder}
        sx={{
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
        }}
        overflow="hidden"
        cursor="pointer"
        _hover={{
          borderColor: useColorModeValue(
            "rgba(120, 80, 255, 0.25)",
            "rgba(120, 80, 255, 0.35)"
          ),
          boxShadow: "0 16px 48px rgba(120, 80, 255, 0.12)",
        }}
        transition="all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)"
        display="flex"
        flexDirection="column"
        minH="380px"
        onClick={() => {
          project.link && window.open(project.link);
        }}
      >
        {/* Image with gradient overlay */}
        <Box position="relative" overflow="hidden">
          <Image
            src={project.imageUrl}
            objectFit="cover"
            h="200px"
            w="100%"
            transition="transform 0.5s ease"
            _groupHover={{ transform: "scale(1.05)" }}
          />
          <Box
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            h="60px"
            bgGradient={useColorModeValue(
              "linear(to-t, rgba(255,255,255,0.5), transparent)",
              "linear(to-t, rgba(10,10,20,0.8), transparent)"
            )}
          />
        </Box>

        <Stack flex={1} px={5} py={4} spacing={2}>
          <Text
            bgGradient="linear(to-r, #7c5cff, #5b9cff)"
            bgClip="text"
            textTransform="uppercase"
            fontWeight="800"
            fontSize="md"
            letterSpacing="0.04em"
          >
            {project?.name}
          </Text>
          <Text
            fontSize="sm"
            color={useColorModeValue("gray.600", "whiteAlpha.600")}
            lineHeight="1.6"
            noOfLines={3}
          >
            {project?.summary}
          </Text>
        </Stack>

        <Flex px={5} pb={4} flexWrap="wrap" gap={1.5}>
          {project.tech.map((tech) => (
            <Tag
              key={tech}
              size="sm"
              px={3}
              py={1}
              borderRadius="full"
              bg={tagBg}
              color={tagColor}
              fontWeight="600"
              fontSize="xs"
              border="1px solid"
              borderColor={useColorModeValue(
                "rgba(120, 80, 255, 0.1)",
                "rgba(120, 80, 255, 0.2)"
              )}
            >
              {tech}
            </Tag>
          ))}
        </Flex>
      </Box>
    </MotionBox>
  );
};
